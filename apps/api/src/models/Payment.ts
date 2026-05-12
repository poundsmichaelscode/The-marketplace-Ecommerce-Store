import mongoose, { Schema } from 'mongoose';
const paymentSchema = new Schema({ order: {type:Schema.Types.ObjectId, ref:'Order'}, user: {type:Schema.Types.ObjectId, ref:'User'}, provider: {type:String, enum:['paystack','flutterwave','stripe']}, reference: {type:String, unique:true}, amount: Number, currency: {type:String, default:'NGN'}, status: {type:String, enum:['pending','success','failed','refunded'], default:'pending'}, metadata: Schema.Types.Mixed }, {timestamps:true});
export const Payment = mongoose.model('Payment', paymentSchema);
