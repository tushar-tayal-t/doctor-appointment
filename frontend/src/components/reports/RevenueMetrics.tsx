import type { FC } from "react";
import { mockRevenueMetrics } from "@/data/mock/reports";

export const RevenueMetrics: FC = () => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    {mockRevenueMetrics.map((metric) => <div key={metric.label} className="rounded-xl border border-slate-200 bg-white p-4"><p className="text-sm text-slate-500">{metric.label}</p><p className="mt-2 text-2xl font-semibold">{metric.value}</p></div>)}
  </div>
);
