import type { FC } from "react";
import { mockDoctors } from "@/data/mock/doctors";
import { DoctorCard } from "@/components/doctors/DoctorCard";

export const DoctorGrid: FC = () => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {mockDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
  </div>
);
