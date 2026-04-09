import { Router } from "express";
import authRouter from "../modules/auth/auth.route.js";
import healthRouter from "../modules/health/health.route.js";
import appointmentRouter from "../modules/appointments/appointment.route.js";

const router = Router();

router.use("/health", healthRouter);
router.use("/auth", authRouter);
router.use("/appointments", appointmentRouter);

export default router;
