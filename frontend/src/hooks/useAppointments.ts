"use client";

import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "@/services/appointmentService";
import type { AppointmentFilters } from "@/types/appointment";

export const useAppointments = (filters?: AppointmentFilters) =>
  useQuery({
    queryKey: ["appointments", filters],
    queryFn: async () => {
      // --- REAL API (uncomment when backend is ready) ---
      // const { data } = await apiClient.get("/appointments", { params: filters });
      // return data;
      // --------------------------------------------------
      return getAppointments(filters);
    },
  });
