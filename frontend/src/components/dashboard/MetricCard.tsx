import type { FC } from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  delta: string;
  trend: "up" | "down";
}

export const MetricCard: FC<MetricCardProps> = ({ title, value, delta, trend }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    <p className="text-sm text-slate-500">{title}</p>
    <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
    <p className={cn("mt-2 text-xs font-medium", trend === "up" ? "text-emerald-600" : "text-rose-600")}>{delta}</p>
  </div>
);
