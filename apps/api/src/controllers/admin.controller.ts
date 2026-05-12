import type { Request, Response } from 'express';
import { User } from '../models/User.js';
import { Vendor } from '../models/Vendor.js';
import { Product } from '../models/Product.js';
import { Order } from '../models/Order.js';
import { Payment } from '../models/Payment.js';
import { ok } from '../utils/apiResponse.js';
export async function dashboard(_req: Request, res: Response) { const [users,vendors,products,orders,payments] = await Promise.all([User.countDocuments(),Vendor.countDocuments(),Product.countDocuments(),Order.countDocuments(),Payment.countDocuments({status:'success'})]); return ok(res, { users, vendors, products, orders, payments }, 'Admin dashboard'); }
export async function users(_req: Request, res: Response) { return ok(res, await User.find().select('-password').sort('-createdAt'), 'Users retrieved'); }
export async function updateUserStatus(req: Request, res: Response) { return ok(res, await User.findByIdAndUpdate(req.params.id, {status:req.body.status}, {new:true}).select('-password'), 'User status updated'); }
