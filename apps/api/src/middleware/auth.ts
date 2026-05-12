import type { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/tokens.js';
import { AppError } from '../utils/AppError.js';
export type Role = 'buyer'|'vendor'|'admin';
declare global { namespace Express { interface Request { user?: { id:string; email:string; role:Role } } } }
export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) throw new AppError(401, 'Missing authorization token', 'AUTH_REQUIRED');
  const payload = verifyAccessToken(header.slice(7));
  req.user = { id: payload.sub, email: payload.email, role: payload.role };
  next();
}
export const requireRole = (...roles: Role[]) => (req: Request, _res: Response, next: NextFunction) => {
  if (!req.user) throw new AppError(401, 'Authentication required', 'AUTH_REQUIRED');
  if (!roles.includes(req.user.role)) throw new AppError(403, 'Insufficient permissions', 'FORBIDDEN');
  next();
};
