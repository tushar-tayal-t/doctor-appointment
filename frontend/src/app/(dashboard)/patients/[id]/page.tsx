import { notFound } from "next/navigation";
import { mockPatients } from "@/data/mock/patients";

interface PatientDetailProps {
  params: { id: string };
}

const PatientDetailPage = ({ params }: PatientDetailProps) => {
  const patient = mockPatients.find((item) => item.id === params.id);
  if (!patient) return notFound();
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h1 className="text-xl font-semibold">{patient.name}</h1>
      <p className="mt-2 text-slate-600">{patient.age} years • {patient.gender}</p>
      <p className="mt-2 text-slate-600">Condition: {patient.condition}</p>
      <p className="text-slate-600">Contact: {patient.contact}</p>
    </div>
  );
};

export default PatientDetailPage;
