import type { FC, ReactNode } from "react";

interface DataTableProps {
  headers: string[];
  children: ReactNode;
}

export const DataTable: FC<DataTableProps> = ({ headers, children }) => (
  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-50 text-slate-500">
        <tr>{headers.map((header) => <th key={header} className="px-4 py-3 font-medium">{header}</th>)}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);
