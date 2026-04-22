import { Router } from "express";
import { createAppointment, getAppointments } from "./appointment.controller.js";
import { validateBody } from "../../common/middlewares/validate.middleware.js";
import { createAppointmentSchema } from "./appointment.validation.js";
import { requireAuth, requireRoles } from "../../common/middlewares/auth.middleware.js";

const appointmentRouter = Router();

appointmentRouter.use(requireAuth);
appointmentRouter.get("/", requireRoles("PATIENT", "DOCTOR", "ADMIN"), getAppointments);
appointmentRouter.post(
  "/",
  requireRoles("PATIENT", "ADMIN"),
  validateBody(createAppointmentSchema),
  createAppointment
);

export default appointmentRouter;
