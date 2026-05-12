import { DashboardShell } from '@/components/dashboard-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export default function VendorDashboard(){ return <DashboardShell title="Vendor Dashboard"><div className="grid gap-4 md:grid-cols-4"><Card><b>Products</b><p className="mt-2 text-3xl font-black">0</p></Card><Card><b>Orders</b><p className="mt-2 text-3xl font-black">0</p></Card><Card><b>Revenue</b><p className="mt-2 text-3xl font-black">₦0</p></Card><Card><b>AI Insights</b><p className="mt-2 text-sm text-muted-foreground">Top products, fraud alerts, product description ideas.</p></Card></div><Button className="mt-6">Create Product</Button></DashboardShell> }
