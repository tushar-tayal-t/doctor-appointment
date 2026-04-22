import type { FC } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export const EmptyState: FC<EmptyStateProps> = ({ title, description }) => (
  <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
    <h3 className="font-medium text-slate-900">{title}</h3>
    <p className="mt-1 text-sm text-slate-500">{description}</p>
  </div>
);
