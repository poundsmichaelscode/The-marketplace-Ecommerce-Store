import mongoose, { Schema } from 'mongoose';
const couponSchema = new Schema({ code: {type:String, unique:true, uppercase:true}, type: {type:String, enum:['percentage','fixed']}, value: Number, minOrderAmount: Number, startsAt: Date, expiresAt: Date, usageLimit: Number, usedCount: {type:Number, default:0}, active: {type:Boolean, default:true} }, {timestamps:true});
export const Coupon = mongoose.model('Coupon', couponSchema);
