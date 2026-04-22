import { Star } from "lucide-react";
import { mockDoctors } from "@/data/mock/doctors";
import { Avatar } from "@/components/shared/Avatar";
import Link from "next/link";

const DoctorsPage = () => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {mockDoctors.map((doctor) => (
      <Link href={`/doctors/${doctor.id}`}>
        <article key={doctor.id} className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <Avatar initials={doctor.initials} />
            <div>
              <h3 className="font-semibold">{doctor.name}</h3>
              <p className="text-sm text-slate-500">{doctor.specialty}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-sm"><Star size={16} className="fill-amber-400 text-amber-400" /> {doctor.rating} • {doctor.experience} yrs</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm"><div className="rounded bg-slate-50 p-2">Today: {doctor.todayCount}</div><div className="rounded bg-slate-50 p-2">This month: {doctor.monthCount}</div></div>
          <p className={`mt-4 text-sm ${doctor.onLeave ? "text-rose-600" : "text-slate-600"}`}>{doctor.availability}</p>
        </article>
      </Link>
    ))}
  </div>
);

export default DoctorsPage;
