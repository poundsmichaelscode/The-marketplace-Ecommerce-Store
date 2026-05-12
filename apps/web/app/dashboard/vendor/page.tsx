import { Package, TrendingUp, Wallet, AlertTriangle } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { StatCard } from "@/components/dashboard/stat-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { RecentOrdersTable } from "@/components/dashboard/recent-orders-table";
export default function VendorDashboard(){ return <DashboardShell role="vendor" title="Vendor growth command center"><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Revenue" value="₦8.4M" change="+18%" icon={TrendingUp}/><StatCard label="Products" value="312" change="+24" icon={Package}/><StatCard label="Payouts" value="₦2.1M" change="Ready" icon={Wallet}/><StatCard label="Inventory alerts" value="12" change="Check" icon={AlertTriangle}/></div><div className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]"><ChartCard title="Vendor sales analytics"/><ActivityFeed/></div><div className="mt-6"><RecentOrdersTable/></div></DashboardShell> }
