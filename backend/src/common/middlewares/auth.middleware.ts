import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../errors/app.error.js";
import { env } from "../../config/env.js";

type AccessTokenPayload = jwt.JwtPayload & {
  sub: string;
  email: string;
  role: "PATIENT" | "DOCTOR" | "ADMIN";
};

const extractBearerToken = (authorizationHeader?: string): string | null => {
  if (!authorizationHeader) {
    return null;
  }

  const [scheme, token] = authorizationHeader.split(" ");
  if (scheme !== "Bearer" || !token) {
    return null;
  }

  return token;
};

export const requireAuth = (req: Request, _res: Response, next: NextFunction): void => {
  try {
    const token = extractBearerToken(req.headers.authorization);
    if (!token) {
      throw new AppError("Unauthorized", StatusCodes.UNAUTHORIZED);
    }

    const payload = jwt.verify(token, env.JWT_SECRET) as AccessTokenPayload;
    req.user = {
      id: payload.sub,
      email: payload.email,
      role: payload.role
    };

    next();
  } catch {
    next(new AppError("Unauthorized", StatusCodes.UNAUTHORIZED));
  }
};
