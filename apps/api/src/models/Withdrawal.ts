import mongoose, { Schema } from 'mongoose';
const withdrawalSchema = new Schema({ vendor: {type:Schema.Types.ObjectId, ref:'Vendor'}, amount: Number, bank: {name:String, accountNumber:String, accountName:String}, status: {type:String, enum:['pending','approved','paid','rejected'], default:'pending'}, note: String }, {timestamps:true});
export const Withdrawal = mongoose.model('Withdrawal', withdrawalSchema);
