import { User } from '../models/User.js';
import { signAccessToken, signRefreshToken } from '../utils/tokens.js';
import { AppError } from '../utils/AppError.js';
export async function registerUser(input: {name:string; email:string; password:string; role:'buyer'|'vendor'}) {
  const exists = await User.exists({ email: input.email });
  if (exists) throw new AppError(409, 'Email already registered', 'EMAIL_EXISTS');
  const user = await User.create(input);
  return issueTokens(user);
}
export async function loginUser(email: string, password: string) {
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await (user as any).comparePassword(password))) throw new AppError(401, 'Invalid credentials', 'INVALID_LOGIN');
  if ((user as any).status !== 'active') throw new AppError(403, 'Account is not active', 'ACCOUNT_DISABLED');
  return issueTokens(user);
}
function issueTokens(user: any) {
  const payload = { sub: String(user._id), email: user.email, role: user.role };
  return { user: { id: user._id, name: user.name, email: user.email, role: user.role }, accessToken: signAccessToken(payload), refreshToken: signRefreshToken(payload) };
}
