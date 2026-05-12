import OpenAI from 'openai';
import { env } from '../config/env.js';
import { Product } from '../models/Product.js';
import { Review } from '../models/Review.js';
const openai = env.OPENAI_API_KEY ? new OpenAI({ apiKey: env.OPENAI_API_KEY }) : null;
export async function chatShoppingAssistant(message: string, userContext='') {
  if (!openai) return { reply: `AI demo mode: Based on your request, I recommend comparing budget, reviews, warranty, and vendor verification. Query: ${message}` };
  const completion = await openai.chat.completions.create({ model: 'gpt-4o-mini', messages: [{role:'system', content:'You are THE MARKET PLACE shopping assistant. Give safe, concise product guidance.'}, {role:'user', content:`Context: ${userContext}
Question: ${message}`}], temperature: 0.4 });
  return { reply: completion.choices[0]?.message?.content || 'No response' };
}
export async function generateProductDescription(input: { name:string; features:string[]; audience?:string }) {
  if (!openai) return { description: `${input.name} is designed for ${input.audience || 'modern shoppers'} with features including ${input.features.join(', ')}.` };
  const res = await openai.chat.completions.create({ model:'gpt-4o-mini', messages:[{role:'user', content:`Write a persuasive e-commerce product description for ${input.name}. Features: ${input.features.join(', ')}`}], temperature:0.6 });
  return { description: res.choices[0]?.message?.content };
}
export async function semanticSearch(query: string) {
  // Production hook: generate embeddings and query Pinecone/Weaviate. Fallback uses MongoDB text search.
  return Product.find({ $text: { $search: query }, status: 'active' }).limit(20);
}
export async function summarizeReviews(productId: string) {
  const reviews = await Review.find({ product: productId }).limit(50);
  const text = reviews.map(r=>`${r.rating}/5 ${r.comment}`).join('
');
  if (!openai) return { summary: text ? 'Customers mention product quality, delivery experience, and price-value balance.' : 'No reviews yet.' };
  const res = await openai.chat.completions.create({ model:'gpt-4o-mini', messages:[{role:'user', content:`Summarize these reviews in 5 bullet points:
${text}`}], temperature:0.2 });
  return { summary: res.choices[0]?.message?.content };
}
export async function fraudSignals(payload:any) {
  const score = payload.largeOrder || payload.newVendor ? 72 : 18;
  return { riskScore: score, flags: score > 60 ? ['large_order_or_new_vendor', 'manual_review_required'] : [] };
}
