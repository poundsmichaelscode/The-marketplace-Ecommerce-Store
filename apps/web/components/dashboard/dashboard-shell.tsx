import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { MobileDrawer } from "@/components/layout/mobile-drawer";

export function DashboardShell({ role, title, children }: { role: "buyer" | "vendor" | "admin"; title: string; children: React.ReactNode }) {
  return <main className="premium-container flex gap-6 py-8"><DashboardSidebar role={role}/><section className="min-w-0 flex-1"><MobileDrawer/><div className="mb-8 mt-4 lg:mt-0"><p className="text-sm font-black uppercase tracking-[.25em] text-marketCream">{role} dashboard</p><h1 className="mt-2 text-4xl font-black text-marketDark">{title}</h1></div>{children}</section></main>;
}
