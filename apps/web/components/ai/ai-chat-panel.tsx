"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send } from "lucide-react";
import { AIProductSuggestionCard } from "./ai-product-suggestion-card";

const quick = ["What should I buy under ₦50,000?", "Best phones for students", "Recommend fashion items", "Find affordable laptops"];

export function AIChatPanel() {
  const [messages, setMessages] = useState(["Hi, I am your AI shopping assistant. Tell me your budget and what you need."]);
  const ask = (text: string) => setMessages((m) => [...m, text, "Based on your budget and preference, I recommend starting with verified vendors, strong ratings, and products with flexible return policies."]);
  return (
    <motion.div initial={{ opacity: 0, y: 24, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: .96 }} className="w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-marketDark text-white shadow-premium">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/10 p-4"><Bot className="text-marketCream" /><div><p className="font-black">Market AI Assistant</p><p className="text-xs text-white/55">Smart product discovery</p></div></div>
      <div className="max-h-96 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => <div key={i} className={`rounded-2xl px-4 py-3 text-sm ${i % 2 ? "ml-8 bg-marketCream text-marketDark" : "mr-8 bg-white/10 text-white"}`}>{m}{i === messages.length - 1 && i > 0 ? <AIProductSuggestionCard /> : null}</div>)}
        <div className="grid gap-2">{quick.map((q) => <button key={q} onClick={() => ask(q)} className="rounded-full border border-white/10 px-3 py-2 text-left text-xs text-white/75 transition hover:border-marketCream hover:text-marketCream">{q}</button>)}</div>
      </div>
      <div className="flex gap-2 border-t border-white/10 p-3"><input className="flex-1 rounded-full bg-white/10 px-4 text-sm outline-none placeholder:text-white/35" placeholder="Ask AI what to buy..." /><button onClick={() => ask("Find me the best deal")} className="grid h-11 w-11 place-items-center rounded-full bg-marketCream text-marketDark"><Send className="h-4 w-4" /></button></div>
    </motion.div>
  );
}
