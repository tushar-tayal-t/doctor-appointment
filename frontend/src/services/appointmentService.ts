import { mockAppointments } from "@/data/mock/appointments";
import type { Appointment, AppointmentFilters } from "@/types/appointment";

export const getAppointments = async (filters?: AppointmentFilters): Promise<Appointment[]> => {
  // --- REAL API (uncomment when backend is ready) ---
  // const { data } = await apiClient.get("/appointments", { params: filters });
  // return data;
  // --------------------------------------------------
  if (!filters?.status || filters.status === "all") return mockAppointments;
  if (filters.status === "today") return mockAppointments.filter((item) => item.date === "2026-04-13");
  return mockAppointments.filter((item) => item.status === filters.status);
};

export const getAppointmentById = async (id: string): Promise<Appointment | undefined> => {
  // --- REAL API (uncomment when backend is ready) ---
  // const { data } = await apiClient.get(`/appointments/${id}`);
  // return data;
  // --------------------------------------------------
  return mockAppointments.find((item) => item.id === id);
};
