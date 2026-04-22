import type { FC } from "react";

interface DoctorAvailabilityBadgeProps {
  availability: string;
  onLeave: boolean;
}

export const DoctorAvailabilityBadge: FC<DoctorAvailabilityBadgeProps> = ({ availability, onLeave }) => (
  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs ${onLeave ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700"}`}>{availability}</span>
);
