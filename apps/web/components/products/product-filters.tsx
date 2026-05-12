export function ProductFilters() {
  const filters = ["All", "Fashion", "Electronics", "Furniture", "Beauty", "Sneakers", "Phones", "Laptops", "Groceries"];
  return <div className="mb-8 flex gap-3 overflow-x-auto pb-2">{filters.map((f, i) => <button key={f} className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${i === 0 ? "bg-marketGreen text-white" : "bg-white text-marketDark hover:bg-marketLight"}`}>{f}</button>)}</div>;
}
