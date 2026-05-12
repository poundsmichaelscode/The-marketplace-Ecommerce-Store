import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function money(value:number, currency='NGN') { return new Intl.NumberFormat('en-NG', { style:'currency', currency }).format(value || 0); }
