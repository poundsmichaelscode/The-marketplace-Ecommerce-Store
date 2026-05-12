import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const links = ["Products", "Flash Sales", "Vendors", "AI Assistant", "Support"];
  return (
    <footer className="mt-20 bg-marketDark text-white">
      <div className="premium-container grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-marketCream font-black text-marketDark">TM</span><span className="text-xl font-black">THE MARKET PLACE</span></div>
          <p className="max-w-md text-sm leading-7 text-white/65">A premium AI-powered multivendor marketplace built for African buyers, vendors, and modern digital commerce.</p>
          <div className="mt-6 flex gap-3"><Facebook /><Twitter /><Instagram /><Linkedin /></div>
        </div>
        <div><h4 className="mb-4 font-black">Marketplace</h4>{links.map((l) => <Link key={l} href="#" className="block py-2 text-sm text-white/60 hover:text-marketCream">{l}</Link>)}</div>
        <div><h4 className="mb-4 font-black">Dashboards</h4>{["Buyer", "Vendor", "Admin", "Analytics"].map((l) => <Link key={l} href="#" className="block py-2 text-sm text-white/60 hover:text-marketCream">{l}</Link>)}</div>
        <div><h4 className="mb-4 font-black">Support</h4>{["Help Center", "Disputes", "Returns", "Security"].map((l) => <Link key={l} href="#" className="block py-2 text-sm text-white/60 hover:text-marketCream">{l}</Link>)}</div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">© {new Date().getFullYear()} THE MARKET PLACE. Built for scalable commerce.</div>
    </footer>
  );
}
