import { prisma } from "../../config/prisma.js";
import type { CreateAppointmentInput } from "./appointment.validation.js";
import { AppError } from "../../common/errors/app.error.js";
import { StatusCodes } from "http-status-codes";
import { UserRole } from "@prisma/client";

type RequestUser = {
  id: string;
  role: UserRole;
};

export const createAppointment = async (input: CreateAppointmentInput, requestUser: RequestUser) => {
  if (requestUser.role === UserRole.PATIENT && input.patientId !== requestUser.id) {
    throw new AppError(
      "Patients can only create appointments for themselves",
      StatusCodes.FORBIDDEN
    );
  }

  const [doctor, patient, existingAppointment] = await Promise.all([
    prisma.user.findUnique({
      where: { id: input.doctorId },
      select: { id: true, role: true }
    }),
    prisma.user.findUnique({
      where: { id: input.patientId },
      select: { id: true, role: true }
    }),
    prisma.appointment.findFirst({
      where: {
        doctorId: input.doctorId,
        appointmentAt: input.appointmentAt
      },
      select: { id: true }
    })
  ]);

  if (!doctor || doctor.role !== UserRole.DOCTOR) {
    throw new AppError("Doctor not found", StatusCodes.NOT_FOUND);
  }

  if (!patient || patient.role !== UserRole.PATIENT) {
    throw new AppError("Patient not found", StatusCodes.NOT_FOUND);
  }

  if (existingAppointment) {
    throw new AppError("Doctor already has an appointment at this time", StatusCodes.CONFLICT);
  }

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

export const listAppointments = async (requestUser: RequestUser) => {
  const whereClause =
    requestUser.role === UserRole.ADMIN
      ? undefined
      : requestUser.role === UserRole.DOCTOR
        ? { doctorId: requestUser.id }
        : { patientId: requestUser.id };

  return prisma.appointment.findMany({
    where: whereClause,
    include: {
      doctor: {
        select: {
          id: true,
          email: true,
          fullName: true
        }
      },
      patient: {
        select: {
          id: true,
          email: true,
          fullName: true
        }
      }
    },
    orderBy: { appointmentAt: "asc" }
  });
};
