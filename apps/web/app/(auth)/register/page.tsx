'use client';
import { useState } from 'react';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
export default function Register(){ const [role,setRole]=useState<'buyer'|'vendor'>('buyer'); const [message,setMessage]=useState(''); async function submit(e:any){e.preventDefault(); const fd=new FormData(e.currentTarget); const data=Object.fromEntries(fd); await api('/auth/register',{method:'POST',body:JSON.stringify({...data,role})}); setMessage('Account created. You can now login.'); } return <main className="mx-auto max-w-md px-4 py-16"><Card><CardTitle>Create Account</CardTitle><form onSubmit={submit} className="mt-6 space-y-4"><Input name="name" placeholder="Full name"/><Input name="email" placeholder="Email"/><Input name="password" type="password" placeholder="Password"/><select value={role} onChange={e=>setRole(e.target.value as any)} className="w-full rounded-2xl border bg-background px-4 py-2"><option value="buyer">Buyer</option><option value="vendor">Vendor</option></select><Button className="w-full">Register</Button></form>{message&&<p className="mt-4 text-sm text-primary">{message}</p>}</Card></main> }
