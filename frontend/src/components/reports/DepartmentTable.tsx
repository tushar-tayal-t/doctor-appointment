import type { FC } from "react";
import { mockReports } from "@/data/mock/reports";
import { formatCurrency } from "@/lib/utils";
import { DataTable } from "@/components/shared/DataTable";

export const DepartmentTable: FC = () => (
  <DataTable headers={["Department", "Appointments", "Completed", "Cancelled", "Revenue"]}>
    {mockReports.map((report) => <tr key={report.department} className="border-t border-slate-100"><td className="px-4 py-3">{report.department}</td><td className="px-4">{report.appointments}</td><td className="px-4">{report.completed}</td><td className="px-4">{report.cancelled}</td><td className="px-4">{formatCurrency(report.revenue)}</td></tr>)}
  </DataTable>
);
