import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from '../app.js';
describe('health', () => { it('returns api health', async () => { const res = await request(app).get('/api/v1/health'); expect(res.status).toBe(200); expect(res.body.success).toBe(true); }); });
