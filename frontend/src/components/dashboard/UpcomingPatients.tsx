import type { FC } from "react";
import { mockPatients } from "@/data/mock/patients";
import { Avatar } from "@/components/shared/Avatar";

export const UpcomingPatients: FC = () => (
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    <h3 className="mb-3 font-semibold">Upcoming patients</h3>
    <div className="space-y-3">{mockPatients.slice(0, 3).map((patient, index) => <div key={patient.id} className="flex items-center gap-3"><Avatar initials={patient.name.split(" ").map((part) => part[0]).join("").slice(0, 2)} /><div><p className="font-medium">{patient.name}</p><p className="text-xs text-slate-500">{patient.condition}</p></div><p className="ml-auto text-xs text-slate-500">{["11:00 AM", "12:30 PM", "03:15 PM"][index]}</p></div>)}</div>
  </div>
);
