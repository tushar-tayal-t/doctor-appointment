"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({ 
  clinicName: z.string().min(2), 
  address: z.string().min(5), 
  phone: z.string().min(10), 
  slotDuration: z.string() 
});

type SettingsFormData = z.infer<typeof schema>;

const SettingsPage = () => {
  const { register, handleSubmit } = useForm<SettingsFormData>({
    resolver: zodResolver(schema),
    defaultValues: { 
      clinicName: "MediBook Multi-Speciality Clinic", 
      address: "12 MG Road, Bengaluru", 
      phone: "+91 90000 11223", 
      slotDuration: "30 mins" 
    },
  });

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <form onSubmit={handleSubmit((values) => console.log(values))} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Clinic information</h2>
        <input {...register("clinicName")} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        <input {...register("address")} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        <input {...register("phone")} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        <button className="rounded-md bg-[#185FA5] px-4 py-2 text-white">Save</button>
      </form>
      <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Working hours</h2>
        <p className="text-sm text-slate-600">Mon - Sat: 09:00 AM to 06:00 PM</p>
        <label className="text-sm font-medium text-slate-700">Appointment slot duration</label>
        <select 
          {...register("slotDuration")} 
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        >
          <option>15 mins</option>
          <option>30 mins</option>
          <option>45 mins</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsPage;
