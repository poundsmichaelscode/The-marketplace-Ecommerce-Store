import { ProductFilters } from "@/components/products/product-filters";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductSearch } from "@/components/products/product-search";

export default function ProductsPage() {
  return <main className="premium-container py-10"><div className="mb-10 rounded-[2.5rem] bg-market-gradient p-8 text-white shadow-premium"><p className="text-sm font-black uppercase tracking-[.3em] text-marketCream">Marketplace</p><h1 className="mt-3 text-5xl font-black">Discover products you will love</h1><p className="mt-4 max-w-2xl text-white/65">Search, filter, compare, and shop premium products from verified vendors with AI assistance.</p></div><ProductSearch/><ProductFilters/><ProductGrid/></main>;
}
