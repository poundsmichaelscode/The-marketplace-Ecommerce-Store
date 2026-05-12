import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { money } from '@/lib/utils';
export function ProductCard({product}:{product:any}){return <Card className="overflow-hidden p-0"><div className="h-48 bg-muted"/><div className="p-5"><p className="text-xs font-semibold uppercase text-primary">{product.vendor?.storeName || 'Verified Vendor'}</p><h3 className="mt-2 line-clamp-2 font-bold">{product.name}</h3><p className="mt-2 font-black">{money(product.price)}</p><Link href={`/products/${product.slug}`}><Button className="mt-4 w-full">View Product</Button></Link></div></Card>}
