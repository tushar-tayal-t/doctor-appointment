import type { Patient } from "@/types/patient";

export const mockPatients: Patient[] = [
  { id: "pat-001", name: "Aarav Sharma", age: 42, gender: "Male", contact: "+91 98765 43210", condition: "Hypertension", lastVisit: "2026-03-22", nextAppointment: "2026-04-18" },
  { id: "pat-002", name: "Diya Kapoor", age: 29, gender: "Female", contact: "+91 98111 22334", condition: "Eczema", lastVisit: "2026-04-02", nextAppointment: "2026-04-16" },
  { id: "pat-003", name: "Kabir Singh", age: 55, gender: "Male", contact: "+91 99220 11009", condition: "Knee Osteoarthritis", lastVisit: "2026-04-10", nextAppointment: "2026-04-24" },
  { id: "pat-004", name: "Ananya Iqbal", age: 34, gender: "Female", contact: "+91 98900 44556", condition: "Migraine", lastVisit: "2026-03-29", nextAppointment: "2026-04-20" },
  { id: "pat-005", name: "Rudra Bose", age: 11, gender: "Male", contact: "+91 97654 12121", condition: "Seasonal Flu", lastVisit: "2026-04-05", nextAppointment: "2026-04-15" },
];
