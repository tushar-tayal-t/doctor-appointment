import type { FC } from "react";

export const LoadingSpinner: FC = () => (
  <div className="flex min-h-40 items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#185FA5] border-t-transparent" />
  </div>
);
