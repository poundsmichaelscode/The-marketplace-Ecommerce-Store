"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  BadgeDollarSign,
  Heart,
  Package,
  PackageCheck,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

type StatIcon =
  | "users"
  | "vendors"
  | "revenue"
  | "fraud"
  | "orders"
  | "wishlist"
  | "recommendations"
  | "cart"
  | "products"
  | "payouts"
  | "inventory"
  | "growth";

const iconMap: Record<StatIcon, LucideIcon> = {
  users: Users,
  vendors: Store,
  revenue: BadgeDollarSign,
  fraud: AlertTriangle,
  orders: PackageCheck,
  wishlist: Heart,
  recommendations: Sparkles,
  cart: ShoppingBag,
  products: Package,
  payouts: Wallet,
  inventory: AlertTriangle,
  growth: TrendingUp,
};

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  icon: StatIcon;
};

export function StatCard({ label, value, change, icon }: StatCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass-panel rounded-[2rem] p-5"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-marketGreen text-white">
          <Icon className="h-5 w-5" />
        </span>

        <span className="rounded-full bg-marketLight px-3 py-1 text-xs font-black text-marketGreen">
          {change}
        </span>
      </div>

      <p className="text-sm font-bold text-marketDark/50">{label}</p>
      <p className="mt-2 text-3xl font-black text-marketDark">{value}</p>
    </motion.div>
  );
}