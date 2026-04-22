import { mockRevenueMetrics, mockReports } from "@/data/mock/reports";
import { DataTable } from "@/components/shared/DataTable";
import { formatCurrency } from "@/lib/utils";

const ReportsPage = () => (
  <div className="space-y-4">
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {mockRevenueMetrics.map((metric) => (
        <div key={metric.label} className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">{metric.label}</p>
          <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
          <p className="mt-1 text-xs text-emerald-600">{metric.delta}</p>
        </div>
      ))}
    </div>
    <DataTable headers={["Department", "Appointments", "Completed", "Cancelled", "Revenue"]}>
      {mockReports.map((report) => <tr key={report.department} className="border-t border-slate-100">
        <td className="px-4 py-3">{report.department}</td>
        <td className="px-4">{report.appointments}</td>
        <td className="px-4">{report.completed}</td>
        <td className="px-4">{report.cancelled}</td>
        <td className="px-4">{formatCurrency(report.revenue)}</td>
      </tr>)}
    </DataTable>
  </div>
);

export default ReportsPage;
