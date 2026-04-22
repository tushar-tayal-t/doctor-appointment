"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { mockPatients } from "@/data/mock/patients";
import { DataTable } from "@/components/shared/DataTable";

const PatientsPage = () => {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => mockPatients.filter((patient) => patient.name.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <div className="space-y-4">
      <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full max-w-sm rounded-md border border-slate-300 bg-white px-3 py-2" placeholder="Search patient by name" />
      <DataTable headers={["Name", "Age/Gender", "Contact", "Condition", "Last Visit", "Next Appt", "Action"]}>
        {rows.map((row) => <tr key={row.id} className="border-t border-slate-100"><td className="px-4 py-3">{row.name}</td><td className="px-4">{row.age} / {row.gender}</td><td className="px-4">{row.contact}</td><td className="px-4">{row.condition}</td><td className="px-4">{row.lastVisit}</td><td className="px-4">{row.nextAppointment}</td><td className="px-4"><Link href={`/patients/${row.id}`} className="text-[#185FA5]">Profile</Link></td></tr>)}
      </DataTable>
    </div>
  );
};

export default PatientsPage;
