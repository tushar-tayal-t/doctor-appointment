import type { FC, ReactNode } from "react";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen">
    <div className="hidden md:flex">
      <Sidebar />
    </div>
    <MobileSidebar />
    <main className="flex-1 overflow-x-hidden">
      <Topbar title="MediBook Dashboard" />
      <div className="p-4 md:p-6">{children}</div>
    </main>
  </div>
);

export default DashboardLayout;
