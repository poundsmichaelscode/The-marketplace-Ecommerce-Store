'use client';
import { useState } from 'react';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
export default function AIAssistant(){ const [message,setMessage]=useState('What phone should I buy under 300k?'); const [reply,setReply]=useState(''); async function ask(){ const data:any=await api('/ai/chat',{method:'POST',body:JSON.stringify({message})}); setReply(data.reply); } return <main className="mx-auto max-w-3xl px-4 py-10"><Card><CardTitle>AI Shopping Assistant</CardTitle><p className="mt-2 text-muted-foreground">Ask about budget, lifestyle, product comparison, and vendor trust.</p><div className="mt-6 flex gap-3"><Input value={message} onChange={e=>setMessage(e.target.value)}/><Button onClick={ask}>Ask</Button></div>{reply&&<div className="mt-6 rounded-2xl bg-muted p-4 whitespace-pre-wrap">{reply}</div>}</Card></main> }
