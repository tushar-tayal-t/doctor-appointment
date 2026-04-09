import { Router } from "express";
import { createAppointment, getAppointments } from "./appointment.controller.js";
import { validateBody } from "../../common/middlewares/validate.middleware.js";
import { createAppointmentSchema } from "./appointment.validation.js";

const appointmentRouter = Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.post("/", validateBody(createAppointmentSchema), createAppointment);

export default appointmentRouter;
