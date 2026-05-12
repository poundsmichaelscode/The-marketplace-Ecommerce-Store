import { DashboardShell } from '@/components/dashboard-shell';
import { Card } from '@/components/ui/card';
export default function BuyerDashboard(){ return <DashboardShell title="Buyer Dashboard"><div className="grid gap-4 md:grid-cols-3"><Card><b>Orders</b><p className="mt-2 text-3xl font-black">0</p></Card><Card><b>Wishlist</b><p className="mt-2 text-3xl font-black">0</p></Card><Card><b>AI Recommendations</b><p className="mt-2 text-3xl font-black">Ready</p></Card></div></DashboardShell> }
