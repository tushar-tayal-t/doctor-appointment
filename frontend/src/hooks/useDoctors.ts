"use client";

import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "@/services/doctorService";

export const useDoctors = () =>
  useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      // --- REAL API (uncomment when backend is ready) ---
      // const { data } = await apiClient.get("/doctors");
      // return data;
      // --------------------------------------------------
      return getDoctors();
    },
  });
