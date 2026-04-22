"use client";

import type { FC } from "react";
import { X } from "lucide-react";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Sidebar } from "@/components/layout/Sidebar";

export const MobileSidebar: FC = () => {
  const { isOpen, close } = useSidebarStore();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <button className="absolute inset-0 bg-black/40" onClick={close} aria-label="Close sidebar" />
      <div className="relative h-full w-[220px] bg-white">
        <button className="absolute right-3 top-3" onClick={close}><X size={18} /></button>
        <Sidebar />
      </div>
    </div>
  );
};
