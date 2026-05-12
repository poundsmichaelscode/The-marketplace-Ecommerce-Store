import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { initPayment, webhook } from '../controllers/payment.controller.js';
const router = Router();
router.post('/initialize', requireAuth, initPayment);
router.post('/webhook/:provider', webhook);
export default router;
