import { notFound } from "next/navigation";
import { mockDoctors } from "@/data/mock/doctors";

interface DoctorDetailProps {
  params: { id: string };
}

const DoctorDetailPage = ({ params }: DoctorDetailProps) => {
  const doctor = mockDoctors.find((item) => item.id === params.id);
  if (!doctor) return notFound();
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h1 className="text-xl font-semibold">{doctor.name}</h1>
      <p className="mt-1 text-slate-600">{doctor.specialty}</p>
      <p className="mt-3 text-slate-600">Experience: {doctor.experience} years</p>
      <p className="text-slate-600">Today: {doctor.todayCount} appointments</p>
    </div>
  );
};

export default DoctorDetailPage;
