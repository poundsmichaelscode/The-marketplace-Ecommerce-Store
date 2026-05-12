export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  vendor: string;
  image: string;
  badge: string;
  description: string;
};

export const categories = [
  { name: "Fashion", icon: "Sparkles", count: "18k", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop" },
  { name: "Electronics", icon: "Cpu", count: "9k", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=900&auto=format&fit=crop" },
  { name: "Furniture", icon: "Sofa", count: "4k", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=900&auto=format&fit=crop" },
  { name: "Beauty", icon: "Heart", count: "7k", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop" },
  { name: "Sneakers", icon: "Footprints", count: "6k", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop" },
  { name: "Phones", icon: "Smartphone", count: "5k", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop" },
  { name: "Laptops", icon: "Laptop", count: "3k", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=900&auto=format&fit=crop" },
  { name: "Groceries", icon: "ShoppingBasket", count: "12k", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=900&auto=format&fit=crop" },
];

export const products: Product[] = [
  { id: "1", slug: "premium-leather-sneakers", name: "Premium Leather Sneakers", category: "Sneakers", price: 68500, oldPrice: 92000, rating: 4.8, reviews: 284, vendor: "Lagos Luxury Store", badge: "Flash Deal", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=900&auto=format&fit=crop", description: "Hand-finished premium sneakers built for comfort, streetwear styling, and everyday movement." },
  { id: "2", slug: "smart-android-phone", name: "Nova X Pro Smartphone", category: "Phones", price: 245000, oldPrice: 310000, rating: 4.7, reviews: 531, vendor: "TechHub Africa", badge: "Best Seller", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=900&auto=format&fit=crop", description: "Flagship-level phone with sharp display, fast charging, and AI-assisted photography." },
  { id: "3", slug: "minimalist-lounge-chair", name: "Minimalist Lounge Chair", category: "Furniture", price: 188000, oldPrice: 215000, rating: 4.9, reviews: 116, vendor: "Urban Nest", badge: "New Arrival", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=900&auto=format&fit=crop", description: "Statement lounge chair with soft upholstery and a modern frame for premium interiors." },
  { id: "4", slug: "ultra-slim-laptop", name: "Ultra Slim Creator Laptop", category: "Laptops", price: 780000, oldPrice: 890000, rating: 4.6, reviews: 204, vendor: "ByteMall", badge: "AI Pick", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=900&auto=format&fit=crop", description: "Fast, elegant laptop for engineers, designers, creators, and business owners." },
  { id: "5", slug: "glow-beauty-kit", name: "Glow Beauty Essentials Kit", category: "Beauty", price: 42500, oldPrice: 59000, rating: 4.7, reviews: 671, vendor: "Beauty Cloud", badge: "Hot", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop", description: "Curated beauty kit for skincare, glow routines, and travel-friendly self care." },
  { id: "6", slug: "premium-ankara-jacket", name: "Premium Ankara Jacket", category: "Fashion", price: 54500, oldPrice: 76000, rating: 4.8, reviews: 149, vendor: "AfroMode", badge: "Vendor Verified", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop", description: "Modern African fashion piece with clean tailoring and rich fabric details." },
  { id: "7", slug: "wireless-headphones", name: "Studio Wireless Headphones", category: "Electronics", price: 112000, oldPrice: 145000, rating: 4.5, reviews: 398, vendor: "SoundPort", badge: "Top Rated", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=900&auto=format&fit=crop", description: "Noise-reducing wireless headphones with deep bass and all-day battery." },
  { id: "8", slug: "fresh-grocery-pack", name: "Family Fresh Grocery Pack", category: "Groceries", price: 35500, oldPrice: 44000, rating: 4.6, reviews: 224, vendor: "FreshBasket", badge: "Today Only", image: "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=900&auto=format&fit=crop", description: "Fresh household essentials selected for busy families and fast delivery." },
];

export const vendors = [
  { name: "TechHub Africa", category: "Electronics", sales: "48k+", rating: 4.8, image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop" },
  { name: "AfroMode", category: "Fashion", sales: "21k+", rating: 4.9, image: "https://images.unsplash.com/photo-1506629905607-d405b7a30db9?q=80&w=900&auto=format&fit=crop" },
  { name: "FreshBasket", category: "Groceries", sales: "63k+", rating: 4.7, image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=900&auto=format&fit=crop" },
];

export const testimonials = [
  { name: "Amara Okafor", role: "Buyer", text: "The AI assistant helped me find a quality phone within budget in less than two minutes." },
  { name: "Tunde Bello", role: "Vendor", text: "The vendor dashboard makes sales, inventory, and payouts easy to understand." },
  { name: "Fatima Yusuf", role: "Buyer", text: "It feels premium, fast, and reliable. The product discovery experience is excellent." },
];
