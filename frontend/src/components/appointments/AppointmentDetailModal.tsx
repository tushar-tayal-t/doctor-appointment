"use client";

import type { FC } from "react";
import type { Appointment } from "@/types/appointment";

interface AppointmentDetailModalProps {
  appointment: Appointment | null;
  onClose: () => void;
}

export const AppointmentDetailModal: FC<AppointmentDetailModalProps> = ({ appointment, onClose }) =>
  appointment ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-5">
        <h3 className="text-lg font-semibold">{appointment.patientName}</h3>
        <p className="mt-1 text-sm text-slate-500">{appointment.department} • {appointment.type}</p>
        <p className="mt-3 text-sm">{appointment.date} at {appointment.time}</p>
        <button onClick={onClose} className="mt-5 rounded-md bg-[#185FA5] px-4 py-2 text-white">Close</button>
      </div>
    </div>
  ) : null;
