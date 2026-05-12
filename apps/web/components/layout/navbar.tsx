"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Menu, Search, ShoppingCart, X } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

const links = [
  { href: "/products", label: "Products" },
  { href: "/ai-assistant", label: "AI Assistant" },
  { href: "/dashboard/vendor", label: "Sell" },
  { href: "/dashboard/admin", label: "Admin" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-40 border-b border-white/30 bg-[#f8f4ef]/75 backdrop-blur-2xl">
      <div className="premium-container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-market-gradient text-lg font-black text-white shadow-glow">TM</span>
          <span>
            <span className="block text-base font-black tracking-tight text-marketDark">THE MARKET PLACE</span>
            <span className="text-xs font-semibold text-marketDark/50">Premium African commerce</span>
          </span>
        </Link>
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex w-full max-w-xl items-center gap-2 rounded-full border border-marketGreen/10 bg-white/75 px-4 py-2 shadow-soft backdrop-blur-xl">
            <Search className="h-4 w-4 text-marketGreen" />
            <input className="w-full bg-transparent text-sm outline-none placeholder:text-marketDark/40" placeholder="Search phones, sneakers, groceries, beauty..." />
            <span className="rounded-full bg-marketLight px-3 py-1 text-xs font-bold text-marketGreen">AI</span>
          </div>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-bold text-marketDark/70 transition hover:text-marketGreen">{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/cart" className="grid h-11 w-11 place-items-center rounded-full bg-white text-marketGreen shadow-soft"><ShoppingCart className="h-5 w-5" /></Link>
          <AnimatedButton href="/login" variant="cream">Login</AnimatedButton>
        </div>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-marketGreen shadow-soft lg:hidden" aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t border-marketGreen/10 bg-white/90 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} href={link.href} className="rounded-2xl px-4 py-3 font-bold text-marketDark hover:bg-marketLight">{link.label}</Link>)}
            <Link href="/cart" className="rounded-2xl px-4 py-3 font-bold text-marketDark hover:bg-marketLight">Cart</Link>
            <AnimatedButton href="/login" variant="primary" className="w-full">Login</AnimatedButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
