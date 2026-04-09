import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import { logger } from "../../config/logger.js";

type ErrorWithStatus = Error & { statusCode?: number };

export const errorHandler = (
  err: ErrorWithStatus,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof ZodError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Validation failed",
      errors: err.flatten().fieldErrors
    });
    return;
  }

  const statusCode = err.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR;
  const message =
    statusCode === StatusCodes.INTERNAL_SERVER_ERROR ? "Internal server error" : err.message;

  logger.error({ err }, "Request failed");

  res.status(statusCode).json({
    success: false,
    message
  });
};
