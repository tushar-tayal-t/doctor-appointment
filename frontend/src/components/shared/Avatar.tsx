import type { FC } from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ initials, className }) => (
  <div className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F1FB] text-sm font-semibold text-[#185FA5]", className)}>
    {initials}
  </div>
);
