import type { FC, ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, description, action }) => (
  <div className="mb-5 flex items-start justify-between gap-4">
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
      {description ? <p className="text-sm text-slate-500">{description}</p> : null}
    </div>
    {action}
  </div>
);
