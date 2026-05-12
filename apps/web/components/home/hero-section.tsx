"use client";

import { motion } from "framer-motion";
import { Bot, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { products } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-premium-radial py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-x-0 top-10 mx-auto h-72 max-w-4xl rounded-full bg-marketCream/20 blur-3xl" />
      <div className="premium-container relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-marketGreen/10 bg-white/70 px-4 py-2 text-sm font-bold text-marketGreen shadow-soft"><Sparkles className="h-4 w-4 text-marketCream" /> AI-powered African marketplace</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-marketDark sm:text-6xl lg:text-7xl">Shop smarter. Sell faster. Discover premium products with AI.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-6 max-w-2xl text-lg leading-8 text-marketDark/65">THE MARKET PLACE connects buyers, verified vendors, secure payments, and intelligent product discovery in one luxury e-commerce experience.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-8 flex flex-col gap-3 sm:flex-row"><AnimatedButton href="/products" variant="primary">Start Shopping</AnimatedButton><AnimatedButton href="/dashboard/vendor" variant="outline">Become a Vendor</AnimatedButton></motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">{[{icon: ShieldCheck, label: "Verified vendors"},{icon: Truck, label: "Fast delivery"},{icon: Bot, label: "AI shopping help"}].map(({icon: Icon, label}) => <div key={label} className="glass-panel flex items-center gap-3 rounded-2xl p-4"><Icon className="h-5 w-5 text-marketCream" /><span className="text-sm font-bold text-marketDark">{label}</span></div>)}</div>
        </div>
        <div className="relative min-h-[560px]">
          <motion.div animate={{ y: [0, -18, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute left-0 top-8 w-64 overflow-hidden rounded-[2rem] bg-white p-3 shadow-premium"><img src={products[0].image} className="h-48 w-full rounded-[1.5rem] object-cover" alt="Product" /><p className="mt-3 font-black">{products[0].name}</p><p className="text-marketGreen font-black">{formatCurrency(products[0].price)}</p></motion.div>
          <motion.div animate={{ y: [0, 18, 0] }} transition={{ repeat: Infinity, duration: 7 }} className="absolute right-0 top-32 w-72 overflow-hidden rounded-[2rem] bg-marketDark p-3 text-white shadow-premium"><img src={products[3].image} className="h-52 w-full rounded-[1.5rem] object-cover" alt="Product" /><p className="mt-3 font-black">{products[3].name}</p><p className="font-black text-marketCream">{formatCurrency(products[3].price)}</p></motion.div>
          <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} className="absolute bottom-8 left-10 right-10 rounded-[2rem] border border-white/20 bg-marketGreen/90 p-5 text-white shadow-glow backdrop-blur"><p className="mb-2 flex items-center gap-2 font-black"><Bot className="h-5 w-5 text-marketCream" /> AI Assistant</p><p className="text-sm text-white/75">“Tell me your budget and I’ll recommend the best products from verified vendors.”</p></motion.div>
        </div>
      </div>
    </section>
  );
}
