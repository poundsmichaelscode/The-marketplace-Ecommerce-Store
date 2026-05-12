import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/auth.js';
import { dashboard, users, updateUserStatus } from '../controllers/admin.controller.js';
const router = Router();
router.use(requireAuth, requireRole('admin'));
router.get('/dashboard', dashboard);
router.get('/users', users);
router.patch('/users/:id/status', updateUserStatus);
export default router;
