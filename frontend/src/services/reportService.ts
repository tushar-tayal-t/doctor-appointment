import { mockReports, mockRevenueMetrics } from "@/data/mock/reports";
import type { Report, RevenueMetric } from "@/types/report";

export const getReports = async (): Promise<Report[]> => {
  // --- REAL API (uncomment when backend is ready) ---
  // const { data } = await apiClient.get("/reports/departments");
  // return data;
  // --------------------------------------------------
  return mockReports;
};

export const getRevenueMetrics = async (): Promise<RevenueMetric[]> => {
  // --- REAL API (uncomment when backend is ready) ---
  // const { data } = await apiClient.get("/reports/metrics");
  // return data;
  // --------------------------------------------------
  return mockRevenueMetrics;
};
