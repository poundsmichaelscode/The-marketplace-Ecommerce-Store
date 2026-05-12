import mongoose, { Schema } from 'mongoose';
const messageSchema = new Schema({ role: {type:String, enum:['user','assistant','system']}, content: String, createdAt: {type:Date, default:Date.now} }, {_id:false});
const chatSchema = new Schema({ user: {type:Schema.Types.ObjectId, ref:'User', index:true}, title: String, intent: String, messages: [messageSchema] }, {timestamps:true});
export const Chat = mongoose.model('Chat', chatSchema);
