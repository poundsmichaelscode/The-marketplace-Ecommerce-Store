import { notFound } from "next/navigation";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { products } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { ProductGallery } from "@/components/products/product-gallery";
import { ReviewSummary } from "@/components/products/review-summary";
import { ProductCard } from "@/components/products/product-card";

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();
  const images = [product.image, ...products.slice(0,3).map((p) => p.image)];
  return <main className="premium-container py-10"><div className="grid gap-10 lg:grid-cols-[1fr_.9fr]"><ProductGallery images={images}/><section><p className="text-sm font-black uppercase tracking-[.25em] text-marketCream">{product.category}</p><h1 className="mt-3 text-4xl font-black text-marketDark lg:text-5xl">{product.name}</h1><p className="mt-3 text-marketDark/60">Sold by <span className="font-black text-marketGreen">{product.vendor}</span></p><div className="mt-4 flex items-center gap-2"><Star className="h-5 w-5 fill-marketCream text-marketCream"/><span className="font-black">{product.rating}</span><span className="text-marketDark/45">({product.reviews} reviews)</span></div><div className="mt-7 rounded-[2rem] bg-white p-6 shadow-soft"><p className="text-4xl font-black text-marketGreen">{formatCurrency(product.price)}</p>{product.oldPrice && <p className="mt-1 text-marketDark/40 line-through">{formatCurrency(product.oldPrice)}</p>}<p className="mt-5 leading-7 text-marketDark/65">{product.description}</p><div className="mt-6 grid gap-3 sm:grid-cols-3">{['Black','Cream','Green'].map(v=><button key={v} className="rounded-2xl border border-marketGreen/10 px-4 py-3 font-bold hover:border-marketCream">{v}</button>)}</div><div className="mt-6 flex flex-col gap-3 sm:flex-row"><button className="rounded-full bg-marketGreen px-8 py-4 font-black text-white shadow-glow">Add to cart</button><button className="rounded-full bg-marketCream px-8 py-4 font-black text-marketDark shadow-glow">Buy now</button></div></div><div className="mt-6 grid gap-3 sm:grid-cols-3">{[{icon:Truck,label:'Fast delivery'},{icon:ShieldCheck,label:'Verified vendor'},{icon:RotateCcw,label:'Easy returns'}].map(({icon:Icon,label})=><div key={label} className="glass-panel rounded-2xl p-4 text-center"><Icon className="mx-auto mb-2 text-marketCream"/><p className="text-sm font-bold">{label}</p></div>)}</div><ReviewSummary/></section></div><section className="mt-16"><h2 className="mb-6 text-3xl font-black text-marketDark">Similar products</h2><div className="grid gap-6 md:grid-cols-4">{products.filter(p=>p.id!==product.id).slice(0,4).map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div></section></main>;
}
