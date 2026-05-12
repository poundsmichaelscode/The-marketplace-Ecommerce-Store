import { Bot, Brain, Search, Sparkles } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export function AIRecommendationSection() {
  return (
    <section className="premium-container py-16">
      <div className="overflow-hidden rounded-[2.5rem] bg-market-gradient p-8 text-white shadow-premium lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center"><div><p className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[.25em] text-marketCream"><Sparkles className="h-4 w-4" /> AI commerce</p><h2 className="text-4xl font-black lg:text-5xl">Let AI help you shop smarter.</h2><p className="mt-5 max-w-2xl text-white/70">Ask what to buy by budget, lifestyle, interest, urgency, or product type. The assistant can recommend products, summarize reviews, and compare options.</p><div className="mt-8"><AnimatedButton href="/ai-assistant" variant="cream">Try AI Assistant</AnimatedButton></div></div><div className="grid gap-4">{[{icon: Bot, title:"Shopping chatbot"},{icon: Search,title:"Semantic product search"},{icon: Brain,title:"Personalized recommendations"}].map(({icon:Icon,title}) => <div key={title} className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur"><Icon className="mb-3 text-marketCream" /><p className="font-black">{title}</p><p className="mt-1 text-sm text-white/60">Fast, guided, and purchase-focused.</p></div>)}</div></div>
      </div>
    </section>
  );
}
