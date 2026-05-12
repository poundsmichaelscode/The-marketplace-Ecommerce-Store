import mongoose, { Schema } from 'mongoose';
const variantSchema = new Schema({ name: String, sku: String, price: Number, stock: Number, attributes: Schema.Types.Mixed }, { _id:false });
const productSchema = new Schema({
  vendor: { type: Schema.Types.ObjectId, ref: 'Vendor', required: true, index: true },
  name: { type: String, required: true, text: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true, text: true },
  aiDescription: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category', index: true },
  brand: String,
  images: [String],
  price: { type: Number, required: true, min: 0 },
  compareAtPrice: Number,
  stock: { type: Number, required: true, min: 0, default: 0 },
  variants: [variantSchema],
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  tags: [String],
  seo: { title: String, description: String, keywords: [String] },
  status: { type: String, enum: ['draft','active','archived','rejected'], default: 'draft', index: true },
  embeddingId: String,
  flashSale: { isActive: Boolean, price: Number, endsAt: Date }
}, { timestamps: true });
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
export const Product = mongoose.model('Product', productSchema);
