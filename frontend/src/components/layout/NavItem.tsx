"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const NavItem: FC<NavItemProps> = ({ href, label, icon: Icon }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-r-md border-l-2 border-transparent px-3 py-2 text-sm text-slate-600 transition",
        active && "border-[#185FA5] bg-[#E6F1FB] font-medium text-[#185FA5]",
      )}
    >
      <Icon size={16} />
      {label}
    </Link>
  );
};
