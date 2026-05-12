import mongoose, { Schema, InferSchemaType } from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: ['buyer','vendor','admin'], default: 'buyer', index: true },
  avatar: String,
  isEmailVerified: { type: Boolean, default: false },
  status: { type: String, enum: ['active','suspended','pending'], default: 'active' },
  googleId: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  emailVerificationToken: String
}, { timestamps: true });
userSchema.pre('save', async function(next) { if (!this.isModified('password')) return next(); this.password = await bcrypt.hash(this.password, 12); next(); });
userSchema.methods.comparePassword = function(candidate: string) { return bcrypt.compare(candidate, this.password); };
export type UserDoc = InferSchemaType<typeof userSchema> & { _id: mongoose.Types.ObjectId; comparePassword(candidate:string): Promise<boolean> };
export const User = mongoose.model('User', userSchema);
