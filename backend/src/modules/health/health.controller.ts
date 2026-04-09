import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getHealth = (_req: Request, res: Response): void => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Backend service is healthy",
    timestamp: new Date().toISOString()
  });
};
