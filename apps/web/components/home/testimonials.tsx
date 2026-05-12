import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function Testimonials() {
  return <section className="premium-container py-16"><SectionHeader eyebrow="Trust" title="Loved by buyers and vendors" /><div className="grid gap-6 md:grid-cols-3">{testimonials.map((t) => <div key={t.name} className="glass-panel rounded-[2rem] p-6"><p className="text-lg font-semibold leading-8 text-marketDark">“{t.text}”</p><div className="mt-6"><p className="font-black text-marketGreen">{t.name}</p><p className="text-sm text-marketDark/50">{t.role}</p></div></div>)}</div></section>;
}
