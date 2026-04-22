"use client";

import Link from "next/link";
import { Bell, Menu, Plus, Search } from "lucide-react";
import type { FC } from "react";
import { useSidebarStore } from "@/store/useSidebarStore";

interface TopbarProps {
  title: string;
}

export const Topbar: FC<TopbarProps> = ({ title }) => {
  const { toggle } = useSidebarStore();
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <button className="md:hidden" onClick={toggle} aria-label="Open sidebar"><Menu size={20} /></button>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-slate-400 lg:flex">
          <Search size={16} />
          <input placeholder="Search..." className="w-44 text-sm outline-none" />
        </div>
        <button className="relative rounded-md border border-slate-200 p-2"><Bell size={16} /><span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#185FA5] text-[10px] text-white">3</span></button>
        <Link href="/appointments/new" className="inline-flex items-center gap-2 rounded-md bg-[#185FA5] px-3 py-2 text-sm text-white"><Plus size={16} /> New Appointment</Link>
      </div>
    </header>
  );
};
