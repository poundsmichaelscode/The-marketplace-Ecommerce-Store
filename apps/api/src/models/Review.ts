import mongoose, { Schema } from 'mongoose';
const reviewSchema = new Schema({ product: {type:Schema.Types.ObjectId, ref:'Product', index:true}, user: {type:Schema.Types.ObjectId, ref:'User'}, rating: {type:Number, min:1, max:5}, comment: String, aiSummaryIncluded: {type:Boolean, default:false} }, {timestamps:true});
export const Review = mongoose.model('Review', reviewSchema);
