"use client";

import type { FC } from "react";
import { Stethoscope } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Avatar } from "@/components/shared/Avatar";
import { NavItem } from "@/components/layout/NavItem";

export const Sidebar: FC = () => (
  <aside className="h-screen w-[220px] flex-col border-r border-slate-200 bg-white flex">
    <div className="flex items-center gap-2 px-5 py-6 text-[#185FA5]">
      <Stethoscope size={20} />
      <span className="text-lg font-semibold">{siteConfig.name}</span>
    </div>
    <div className="space-y-6 px-2">
      <section className="space-y-2">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Main</p>
        {siteConfig.nav.main.map((item) => <NavItem key={item.href} {...item} />)}
      </section>
      <section className="space-y-2">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Analytics</p>
        {siteConfig.nav.analytics.map((item) => <NavItem key={item.href} {...item} />)}
      </section>
    </div>
    <div className="mt-auto flex items-center gap-3 border-t border-slate-200 p-4">
      <Avatar initials="AS" />
      <div>
        <p className="text-sm font-medium">{siteConfig.doctorName}</p>
        <p className="text-xs text-slate-500">{siteConfig.doctorRole}</p>
      </div>
    </div>
  </aside>
);
