import type { Request, Response } from 'express';
import { Product } from '../models/Product.js';
import { ok, created } from '../utils/apiResponse.js';
import { createProduct, listProducts } from '../services/product.service.js';
export async function getProducts(req: Request, res: Response) { return ok(res, await listProducts(req.query), 'Products retrieved'); }
export async function getProduct(req: Request, res: Response) { return ok(res, await Product.findOne({ slug: req.params.slug }).populate('vendor','storeName verificationBadge rating'), 'Product retrieved'); }
export async function postProduct(req: Request, res: Response) { return created(res, await createProduct(req.user!.id, req.body), 'Product created'); }
export async function updateProduct(req: Request, res: Response) { return ok(res, await Product.findByIdAndUpdate(req.params.id, req.body, { new:true }), 'Product updated'); }
export async function deleteProduct(req: Request, res: Response) { await Product.findByIdAndUpdate(req.params.id, { status:'archived' }); return ok(res, null, 'Product archived'); }
