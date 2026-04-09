import { z } from "zod";

export const registerSchema = z.object({
  email: z.email().toLowerCase(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  fullName: z.string().trim().min(2).max(120).optional(),
  role: z.enum(["PATIENT", "DOCTOR", "ADMIN"]).default("PATIENT")
});

export const loginSchema = z.object({
  email: z.email().toLowerCase(),
  password: z.string().min(1)
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
