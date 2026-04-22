import type { AppointmentStatus } from "@/types/common";

export const STATUS_STYLES: Record<AppointmentStatus, string> = {
  confirmed: "bg-[#EAF3DE] text-[#3B6D11]",
  pending: "bg-[#FAEEDA] text-[#633806]",
  cancelled: "bg-[#FCEBEB] text-[#791F1F]",
  completed: "bg-[#E6F1FB] text-[#0C447C]",
};

export const APPOINTMENT_FILTERS = [
  { key: "all", label: "All", count: 48 },
  { key: "today", label: "Today", count: 24 },
  { key: "confirmed", label: "Confirmed", count: 18 },
  { key: "pending", label: "Pending", count: 6 },
  { key: "completed", label: "Completed", count: 112 },
  { key: "cancelled", label: "Cancelled", count: 8 },
] as const;
