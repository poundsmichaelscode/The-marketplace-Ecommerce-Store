import Link from "next/link";
import { Bot, LayoutDashboard, Package, ShoppingBag, Users, Wallet } from "lucide-react";

export function DashboardSidebar({ role = "vendor" }: { role?: "buyer" | "vendor" | "admin" }) {
  const items = [{href:`/dashboard/${role}`, label:"Overview", icon:LayoutDashboard},{href:"/products", label:"Products", icon:Package},{href:"/cart", label:"Orders", icon:ShoppingBag},{href:"/ai-assistant", label:"AI Insights", icon:Bot},{href:"#", label: role === "admin" ? "Users" : "Wallet", icon: role === "admin" ? Users : Wallet}];
  return <aside className="hidden w-72 shrink-0 rounded-[2rem] bg-marketDark p-4 text-white shadow-premium lg:block"><div className="mb-8 px-3 py-4 text-xl font-black">THE MARKET PLACE</div><nav className="grid gap-2">{items.map(({href,label,icon:Icon})=><Link key={label} href={href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-white/70 transition hover:bg-white/10 hover:text-marketCream"><Icon className="h-5 w-5" />{label}</Link>)}</nav></aside>;
}
