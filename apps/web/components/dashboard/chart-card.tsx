"use client";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { GlassCard } from "@/components/ui/glass-card";
const data = [{name:"Mon", value:120},{name:"Tue", value:180},{name:"Wed", value:160},{name:"Thu", value:260},{name:"Fri", value:310},{name:"Sat", value:290},{name:"Sun", value:370}];
export function ChartCard({ title = "Revenue trend" }) { return <GlassCard className="h-80"><h3 className="mb-5 text-xl font-black text-marketDark">{title}</h3><ResponsiveContainer width="100%" height="85%"><AreaChart data={data}><XAxis dataKey="name" axisLine={false} tickLine={false}/><Tooltip/><Area type="monotone" dataKey="value" stroke="#013328" fill="#D3DCD2" strokeWidth={3}/></AreaChart></ResponsiveContainer></GlassCard>; }
