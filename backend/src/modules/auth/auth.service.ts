import { createHash, randomUUID } from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserRole } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../../common/errors/app.error.js";
import { env } from "../../config/env.js";
import { prisma } from "../../config/prisma.js";
import type { LoginInput, RegisterInput } from "./auth.validation.js";

type UserPayload = {
  id: string;
  email: string;
  fullName: string | null;
  role: UserRole;
};

type TokenPayload = {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiresInMs: number;
};

type AuthResponse = {
  accessToken: string;
  user: UserPayload;
};

type RequestContext = {
  userAgent?: string;
  ipAddress?: string;
};

type RefreshTokenJwtPayload = jwt.JwtPayload & {
  sub: string;
  sid: string;
};

const hashToken = (token: string): string => createHash("sha256").update(token).digest("hex");
const refreshTokenStore = (prisma as unknown as { refreshToken: any }).refreshToken;

const parseDurationToMs = (value: string): number => {
  const durationRegex = /^(\d+)(ms|s|m|h|d)$/;
  const match = value.match(durationRegex);

  if (!match) {
    throw new AppError("Invalid JWT_REFRESH_EXPIRES_IN format", StatusCodes.INTERNAL_SERVER_ERROR);
  }

  const amount = Number(match[1]);
  const unit = match[2];
  const multipliers: Record<string, number> = {
    ms: 1,
    s: 1000,
    m: 60_000,
    h: 3_600_000,
    d: 86_400_000
  };

  return amount * multipliers[unit];
};

const toUserPayload = (user: {
  id: string;
  email: string;
  fullName: string | null;
  role: UserRole;
}): UserPayload => ({
  id: user.id,
  email: user.email,
  fullName: user.fullName,
  role: user.role
});

const signAccessToken = (user: UserPayload): string =>
  jwt.sign({ sub: user.id, email: user.email, role: user.role }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"]
  });

const issueTokenPair = async (
  user: UserPayload,
  context: RequestContext,
  rotateFromSessionId?: string
): Promise<TokenPayload> => {
  const refreshSessionId = randomUUID();
  const refreshToken = jwt.sign({ sub: user.id, sid: refreshSessionId }, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN as jwt.SignOptions["expiresIn"]
  });

  const refreshTokenExpiresInMs = parseDurationToMs(env.JWT_REFRESH_EXPIRES_IN);
  const expiresAt = new Date(Date.now() + refreshTokenExpiresInMs);
  const refreshTokenHash = hashToken(refreshToken);

  await prisma.$transaction(async (tx) => {
    await (tx as unknown as { refreshToken: any }).refreshToken.create({
      data: {
        id: refreshSessionId,
        tokenHash: refreshTokenHash,
        userId: user.id,
        expiresAt,
        userAgent: context.userAgent,
        ipAddress: context.ipAddress
      }
    });

    if (rotateFromSessionId) {
      await (tx as unknown as { refreshToken: any }).refreshToken.update({
        where: { id: rotateFromSessionId },
        data: {
          revokedAt: new Date(),
          replacedById: refreshSessionId
        }
      });
    }
  });

  return {
    accessToken: signAccessToken(user),
    refreshToken,
    refreshTokenExpiresInMs
  };
};

const revokeAllUserSessions = async (userId: string): Promise<void> => {
  await refreshTokenStore.updateMany({
    where: {
      userId,
      revokedAt: null
    },
    data: {
      revokedAt: new Date()
    }
  });
};

export const register = async (
  input: RegisterInput,
  context: RequestContext
): Promise<AuthResponse & TokenPayload> => {
  const existingUser = await prisma.user.findUnique({
    where: { email: input.email }
  });

  if (existingUser) {
    throw new AppError("Email is already registered", StatusCodes.CONFLICT);
  }

  const passwordHash = await bcrypt.hash(input.password, 12);
  const user = await prisma.user.create({
    data: {
      email: input.email,
      passwordHash,
      fullName: input.fullName,
      role: input.role
    }
  });

  const payload = toUserPayload(user);
  const tokens = await issueTokenPair(payload, context);

  return {
    ...tokens,
    user: payload
  };
};

export const login = async (
  input: LoginInput,
  context: RequestContext
): Promise<AuthResponse & TokenPayload> => {
  const user = await prisma.user.findUnique({
    where: { email: input.email }
  });

  if (!user) {
    throw new AppError("Invalid email or password", StatusCodes.UNAUTHORIZED);
  }

  const isPasswordCorrect = await bcrypt.compare(input.password, user.passwordHash);
  if (!isPasswordCorrect) {
    throw new AppError("Invalid email or password", StatusCodes.UNAUTHORIZED);
  }

  const payload = toUserPayload(user);
  const tokens = await issueTokenPair(payload, context);

  return {
    ...tokens,
    user: payload
  };
};

export const refreshSession = async (
  rawRefreshToken: string,
  context: RequestContext
): Promise<AuthResponse & TokenPayload> => {
  let payload: RefreshTokenJwtPayload;
  try {
    payload = jwt.verify(rawRefreshToken, env.JWT_REFRESH_SECRET) as RefreshTokenJwtPayload;
  } catch {
    throw new AppError("Invalid refresh token", StatusCodes.UNAUTHORIZED);
  }

  const tokenHash = hashToken(rawRefreshToken);
  const existingSession = await refreshTokenStore.findUnique({
    where: { tokenHash },
    include: { user: true }
  });

  if (!existingSession) {
    await revokeAllUserSessions(payload.sub);
    throw new AppError("Invalid refresh token", StatusCodes.UNAUTHORIZED);
  }

  if (existingSession.revokedAt || existingSession.expiresAt.getTime() <= Date.now()) {
    await revokeAllUserSessions(existingSession.userId);
    throw new AppError("Invalid refresh token", StatusCodes.UNAUTHORIZED);
  }

  if (existingSession.id !== payload.sid) {
    await revokeAllUserSessions(existingSession.userId);
    throw new AppError("Invalid refresh token", StatusCodes.UNAUTHORIZED);
  }

  const user = toUserPayload(existingSession.user);
  const tokens = await issueTokenPair(user, context, existingSession.id);

  return {
    ...tokens,
    user
  };
};

export const logout = async (rawRefreshToken: string): Promise<void> => {
  const tokenHash = hashToken(rawRefreshToken);
  await refreshTokenStore.updateMany({
    where: {
      tokenHash,
      revokedAt: null
    },
    data: {
      revokedAt: new Date()
    }
  });
};

export const logoutAll = async (userId: string): Promise<void> => {
  await revokeAllUserSessions(userId);
};

export const getMe = async (userId: string): Promise<UserPayload> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      fullName: true,
      role: true
    }
  });

  if (!user) {
    throw new AppError("User not found", StatusCodes.NOT_FOUND);
  }

  return user;
};
