import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { getCart, addToCart, clearCart } from '../controllers/cart.controller.js';
const router = Router();
router.get('/', requireAuth, getCart);
router.post('/items', requireAuth, addToCart);
router.delete('/', requireAuth, clearCart);
export default router;
