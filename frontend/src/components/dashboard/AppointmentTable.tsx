import Link from "next/link";
import type { FC } from "react";
import { mockAppointments } from "@/data/mock/appointments";
import { StatusBadge } from "@/components/shared/StatusBadge";

export const AppointmentTable: FC = () => (
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    <div className="mb-3 flex items-center justify-between">
      <h3 className="font-semibold">Recent appointments</h3>
      <Link href="/appointments" className="text-sm text-[#185FA5]">View all</Link>
    </div>
    <table className="w-full text-sm">
      <thead className="text-left text-slate-500"><tr><th>Patient</th><th>Doctor</th><th>Time</th><th>Status</th></tr></thead>
      <tbody>
        {
        mockAppointments.slice(0, 5).map(
            (item) => (
                <tr key={item.id} className="border-t border-slate-100">
                  <td className="py-2">{item.patientName}</td>
                  <td>{item.doctorName}</td>
                  <td>{item.time}</td>
                  <td><StatusBadge status={item.status} /></td>
                </tr>
            )
          )
        }
      </tbody>
    </table>
  </div>
);
