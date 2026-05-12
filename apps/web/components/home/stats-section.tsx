"use client";
import { motion } from "framer-motion";

const stats = [{label:"Active buyers", value:"250k+"},{label:"Verified vendors", value:"12k+"},{label:"Products listed", value:"1.2M+"},{label:"Orders delivered", value:"740k+"}];
export function StatsSection() { return <section className="premium-container py-12"><div className="grid gap-4 rounded-[2.5rem] bg-white p-5 shadow-soft sm:grid-cols-2 lg:grid-cols-4">{stats.map((s,i)=><motion.div key={s.label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*.08}} className="rounded-[2rem] bg-marketLight/50 p-6 text-center"><p className="text-4xl font-black text-marketGreen">{s.value}</p><p className="mt-2 text-sm font-bold text-marketDark/55">{s.label}</p></motion.div>)}</div></section> }
