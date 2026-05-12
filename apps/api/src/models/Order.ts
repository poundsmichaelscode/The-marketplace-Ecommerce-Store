import mongoose, { Schema } from 'mongoose';
const orderItemSchema = new Schema({ product: {type:Schema.Types.ObjectId, ref:'Product'}, vendor: {type:Schema.Types.ObjectId, ref:'Vendor'}, name: String, image: String, quantity: Number, price: Number }, {_id:false});
const orderSchema = new Schema({
  orderNumber: { type: String, required: true, unique: true },
  buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  items: [orderItemSchema],
  address: { fullName:String, phone:String, line1:String, city:String, state:String, country:String, postalCode:String },
  subtotal: Number,
  tax: Number,
  shippingFee: Number,
  discount: Number,
  total: Number,
  status: { type: String, enum: ['pending','paid','processing','shipped','delivered','cancelled','refunded'], default: 'pending', index: true },
  payment: { type: Schema.Types.ObjectId, ref: 'Payment' },
  tracking: { carrier:String, trackingNumber:String, history:[{status:String, note:String, at:Date}] }
}, { timestamps: true });
export const Order = mongoose.model('Order', orderSchema);
