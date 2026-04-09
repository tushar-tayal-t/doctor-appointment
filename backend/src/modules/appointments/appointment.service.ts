import { prisma } from "../../config/prisma.js";
import type { CreateAppointmentInput } from "./appointment.validation.js";

export const createAppointment = async (input: CreateAppointmentInput) => {
  return prisma.appointment.create({
    data: {
      doctorId: input.doctorId,
      patientId: input.patientId,
      appointmentAt: input.appointmentAt,
      reason: input.reason,
      notes: input.notes
    }
  });
};

export const listAppointments = async () => {
  return prisma.appointment.findMany({
    orderBy: { appointmentAt: "asc" }
  });
};
