import mongoose, { Schema } from 'mongoose';
const vendorSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  storeName: { type: String, required: true, trim: true, index: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  logo: String,
  banner: String,
  businessEmail: String,
  businessPhone: String,
  status: { type: String, enum: ['pending','approved','rejected','suspended'], default: 'pending', index: true },
  verificationBadge: { type: Boolean, default: false },
  balance: { type: Number, default: 0 },
  totalSales: { type: Number, default: 0 },
  rating: { type: Number, default: 0 }
}, { timestamps: true });
export const Vendor = mongoose.model('Vendor', vendorSchema);
