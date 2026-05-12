import { AIRecommendationSection } from "@/components/home/ai-recommendation-section";
import { CategorySection } from "@/components/home/category-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { FlashSales } from "@/components/home/flash-sales";
import { HeroSection } from "@/components/home/hero-section";
import { Newsletter } from "@/components/home/newsletter";
import { StatsSection } from "@/components/home/stats-section";
import { Testimonials } from "@/components/home/testimonials";
import { VendorSpotlight } from "@/components/home/vendor-spotlight";

export default function HomePage() {
  return <><HeroSection/><CategorySection/><FeaturedProducts/><FlashSales/><AIRecommendationSection/><VendorSpotlight/><StatsSection/><Testimonials/><Newsletter/></>;
}
