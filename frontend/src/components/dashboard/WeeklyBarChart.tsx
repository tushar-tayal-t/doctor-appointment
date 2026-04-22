import type { FC } from "react";
import { cn } from "@/lib/utils";

const bars = [
  { day: "Mon", height: "h-24" }, 
  { day: "Tue", height: "h-32" }, 
  { day: "Wed", height: "h-40" }, 
  { day: "Thu", height: "h-28" }, 
  { day: "Fri", height: "h-36" }, 
  { day: "Sat", height: "h-20" }, 
  { day: "Sun", height: "h-16" },
];

export const WeeklyBarChart: FC = () => (
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    <h3 className="mb-4 font-semibold">Weekly appointments</h3>
    <div className="flex items-end gap-3">
      {bars.map((bar, i) => <div key={bar.day} className="flex-1 text-center">
          <div 
            className={cn("mx-auto w-7 rounded-t", 
              bar.height, 
              i === 3 ? "bg-[#185FA5]" : i > 3 ? "bg-slate-300" : "bg-[#93b7de]")} 
          />
          <p className="mt-1 text-xs text-slate-500">{bar.day}</p>
        </div>)}
    </div>
  </div>
);
