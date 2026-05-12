import { ProductGrid } from "@/components/products/product-grid";
import { SectionHeader } from "@/components/ui/section-header";

export function FeaturedProducts() {
  return <section className="premium-container py-16"><SectionHeader eyebrow="Featured" title="Trending products from verified vendors" description="Animated product cards, strong imagery, ratings, discounts, and smooth commerce interactions." /><ProductGrid /></section>;
}
