import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as authService from "./auth.service.js";
import type { LoginInput, RegisterInput } from "./auth.validation.js";
import { env } from "../../config/env.js";
import { AppError } from "../../common/errors/app.error.js";

const refreshCookiePath = "/api/v1/auth";

const parseCookie = (req: Request, cookieName: string): string | null => {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) {
    return null;
  }

  const chunks = cookieHeader.split(";").map((item) => item.trim());
  for (const chunk of chunks) {
    if (!chunk.startsWith(`${cookieName}=`)) {
      continue;
    }
    return decodeURIComponent(chunk.substring(cookieName.length + 1));
  }

  return null;
};

const buildRefreshCookieOptions = (maxAge?: number) => ({
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: refreshCookiePath,
  maxAge
});

const sendAuthSuccess = (
  res: Response,
  statusCode: number,
  message: string,
  payload: Awaited<ReturnType<typeof authService.login>>
): void => {
  res.cookie(
    env.JWT_REFRESH_COOKIE_NAME,
    payload.refreshToken,
    buildRefreshCookieOptions(payload.refreshTokenExpiresInMs)
  );

  res.status(statusCode).json({
    success: true,
    message,
    data: {
      accessToken: payload.accessToken,
      user: payload.user
    }
  });
};

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = req.body as RegisterInput;
    const result = await authService.register(data, {
      userAgent: req.headers["user-agent"],
      ipAddress: req.ip
    });
    sendAuthSuccess(res, StatusCodes.CREATED, "User registered successfully", result);
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = req.body as LoginInput;
    const result = await authService.login(data, {
      userAgent: req.headers["user-agent"],
      ipAddress: req.ip
    });
    sendAuthSuccess(res, StatusCodes.OK, "Login successful", result);
  } catch (error) {
    next(error);
  }
};

export const refresh = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const refreshToken = parseCookie(req, env.JWT_REFRESH_COOKIE_NAME);
    if (!refreshToken) {
      throw new AppError("Refresh token missing", StatusCodes.UNAUTHORIZED);
    }

    const result = await authService.refreshSession(refreshToken, {
      userAgent: req.headers["user-agent"],
      ipAddress: req.ip
    });
    sendAuthSuccess(res, StatusCodes.OK, "Token refreshed successfully", result);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const refreshToken = parseCookie(req, env.JWT_REFRESH_COOKIE_NAME);
    if (refreshToken) {
      await authService.logout(refreshToken);
    }

    res.clearCookie(env.JWT_REFRESH_COOKIE_NAME, buildRefreshCookieOptions());
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Logout successful"
    });
  } catch (error) {
    next(error);
  }
};

export const logoutAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await authService.logoutAll(req.user!.id);
    res.clearCookie(env.JWT_REFRESH_COOKIE_NAME, buildRefreshCookieOptions());
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Logged out from all devices successfully"
    });
  } catch (error) {
    next(error);
  }
};

export const me = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await authService.getMe(req.user!.id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "User fetched successfully",
      data: user
    });
  } catch (error) {
    next(error);
  }
};
