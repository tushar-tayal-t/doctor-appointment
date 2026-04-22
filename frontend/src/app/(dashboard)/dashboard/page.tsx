import { AppointmentTable } from "@/components/dashboard/AppointmentTable";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TodaySchedule } from "@/components/dashboard/TodaySchedule";
import { TopDoctors } from "@/components/dashboard/TopDoctors";
import { UpcomingPatients } from "@/components/dashboard/UpcomingPatients";
import { WeeklyBarChart } from "@/components/dashboard/WeeklyBarChart";

const DashboardPage = () => (
  <div className="space-y-6">
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard title="Today's appointments" value="24" delta="+4 from yesterday" trend="up" />
      <MetricCard title="Total patients" value="1,842" delta="+12 this week" trend="up" />
      <MetricCard title="Available doctors" value="8" delta="2 on leave" trend="down" />
      <MetricCard title="Revenue this month" value="₹4.2L" delta="+18% vs last month" trend="up" />
    </section>
    <section className="grid gap-4 lg:grid-cols-2">
      <AppointmentTable />
      <div className="space-y-4">
        <WeeklyBarChart />
        <TodaySchedule />
      </div>
    </section>
    <section className="grid gap-4 lg:grid-cols-2">
      <TopDoctors />
      <UpcomingPatients />
    </section>
  </div>
);

export default DashboardPage;
