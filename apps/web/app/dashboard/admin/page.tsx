import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { StatCard } from "@/components/dashboard/stat-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { RecentOrdersTable } from "@/components/dashboard/recent-orders-table";

export default function AdminDashboard() {
  return (
    <DashboardShell role="admin" title="Platform operations dashboard">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Users" value="250k" change="+9%" icon="users" />
        <StatCard label="Vendors" value="12k" change="+240" icon="vendors" />
        <StatCard label="Revenue" value="₦92M" change="+22%" icon="revenue" />
        <StatCard label="Fraud alerts" value="7" change="AI" icon="fraud" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]">
        <ChartCard title="Platform analytics" />
        <ActivityFeed />
      </div>

      <div className="mt-6">
        <RecentOrdersTable />
      </div>
    </DashboardShell>
  );
}