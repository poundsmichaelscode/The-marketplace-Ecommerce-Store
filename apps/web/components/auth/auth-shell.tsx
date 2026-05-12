"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, ShieldCheck, Sparkles } from "lucide-react";

export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-premium-radial py-10">
      <div className="premium-container grid min-h-[calc(100vh-8rem)] overflow-hidden rounded-[2.5rem] bg-white shadow-premium lg:grid-cols-[.95fr_1.05fr]">
        <div className="relative hidden bg-market-gradient p-10 text-white lg:block"><Link href="/" className="text-xl font-black">THE MARKET PLACE</Link><div className="absolute inset-x-10 bottom-10"><motion.div animate={{ y: [0,-18,0] }} transition={{ repeat: Infinity, duration: 6 }} className="rounded-[2rem] bg-white/10 p-6 backdrop-blur"><Sparkles className="mb-4 text-marketCream" /><h2 className="text-4xl font-black">Premium commerce with trusted vendors and AI guidance.</h2><div className="mt-8 grid gap-3">{["Secure buyer and vendor accounts", "AI shopping recommendations", "Protected payments and order tracking"].map((x)=><p key={x} className="flex items-center gap-3 text-white/75"><ShieldCheck className="h-4 w-4 text-marketCream" />{x}</p>)}</div></motion.div></div><Bot className="absolute right-10 top-10 h-20 w-20 text-white/10" /></div>
        <div className="flex items-center justify-center p-6 sm:p-10"><motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} className="w-full max-w-md"><p className="mb-3 text-sm font-black uppercase tracking-[.25em] text-marketCream">Account access</p><h1 className="text-4xl font-black text-marketDark">{title}</h1><p className="mt-3 text-marketDark/60">{subtitle}</p><div className="mt-8">{children}</div></motion.div></div>
      </div>
    </main>
  );
}
