"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X } from "lucide-react";
import { AIChatPanel } from "./ai-chat-panel";

export function AIFloatingWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>{open && <AIChatPanel />}</AnimatePresence>
      <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: .94 }} onClick={() => setOpen((v) => !v)} className="grid h-16 w-16 place-items-center rounded-full bg-market-gradient text-white shadow-glow" aria-label="Open AI assistant">
        {open ? <X /> : <Bot />}
      </motion.button>
    </div>
  );
}
