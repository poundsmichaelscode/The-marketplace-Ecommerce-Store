"use client";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function StatCard({ label, value, change, icon: Icon }: { label: string; value: string; change: string; icon: LucideIcon }) {
  return <motion.div whileHover={{ y: -6 }} className="glass-panel rounded-[2rem] p-5"><div className="mb-5 flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-marketGreen text-white"><Icon className="h-5 w-5" /></span><span className="rounded-full bg-marketLight px-3 py-1 text-xs font-black text-marketGreen">{change}</span></div><p className="text-sm font-bold text-marketDark/50">{label}</p><p className="mt-2 text-3xl font-black text-marketDark">{value}</p></motion.div>;
}
