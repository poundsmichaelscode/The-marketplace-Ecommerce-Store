import mongoose, { Schema } from 'mongoose';
const aiRecommendationSchema = new Schema({ user: {type:Schema.Types.ObjectId, ref:'User', index:true}, product: {type:Schema.Types.ObjectId, ref:'Product'}, score: Number, reason: String, source: {type:String, enum:['behavior','semantic','popular','manual'], default:'behavior'} }, {timestamps:true});
export const AIRecommendation = mongoose.model('AIRecommendation', aiRecommendationSchema);
