import type { Request, Response } from 'express';
import { Vendor } from '../models/Vendor.js';
import { Product } from '../models/Product.js';
import { Order } from '../models/Order.js';
import { ok, created } from '../utils/apiResponse.js';
export async function onboardVendor(req: Request, res: Response) { const vendor = await Vendor.create({ ...req.body, owner: req.user!.id, slug: req.body.storeName.toLowerCase().replace(/[^a-z0-9]+/g,'-') }); return created(res, vendor, 'Vendor onboarding submitted'); }
export async function myVendorDashboard(req: Request, res: Response) { const vendor = await Vendor.findOne({ owner: req.user!.id }); const products = vendor ? await Product.countDocuments({ vendor: vendor._id }) : 0; const orders = vendor ? await Order.countDocuments({ 'items.vendor': vendor._id }) : 0; return ok(res, { vendor, stats: { products, orders, revenue: vendor?.totalSales || 0 } }, 'Vendor dashboard'); }
export async function listVendors(_req: Request, res: Response) { return ok(res, await Vendor.find().populate('owner','name email'), 'Vendors retrieved'); }
export async function approveVendor(req: Request, res: Response) { return ok(res, await Vendor.findByIdAndUpdate(req.params.id, { status:'approved', verificationBadge:true }, { new:true }), 'Vendor approved'); }
