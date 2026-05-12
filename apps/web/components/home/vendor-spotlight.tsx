import { CheckCircle2, Star } from "lucide-react";
import { vendors } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function VendorSpotlight() {
  return <section className="premium-container py-16"><SectionHeader eyebrow="Vendors" title="Verified seller spotlight" description="Celebrate trusted vendors with strong ratings, fast fulfillment, and quality products." /><div className="grid gap-6 md:grid-cols-3">{vendors.map((v) => <div key={v.name} className="overflow-hidden rounded-[2rem] bg-white shadow-soft"><img src={v.image} alt={v.name} className="h-56 w-full object-cover" /><div className="p-5"><p className="flex items-center gap-2 text-xl font-black text-marketDark">{v.name}<CheckCircle2 className="h-5 w-5 text-marketGreen" /></p><p className="text-sm text-marketDark/50">{v.category}</p><div className="mt-4 flex justify-between text-sm font-bold"><span>{v.sales} sales</span><span className="flex items-center gap-1"><Star className="h-4 w-4 fill-marketCream text-marketCream" /> {v.rating}</span></div></div></div>)}</div></section>;
}
