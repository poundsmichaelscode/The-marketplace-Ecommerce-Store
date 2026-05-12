import mongoose, { Schema } from 'mongoose';
const notificationSchema = new Schema({ user: {type:Schema.Types.ObjectId, ref:'User', index:true}, title: String, message: String, type: String, isRead: {type:Boolean, default:false}, data: Schema.Types.Mixed }, {timestamps:true});
export const Notification = mongoose.model('Notification', notificationSchema);
