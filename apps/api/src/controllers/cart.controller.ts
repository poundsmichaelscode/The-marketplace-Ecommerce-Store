import type { Request, Response } from 'express';
import { Cart } from '../models/Cart.js';
import { Product } from '../models/Product.js';
import { ok } from '../utils/apiResponse.js';
export async function getCart(req: Request, res: Response) { const cart = await Cart.findOne({ user:req.user!.id }).populate('items.product'); return ok(res, cart || {items:[]}, 'Cart retrieved'); }
export async function addToCart(req: Request, res: Response) { const product = await Product.findById(req.body.productId); let cart = await Cart.findOne({ user:req.user!.id }); if(!cart) cart = await Cart.create({user:req.user!.id, items:[]}); const item:any = cart.items.find((i:any)=>String(i.product)===req.body.productId); if(item) item.quantity += req.body.quantity || 1; else cart.items.push({ product:req.body.productId, quantity:req.body.quantity || 1, priceSnapshot: product?.price }); await cart.save(); return ok(res, cart, 'Cart updated'); }
export async function clearCart(req: Request, res: Response) { await Cart.findOneAndUpdate({user:req.user!.id}, {items:[]}); return ok(res, null, 'Cart cleared'); }
