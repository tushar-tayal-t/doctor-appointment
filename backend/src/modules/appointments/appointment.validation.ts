import { z } from "zod";

export const createAppointmentSchema = z.object({
  doctorId: z.string().min(1),
  patientId: z.string().min(1),
  appointmentAt: z.coerce
    .date()
    .refine((value) => value.getTime() > Date.now(), "Appointment must be in the future"),
  reason: z.string().trim().max(500).optional(),
  notes: z.string().trim().max(2000).optional()
});

export type CreateAppointmentInput = z.infer<typeof createAppointmentSchema>;
