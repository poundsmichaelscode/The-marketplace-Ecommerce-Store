import { Search, SlidersHorizontal } from "lucide-react";

export function ProductSearch() {
  return (
    <div className="glass-panel sticky top-24 z-20 mb-8 flex flex-col gap-3 rounded-[2rem] p-3 md:flex-row md:items-center">
      <div className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-4"><Search className="h-5 w-5 text-marketGreen" /><input className="w-full bg-transparent text-sm outline-none" placeholder="Search products, vendors, categories..." /></div>
      <select className="rounded-full border-0 bg-white px-5 py-4 text-sm font-bold text-marketDark outline-none"><option>Sort by popularity</option><option>Lowest price</option><option>Highest rating</option></select>
      <button className="inline-flex items-center justify-center gap-2 rounded-full bg-marketGreen px-5 py-4 text-sm font-bold text-white"><SlidersHorizontal className="h-4 w-4" /> Filters</button>
    </div>
  );
}
