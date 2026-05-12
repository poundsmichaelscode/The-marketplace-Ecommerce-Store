import { Bot, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function ReviewSummary() {
  return (
    <GlassCard className="mt-8">
      <div className="flex items-start gap-4"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-marketGreen text-white"><Bot /></div><div><p className="flex items-center gap-2 font-black text-marketDark"><Sparkles className="h-4 w-4 text-marketCream" /> AI Review Summary</p><p className="mt-2 text-sm leading-7 text-marketDark/65">Customers love the premium design, fast delivery, and strong value. AI detected high sentiment around durability, comfort, and vendor reliability.</p></div></div>
    </GlassCard>
  );
}
