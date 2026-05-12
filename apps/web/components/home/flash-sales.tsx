"use client";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/products/product-card";

export function FlashSales() {
  return (
    <section className="my-16 bg-marketDark py-16 text-white">
      <div className="premium-container">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-2 text-sm font-black uppercase tracking-[.3em] text-marketCream">Limited offers</p><h2 className="text-4xl font-black">Flash sales ending soon</h2></div><div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3"><Clock className="text-marketCream" /><span className="font-black">04h : 28m : 16s</span></div></div>
        <div className="grid gap-6 md:grid-cols-3">{products.slice(0,3).map((p, i) => <motion.div key={p.id} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:i*.08 }}><ProductCard product={p} index={i} /></motion.div>)}</div>
      </div>
    </section>
  );
}
