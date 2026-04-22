import type { FC } from "react";

export const TodaySchedule: FC = () => (
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    <h3 className="font-semibold">Today&apos;s schedule</h3>
    <ul className="mt-3 space-y-2 text-sm text-slate-600">
      <li className="border-l-4 border-[#185FA5] pl-3">09:30 AM - Aarav Sharma</li>
      <li className="border-l-4 border-emerald-500 pl-3">10:30 AM - Kabir Singh</li>
      <li className="border-l-4 border-amber-500 pl-3">02:00 PM - Diya Kapoor</li>
    </ul>
  </div>
);
