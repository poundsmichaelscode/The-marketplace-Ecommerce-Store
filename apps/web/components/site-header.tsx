'use client';
import Link from 'next/link';
import { ShoppingCart, Store, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
export function SiteHeader(){return <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"><Link href="/" className="flex items-center gap-2 font-black"><span className="rounded-2xl bg-primary px-3 py-2 text-primary-foreground">TMP</span> THE MARKET PLACE</Link><nav className="hidden items-center gap-6 text-sm md:flex"><Link href="/products">Products</Link><Link href="/ai-assistant">AI Assistant</Link><Link href="/dashboard/vendor">Vendor</Link><Link href="/dashboard/admin">Admin</Link></nav><div className="flex gap-2"><Button variant="ghost"><ShoppingCart size={18}/></Button><Link href="/login"><Button>Login</Button></Link></div></div></header>}
