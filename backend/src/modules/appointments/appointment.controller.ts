import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as appointmentService from "./appointment.service.js";
import type { CreateAppointmentInput } from "./appointment.validation.js";

export const createAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = req.body as CreateAppointmentInput;
    const result = await appointmentService.createAppointment(data);

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Appointment created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const getAppointments = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await appointmentService.listAppointments();

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Appointments fetched successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
