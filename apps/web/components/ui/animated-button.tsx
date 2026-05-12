"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "cream" | "outline" | "dark";
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary: "bg-marketGreen text-white shadow-glow hover:bg-marketDark",
  cream: "bg-marketCream text-marketDark shadow-glow hover:bg-[#b97855]",
  outline: "border border-marketGreen/20 bg-white/70 text-marketGreen hover:bg-marketGreen hover:text-white",
  dark: "bg-marketDark text-white hover:bg-marketGreen",
};

export function AnimatedButton({ children, href, className, variant = "primary", type = "button", onClick }: Props) {
  const body = (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      className={cn("inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition", variants[variant], className)}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </motion.button>
  );

  if (href) return <Link href={href}>{body}</Link>;
  return body;
}
