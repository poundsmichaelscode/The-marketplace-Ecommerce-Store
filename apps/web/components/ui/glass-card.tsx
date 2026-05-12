import { cn } from "@/lib/utils";

export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("glass-panel rounded-[2rem] p-5", className)}>{children}</div>;
}
