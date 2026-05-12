import { Product } from '../models/Product.js';
import { Vendor } from '../models/Vendor.js';
import { AppError } from '../utils/AppError.js';
export async function listProducts(query:any) {
  const page = Number(query.page || 1); const limit = Math.min(Number(query.limit || 20), 100);
  const filter:any = { status: 'active' };
  if (query.category) filter.category = query.category;
  if (query.min || query.max) filter.price = { ...(query.min && {$gte:Number(query.min)}), ...(query.max && {$lte:Number(query.max)}) };
  if (query.q) filter.$text = { $search: query.q };
  const [items,total] = await Promise.all([Product.find(filter).populate('vendor','storeName verificationBadge').skip((page-1)*limit).limit(limit).sort(query.sort || '-createdAt'), Product.countDocuments(filter)]);
  return { items, pagination: { page, limit, total, pages: Math.ceil(total/limit) } };
}
export async function createProduct(userId:string, body:any) {
  const vendor = await Vendor.findOne({ owner: userId, status: { $in: ['pending','approved'] } });
  if (!vendor) throw new AppError(403, 'Vendor profile required', 'VENDOR_REQUIRED');
  return Product.create({ ...body, vendor: vendor._id, slug: body.slug || body.name.toLowerCase().replace(/[^a-z0-9]+/g,'-'), status: body.status || 'draft' });
}
