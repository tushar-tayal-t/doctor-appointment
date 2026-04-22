"use client";

import { useQuery } from "@tanstack/react-query";
import { getReports, getRevenueMetrics } from "@/services/reportService";

export const useReports = () =>
  useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      // --- REAL API (uncomment when backend is ready) ---
      // const { data } = await apiClient.get("/reports/departments");
      // return data;
      // --------------------------------------------------
      return getReports();
    },
  });

export const useRevenueMetrics = () =>
  useQuery({
    queryKey: ["report-metrics"],
    queryFn: async () => {
      // --- REAL API (uncomment when backend is ready) ---
      // const { data } = await apiClient.get("/reports/metrics");
      // return data;
      // --------------------------------------------------
      return getRevenueMetrics();
    },
  });
