import { products } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export function AIProductSuggestionCard() {
  const item = products[1];
  return (
    <div className="mt-3 flex gap-3 rounded-2xl bg-white p-3 text-marketDark shadow-soft">
      <img src={item.image} alt={item.name} className="h-16 w-16 rounded-2xl object-cover" />
      <div className="min-w-0">
        <p className="truncate text-sm font-black">{item.name}</p>
        <p className="text-xs text-marketDark/55">Great for students and creators.</p>
        <p className="mt-1 text-sm font-black text-marketGreen">{formatCurrency(item.price)}</p>
      </div>
    </div>
  );
}
