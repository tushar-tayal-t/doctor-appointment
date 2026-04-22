import type { Metadata } from "next";
import { Activity, CalendarDays, LayoutDashboard, Settings, Stethoscope, Users } from "lucide-react";

export const siteConfig = { 
  name: "MediBook",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api",
  doctorName: "Dr. Aditi Sharma",
  doctorRole: "Chief Medical Officer",
  nav: {
    main: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Appointments", href: "/appointments", icon: CalendarDays },
      { label: "Patients", href: "/patients", icon: Users },
      { label: "Doctors", href: "/doctors", icon: Stethoscope },
    ],
    analytics: [
      { label: "Reports", href: "/reports", icon: Activity },
      { label: "Settings", href: "/settings", icon: Settings },
    ],
  },
} as const;

export const metadataConfig: Metadata = {
  title: "MediBook | Doctor Appointment Management",
  description: "Production-grade dashboard for appointment management",
};
