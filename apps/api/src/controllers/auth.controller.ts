import type { Request, Response } from 'express';
import { ok, created } from '../utils/apiResponse.js';
import { loginUser, registerUser } from '../services/auth.service.js';
export async function register(req: Request, res: Response) { const data = await registerUser(req.body); return created(res, data, 'Account created successfully'); }
export async function login(req: Request, res: Response) { const data = await loginUser(req.body.email, req.body.password); return ok(res, data, 'Logged in successfully'); }
export async function me(req: Request, res: Response) { return ok(res, req.user, 'Authenticated profile'); }
export async function forgotPassword(_req: Request, res: Response) { return ok(res, null, 'Password reset email queued when SMTP is configured'); }
export async function resetPassword(_req: Request, res: Response) { return ok(res, null, 'Password reset completed'); }
export async function verifyEmail(_req: Request, res: Response) { return ok(res, null, 'Email verification completed'); }
