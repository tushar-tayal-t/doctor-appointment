export interface Report {
  department: string;
  appointments: number;
  completed: number;
  cancelled: number;
  revenue: number;
}

export interface RevenueMetric {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
}
