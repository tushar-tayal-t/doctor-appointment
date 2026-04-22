"use client";

import type { FC } from "react";
import { APPOINTMENT_FILTERS } from "@/lib/constants";

interface AppointmentFiltersProps {
  active: string;
  onChange: (value: string) => void;
}

export const AppointmentFilters: FC<AppointmentFiltersProps> = ({ active, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {APPOINTMENT_FILTERS.map((filter) => <button key={filter.key} onClick={() => onChange(filter.key)} className={`rounded-full px-3 py-1 text-sm ${active === filter.key ? "bg-[#185FA5] text-white" : "border border-slate-200 bg-white text-slate-600"}`}>{filter.label} ({filter.count})</button>)}
  </div>
);
