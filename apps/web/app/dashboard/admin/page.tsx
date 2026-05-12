import { DashboardShell } from '@/components/dashboard-shell';
import { Card } from '@/components/ui/card';
export default function AdminDashboard(){ const items=['Users','Vendors','Products','Orders','Payments','Disputes','AI Reports','Monitoring']; return <DashboardShell title="Admin Dashboard"><div className="grid gap-4 md:grid-cols-4">{items.map(i=><Card key={i}><b>{i}</b><p className="mt-2 text-2xl font-black">0</p></Card>)}</div></DashboardShell> }
