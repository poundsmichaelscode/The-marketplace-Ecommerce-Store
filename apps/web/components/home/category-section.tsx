"use client";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function CategorySection() {
  return (
    <section className="premium-container py-16">
      <SectionHeader eyebrow="Explore" title="Shop by premium categories" description="Every category is optimized for fast discovery, beautiful browsing, and smart AI recommendations." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map((c, i) => <motion.div key={c.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .05 }} viewport={{ once: true }} whileHover={{ y: -8 }} className="group relative h-56 overflow-hidden rounded-[2rem] shadow-soft"><img src={c.image} alt={c.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-marketDark/80 to-transparent" /><div className="absolute bottom-5 left-5 text-white"><p className="text-2xl font-black">{c.name}</p><p className="text-sm text-white/70">{c.count} products</p></div></motion.div>)}</div>
    </section>
  );
}
