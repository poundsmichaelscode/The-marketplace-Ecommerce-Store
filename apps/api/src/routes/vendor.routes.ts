import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/auth.js';
import { onboardVendor, myVendorDashboard, listVendors, approveVendor } from '../controllers/vendor.controller.js';
const router = Router();
router.post('/onboard', requireAuth, requireRole('vendor'), onboardVendor);
router.get('/me/dashboard', requireAuth, requireRole('vendor'), myVendorDashboard);
router.get('/', requireAuth, requireRole('admin'), listVendors);
router.patch('/:id/approve', requireAuth, requireRole('admin'), approveVendor);
export default router;
