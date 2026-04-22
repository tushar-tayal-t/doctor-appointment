import type { FC } from "react";
import type { Patient } from "@/types/patient";

interface PatientCardProps {
  patient: Patient;
}

export const PatientCard: FC<PatientCardProps> = ({ patient }) => (
  <article className="rounded-xl border border-slate-200 bg-white p-4">
    <h3 className="font-semibold">{patient.name}</h3>
    <p className="text-sm text-slate-500">{patient.condition}</p>
  </article>
);
