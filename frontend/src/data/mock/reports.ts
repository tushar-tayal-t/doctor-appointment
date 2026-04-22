import type { Report, RevenueMetric } from "@/types/report";

export const mockReports: Report[] = [
  { department: "Cardiology", appointments: 224, completed: 205, cancelled: 11, revenue: 1450000 },
  { department: "Dermatology", appointments: 172, completed: 160, cancelled: 7, revenue: 820000 },
  { department: "Orthopedics", appointments: 198, completed: 181, cancelled: 9, revenue: 1110000 },
  { department: "Pediatrics", appointments: 256, completed: 242, cancelled: 6, revenue: 980000 },
];

export const mockRevenueMetrics: RevenueMetric[] = [
  { label: "Monthly revenue", value: "₹42,00,000", delta: "+18% vs last month", trend: "up" },
  { label: "Total appointments", value: "1,286", delta: "+8% this month", trend: "up" },
  { label: "New patients", value: "324", delta: "+12 this week", trend: "up" },
  { label: "Cancellation rate", value: "6.2%", delta: "-1.3% from March", trend: "down" },
];
