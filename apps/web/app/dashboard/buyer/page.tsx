import { Heart, PackageCheck, ShoppingBag, Sparkles } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { StatCard } from "@/components/dashboard/stat-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { RecentOrdersTable } from "@/components/dashboard/recent-orders-table";
export default function BuyerDashboard(){ return <DashboardShell role="buyer" title="Your shopping intelligence"><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Orders" value="26" change="+4" icon={PackageCheck}/><StatCard label="Wishlist" value="48" change="Saved" icon={Heart}/><StatCard label="Recommendations" value="19" change="AI" icon={Sparkles}/><StatCard label="Cart items" value="3" change="Ready" icon={ShoppingBag}/></div><div className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]"><ChartCard title="Spending insights"/><ActivityFeed/></div><div className="mt-6"><RecentOrdersTable/></div></DashboardShell> }
