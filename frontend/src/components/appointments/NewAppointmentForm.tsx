"use client";

import type { FC } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  patientName: z.string().min(2),
  doctorName: z.string().min(2),
  date: z.string().min(1),
  time: z.string().min(1),
});
type NewAppointmentFormData = z.infer<typeof schema>;

export const NewAppointmentForm: FC = () => {
  const { register, handleSubmit } = useForm<NewAppointmentFormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit((values) => console.log(values))} className="space-y-3">
      <input {...register("patientName")} className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Patient name" />
      <input {...register("doctorName")} className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Doctor name" />
      <input type="date" {...register("date")} className="w-full rounded-md border border-slate-300 px-3 py-2" />
      <input type="time" {...register("time")} className="w-full rounded-md border border-slate-300 px-3 py-2" />
      <button className="rounded-md bg-[#185FA5] px-4 py-2 text-white">Submit</button>
    </form>
  );
};
