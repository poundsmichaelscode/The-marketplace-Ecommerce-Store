import crypto from 'crypto';
import Stripe from 'stripe';
import { env } from '../config/env.js';
import { Payment } from '../models/Payment.js';
export async function initializePayment(input:{orderId:string; userId:string; amount:number; provider:'paystack'|'flutterwave'|'stripe'}) {
  const reference = `${input.provider}_${crypto.randomUUID()}`;
  const payment = await Payment.create({ order: input.orderId, user: input.userId, amount: input.amount, provider: input.provider, reference, status: 'pending' });
  return { payment, authorizationUrl: `/mock-payment/${reference}`, note: 'Connect Paystack, Flutterwave, or Stripe secret keys to enable live payments.' };
}
export function verifyStripeSignature(rawBody: Buffer, signature: string) { if (!env.STRIPE_SECRET_KEY || !env.STRIPE_WEBHOOK_SECRET) return null; const stripe = new Stripe(env.STRIPE_SECRET_KEY); return stripe.webhooks.constructEvent(rawBody, signature, env.STRIPE_WEBHOOK_SECRET); }
