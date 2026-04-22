"use client";

import { useState } from "react";
import { APPOINTMENT_FILTERS } from "@/lib/constants";
import { mockAppointments } from "@/data/mock/appointments";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import Link from "next/link";

const AppointmentsPage = () => {
  const [active, setActive] = useState("all");
  const rows = (active === "all") 
    ? mockAppointments 
    : mockAppointments.filter(
        (item) => 
          (active === "today") 
            ? item.date === "2026-04-13" 
            : item.status === active
      );
    
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">{APPOINTMENT_FILTERS.map((filter) => <button key={filter.key} onClick={() => setActive(filter.key)} className={`rounded-full px-3 py-1 text-sm ${active === filter.key ? "bg-[#185FA5] text-white" : "bg-white text-slate-600 border border-slate-200"}`}>{filter.label} ({filter.count})</button>)}</div>
      <DataTable headers={["Patient", "Doctor", "Department", "Date", "Time", "Type", "Status", "Action"]}>
        {rows.map((row) => <tr key={row.id} className="border-t border-slate-100 hover:bg-slate-50">
          <td className="px-4 py-3">{row.patientName}</td>
          <td className="px-4">{row.doctorName}</td>
          <td className="px-4">{row.department}</td>
          <td className="px-4">{row.date}</td>
          <td className="px-4">{row.time}</td>
          <td className="px-4">{row.type}</td>
          <td className="px-4"><StatusBadge status={row.status} /></td>
          <td className="px-4">
            <button 
              className="text-[#185FA5]"
            ><Link href={`/appointments/${row.id}`}>View</Link></button>
          </td>
        </tr>)}
      </DataTable>
    </div>
  );
};

export default AppointmentsPage;
