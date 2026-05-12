"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import type { Product } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }} whileHover={{ y: -8 }} className="group overflow-hidden rounded-[2rem] border border-marketGreen/10 bg-white shadow-soft transition hover:shadow-premium">
      <Link href={`/products/${product.slug}`} className="relative block h-64 overflow-hidden bg-marketLight">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className="absolute left-4 top-4 rounded-full bg-marketCream px-3 py-1 text-xs font-black text-marketDark">{product.badge}</span>
        <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-marketGreen backdrop-blur"><Heart className="h-4 w-4" /></button>
      </Link>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-marketCream">{product.category}</p>
        <Link href={`/products/${product.slug}`} className="mt-2 block text-lg font-black text-marketDark transition hover:text-marketGreen">{product.name}</Link>
        <p className="mt-1 text-sm text-marketDark/50">by {product.vendor}</p>
        <div className="mt-3 flex items-center gap-2"><Star className="h-4 w-4 fill-marketCream text-marketCream" /><span className="text-sm font-bold">{product.rating}</span><span className="text-xs text-marketDark/40">({product.reviews} reviews)</span></div>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div><p className="text-xl font-black text-marketGreen">{formatCurrency(product.price)}</p>{product.oldPrice && <p className="text-xs text-marketDark/40 line-through">{formatCurrency(product.oldPrice)}</p>}</div>
          <div className="flex gap-2"><button className="grid h-11 w-11 place-items-center rounded-full bg-marketLight text-marketGreen"><Eye className="h-4 w-4" /></button><button className="grid h-11 w-11 place-items-center rounded-full bg-marketGreen text-white"><ShoppingCart className="h-4 w-4" /></button></div>
        </div>
      </div>
    </motion.article>
  );
}
