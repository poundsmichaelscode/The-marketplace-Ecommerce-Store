import type { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import { Cart } from '../models/Cart.js';
import { Order } from '../models/Order.js';
import { Product } from '../models/Product.js';
import { ok, created } from '../utils/apiResponse.js';
export async function checkout(req: Request, res: Response) { const cart:any = await Cart.findOne({user:req.user!.id}).populate('items.product'); const items = (cart?.items || []).map((i:any)=>({ product:i.product._id, vendor:i.product.vendor, name:i.product.name, image:i.product.images?.[0], quantity:i.quantity, price:i.priceSnapshot || i.product.price })); const subtotal = items.reduce((s:number,i:any)=>s+i.price*i.quantity,0); const order = await Order.create({ orderNumber:`TMP-${nanoid(10).toUpperCase()}`, buyer:req.user!.id, items, address:req.body.address, subtotal, tax:0, shippingFee:0, discount:0, total:subtotal, status:'pending' }); return created(res, order, 'Order created'); }
export async function myOrders(req: Request, res: Response) { return ok(res, await Order.find({buyer:req.user!.id}).sort('-createdAt'), 'Orders retrieved'); }
export async function allOrders(_req: Request, res: Response) { return ok(res, await Order.find().populate('buyer','name email'), 'Orders retrieved'); }
export async function updateOrderStatus(req: Request, res: Response) { return ok(res, await Order.findByIdAndUpdate(req.params.id, {status:req.body.status}, {new:true}), 'Order status updated'); }
export async function invoice(req: Request, res: Response) { const order = await Order.findById(req.params.id); return ok(res, { invoiceNumber: `INV-${order?.orderNumber}`, order }, 'Invoice generated'); }
export async function receipt(req: Request, res: Response) { const order = await Order.findById(req.params.id); return ok(res, { receiptNumber: `RCT-${order?.orderNumber}`, order }, 'Receipt generated'); }
