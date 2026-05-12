'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
export default function Login(){ const router=useRouter(); const [email,setEmail]=useState('admin@example.com'); const [password,setPassword]=useState('Password123!'); const [error,setError]=useState(''); async function submit(e:any){e.preventDefault(); setError(''); try{ const data:any=await api('/auth/login',{method:'POST',body:JSON.stringify({email,password})}); localStorage.setItem('accessToken',data.accessToken); router.push('/dashboard/buyer'); }catch(err:any){setError(err.message)} } return <main className="mx-auto max-w-md px-4 py-16"><Card><CardTitle>Login to THE MARKET PLACE</CardTitle><form onSubmit={submit} className="mt-6 space-y-4"><Input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/><Input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password"/>{error&&<p className="text-sm text-red-500">{error}</p>}<Button className="w-full">Login</Button></form><p className="mt-4 text-sm text-muted-foreground">Seed accounts: admin@example.com, buyer@example.com, vendor@example.com / Password123!</p></Card></main> }
