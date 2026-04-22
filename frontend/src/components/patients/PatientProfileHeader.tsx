import type { FC } from "react";
import type { Patient } from "@/types/patient";

interface PatientProfileHeaderProps {
  patient: Patient;
}

export const PatientProfileHeader: FC<PatientProfileHeaderProps> = ({ patient }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5">
    <h2 className="text-xl font-semibold">{patient.name}</h2>
    <p className="text-sm text-slate-500">{patient.age} years • {patient.gender}</p>
  </div>
);
