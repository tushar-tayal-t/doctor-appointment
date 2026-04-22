"use client";

import { useQuery } from "@tanstack/react-query";
import { getPatients } from "@/services/patientService";

export const usePatients = () =>
  useQuery({
    queryKey: ["patients"],
    queryFn: async () => {
      // --- REAL API (uncomment when backend is ready) ---
      // const { data } = await apiClient.get("/patients");
      // return data;
      // --------------------------------------------------
      return getPatients();
    },
  });
