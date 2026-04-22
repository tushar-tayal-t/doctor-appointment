import { notFound } from "next/navigation";
import { mockAppointments } from "@/data/mock/appointments";
import { StatusBadge } from "@/components/shared/StatusBadge";

interface AppointmentDetailProps {
  params: { id: string };
}

const AppointmentDetailPage = ({ params }: AppointmentDetailProps) => {
  const appointment = mockAppointments.find((item) => item.id === params.id);
  if (!appointment) return notFound();
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h1 className="text-xl font-semibold">{appointment.patientName}</h1>
      <p className="mt-2 text-slate-600">{appointment.department} with {appointment.doctorName}</p>
      <p className="mt-1 text-slate-600">{appointment.date} at {appointment.time}</p>
      <div className="mt-4"><StatusBadge status={appointment.status} /></div>
    </div>
  );
};

export default AppointmentDetailPage;
