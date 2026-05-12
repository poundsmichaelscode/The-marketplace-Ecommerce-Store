import mongoose, { Schema } from 'mongoose';
const disputeSchema = new Schema({ order: {type:Schema.Types.ObjectId, ref:'Order'}, user: {type:Schema.Types.ObjectId, ref:'User'}, vendor: {type:Schema.Types.ObjectId, ref:'Vendor'}, reason: String, status: {type:String, enum:['open','investigating','resolved','rejected'], default:'open'}, messages: [{sender:{type:Schema.Types.ObjectId, ref:'User'}, body:String, at:{type:Date, default:Date.now}}] }, {timestamps:true});
export const Dispute = mongoose.model('Dispute', disputeSchema);
