import type { Doctor } from "@/types/doctor";

export const mockDoctors: Doctor[] = [
  { id: "doc-001", name: "Dr. Meera Nair", initials: "MN", specialty: "Cardiology", experience: 12, rating: 4.9, todayCount: 7, monthCount: 128, availability: "09:00 AM - 03:00 PM", onLeave: false },
  { id: "doc-002", name: "Dr. Rohan Iyer", initials: "RI", specialty: "Dermatology", experience: 9, rating: 4.7, todayCount: 5, monthCount: 94, availability: "10:00 AM - 05:00 PM", onLeave: false },
  { id: "doc-003", name: "Dr. Sanjana Rao", initials: "SR", specialty: "Orthopedics", experience: 15, rating: 4.8, todayCount: 6, monthCount: 102, availability: "On leave today", onLeave: true },
  { id: "doc-004", name: "Dr. Vikas Menon", initials: "VM", specialty: "Neurology", experience: 14, rating: 4.6, todayCount: 4, monthCount: 88, availability: "11:00 AM - 04:00 PM", onLeave: false },
  { id: "doc-005", name: "Dr. Priya Kulkarni", initials: "PK", specialty: "Pediatrics", experience: 10, rating: 4.9, todayCount: 8, monthCount: 136, availability: "08:30 AM - 02:30 PM", onLeave: false },
  { id: "doc-006", name: "Dr. Arjun Bhat", initials: "AB", specialty: "ENT", experience: 11, rating: 4.5, todayCount: 3, monthCount: 74, availability: "09:30 AM - 01:30 PM", onLeave: false },
];
