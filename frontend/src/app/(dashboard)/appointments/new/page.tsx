"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  patientName: z.string().min(2),
  doctorName: z.string().min(2),
  date: z.string().min(1),
  type: z.enum(["New", "Follow-up", "Routine", "Post-op"]),
});
type FormData = z.infer<typeof schema>;

const NewAppointmentPage = () => {
  const { register, handleSubmit } = useForm<FormData>({ 
    resolver: zodResolver(schema), 
    defaultValues: { type: "New" } 
  });

  return (
    <form 
      onSubmit={handleSubmit((values) => console.log(values))} 
      className="max-w-xl space-y-4 rounded-xl border border-slate-200 bg-white p-6">
      <h1 className="text-xl font-semibold">Book new appointment</h1>
      <input 
        {...register("patientName")} 
        className="w-full rounded-md border border-slate-300 px-3 py-2" 
        placeholder="Patient name" />
      <input 
        {...register("doctorName")} 
        className="w-full rounded-md border border-slate-300 px-3 py-2" 
        placeholder="Doctor name" />
      <input 
        type="date" {...register("date")} 
        className="w-full rounded-md border border-slate-300 px-3 py-2" />
      <select 
        {...register("type")} 
        className="w-full rounded-md border border-slate-300 px-3 py-2"
      >
        <option>New</option>
        <option>Follow-up</option>
        <option>Routine</option>
        <option>Post-op</option>
      </select>
      <button className="rounded-md bg-[#185FA5] px-4 py-2 text-white">Create appointment</button>
    </form>
  );
};

export default NewAppointmentPage;
