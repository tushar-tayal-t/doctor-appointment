import type { FC } from "react";
import { mockPatients } from "@/data/mock/patients";
import { DataTable } from "@/components/shared/DataTable";

export const PatientTable: FC = () => (
  <DataTable headers={["Name", "Age/Gender", "Contact", "Condition", "Last Visit", "Next Appt"]}>
    {mockPatients.map((patient) => <tr key={patient.id} className="border-t border-slate-100"><td className="px-4 py-3">{patient.name}</td><td className="px-4">{patient.age}/{patient.gender}</td><td className="px-4">{patient.contact}</td><td className="px-4">{patient.condition}</td><td className="px-4">{patient.lastVisit}</td><td className="px-4">{patient.nextAppointment}</td></tr>)}
  </DataTable>
);
