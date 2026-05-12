import { PackageOpen } from "lucide-react";
import { GlassCard } from "./glass-card";

export function EmptyState({ title = "Nothing here yet", description = "Start exploring the marketplace to see useful data here." }) {
  return (
    <GlassCard className="flex flex-col items-center justify-center py-12 text-center">
      <PackageOpen className="mb-4 h-10 w-10 text-marketCream" />
      <h3 className="text-xl font-black text-marketDark">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-marketDark/60">{description}</p>
    </GlassCard>
  );
}
