import type { Request, Response } from 'express';
import { ok, created } from '../utils/apiResponse.js';
import { initializePayment } from '../services/payment.service.js';
export async function initPayment(req: Request, res: Response) { return created(res, await initializePayment({ ...req.body, userId: req.user!.id }), 'Payment initialized'); }
export async function webhook(req: Request, res: Response) { return ok(res, null, 'Webhook received'); }
