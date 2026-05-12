import mongoose, { Schema } from 'mongoose';
const itemSchema = new Schema({ product: {type:Schema.Types.ObjectId, ref:'Product'}, quantity: {type:Number, default:1}, variantSku: String, priceSnapshot: Number }, {_id:false});
const cartSchema = new Schema({ user: {type:Schema.Types.ObjectId, ref:'User', required:true, unique:true}, items: [itemSchema] }, {timestamps:true});
export const Cart = mongoose.model('Cart', cartSchema);
