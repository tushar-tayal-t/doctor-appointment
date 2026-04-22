import type { AppointmentStatus } from "@/types/common";

export type AppointmentType = "New" | "Follow-up" | "Routine" | "Post-op";

export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  type: AppointmentType;
  status: AppointmentStatus;
}

export interface AppointmentFilters {
  status?: AppointmentStatus | "all" | "today";
  search?: string;
}
