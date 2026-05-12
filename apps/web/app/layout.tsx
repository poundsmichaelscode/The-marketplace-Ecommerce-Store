import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';
import { SiteHeader } from '@/components/site-header';
export const metadata: Metadata = { title:'THE MARKET PLACE', description:'AI-powered multivendor e-commerce marketplace for Africa and global commerce.' };
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="en" suppressHydrationWarning><body><Providers><SiteHeader />{children}</Providers></body></html> }
