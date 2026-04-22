import type { Appointment } from "@/types/appointment";

export const mockAppointments: Appointment[] = [
  { id: "apt-001", patientName: "Aarav Sharma", doctorName: "Dr. Meera Nair", department: "Cardiology", date: "2026-04-13", time: "09:30 AM", type: "Follow-up", status: "confirmed" },
  { id: "apt-002", patientName: "Diya Kapoor", doctorName: "Dr. Rohan Iyer", department: "Dermatology", date: "2026-04-13", time: "10:00 AM", type: "New", status: "pending" },
  { id: "apt-003", patientName: "Kabir Singh", doctorName: "Dr. Sanjana Rao", department: "Orthopedics", date: "2026-04-13", time: "10:30 AM", type: "Routine", status: "completed" },
  { id: "apt-004", patientName: "Anaya Verma", doctorName: "Dr. Meera Nair", department: "Cardiology", date: "2026-04-13", time: "11:15 AM", type: "Post-op", status: "confirmed" },
  { id: "apt-005", patientName: "Ishaan Patel", doctorName: "Dr. Vikas Menon", department: "Neurology", date: "2026-04-13", time: "12:00 PM", type: "New", status: "cancelled" },
  { id: "apt-006", patientName: "Saanvi Joshi", doctorName: "Dr. Priya Kulkarni", department: "Pediatrics", date: "2026-04-13", time: "02:00 PM", type: "Follow-up", status: "confirmed" },
  { id: "apt-007", patientName: "Reyansh Gupta", doctorName: "Dr. Arjun Bhat", department: "ENT", date: "2026-04-14", time: "09:00 AM", type: "Routine", status: "pending" },
  { id: "apt-008", patientName: "Myra Chawla", doctorName: "Dr. Rohan Iyer", department: "Dermatology", date: "2026-04-14", time: "10:45 AM", type: "New", status: "confirmed" },
];
