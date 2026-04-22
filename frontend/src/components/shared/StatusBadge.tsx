import type { FC } from "react";
import type { AppointmentStatus } from "@/types/common";
import { STATUS_STYLES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: AppointmentStatus;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => (
  <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium capitalize", STATUS_STYLES[status])}>
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {status}
  </span>
);
