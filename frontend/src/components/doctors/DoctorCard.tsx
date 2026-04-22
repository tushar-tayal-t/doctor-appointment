import type { FC } from "react";
import type { Doctor } from "@/types/doctor";
import { Avatar } from "@/components/shared/Avatar";

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard: FC<DoctorCardProps> = ({ doctor }) => (
  <article className="rounded-xl border border-slate-200 bg-white p-4">
    <div className="flex items-center gap-3"><Avatar initials={doctor.initials} /><div><h3 className="font-semibold">{doctor.name}</h3><p className="text-sm text-slate-500">{doctor.specialty}</p></div></div>
  </article>
);
