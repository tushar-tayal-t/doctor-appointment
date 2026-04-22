import type { FC } from "react";
import { Star } from "lucide-react";
import { mockDoctors } from "@/data/mock/doctors";
import { Avatar } from "@/components/shared/Avatar";

export const TopDoctors: FC = () => (
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    <h3 className="mb-3 font-semibold">Top doctors today</h3>
    <div className="space-y-3">{mockDoctors.slice(0, 3).map((doctor) => <div key={doctor.id} className="flex items-center gap-3"><Avatar initials={doctor.initials} /><div className="flex-1"><p className="font-medium">{doctor.name}</p><p className="text-xs text-slate-500">{doctor.specialty}</p></div><p className="inline-flex items-center gap-1 text-sm"><Star size={16} className="fill-amber-400 text-amber-400" /> {doctor.rating}</p></div>)}</div>
  </div>
);
