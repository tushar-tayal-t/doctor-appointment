import type { FC } from "react";
import type { AppointmentStatus } from "@/types/common";
import { StatusBadge } from "@/components/shared/StatusBadge";

interface AppointmentStatusBadgeProps {
  status: AppointmentStatus;
}

export const AppointmentStatusBadge: FC<AppointmentStatusBadgeProps> = ({ status }) => <StatusBadge status={status} />;
