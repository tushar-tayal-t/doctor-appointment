import type { FC } from "react";
import type { Appointment } from "@/types/appointment";
import { AppointmentStatusBadge } from "@/components/appointments/AppointmentStatusBadge";

interface AppointmentRowProps {
  appointment: Appointment;
}

export const AppointmentRow: FC<AppointmentRowProps> = ({ appointment }) => (
  <tr className="border-t border-slate-100 hover:bg-slate-50">
    <td className="px-4 py-3">{appointment.patientName}</td>
    <td className="px-4">{appointment.doctorName}</td>
    <td className="px-4">{appointment.department}</td>
    <td className="px-4">{appointment.date}</td>
    <td className="px-4">{appointment.time}</td>
    <td className="px-4">{appointment.type}</td>
    <td className="px-4"><AppointmentStatusBadge status={appointment.status} /></td>
    <td className="px-4"><button className="text-[#185FA5]">View</button></td>
  </tr>
);
