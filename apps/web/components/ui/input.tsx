import * as React from 'react';
import { cn } from '@/lib/utils';
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({className,...props},ref)=><input ref={ref} className={cn('w-full rounded-2xl border bg-background px-4 py-2 outline-none focus:ring-2 focus:ring-primary/30', className)} {...props}/>);
Input.displayName='Input';
