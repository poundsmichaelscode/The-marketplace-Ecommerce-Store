import mongoose, { Schema } from 'mongoose';
const categorySchema = new Schema({ name: {type:String, required:true}, slug: {type:String, required:true, unique:true}, parent: {type: Schema.Types.ObjectId, ref:'Category'}, image: String, isActive: {type:Boolean, default:true} }, { timestamps:true });
export const Category = mongoose.model('Category', categorySchema);
