# Deployment Guide

## Frontend: Vercel
1. Import the repository.
2. Set Root Directory to `apps/web` if deploying as a separate app.
3. Add `NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api/v1`.
4. Build command: `npm run build`.
5. Output is handled by Next.js.

## Backend: Render or Railway
1. Create a Node service from the repo.
2. Set root directory to `apps/api` or deploy from monorepo with build command:
   `npm install && npm run build --workspace apps/api`
3. Start command:
   `npm run start --workspace apps/api`
4. Add MongoDB Atlas, Redis, JWT, payment, SMTP, OpenAI, and Cloudinary env vars.

## MongoDB Atlas
- Create a cluster.
- Add database user.
- Whitelist deployment IPs or `0.0.0.0/0` for testing only.
- Set `MONGODB_URI`.

## Cloudinary
- Create a Cloudinary account.
- Add cloud name, API key, and API secret.
- Use signed uploads in production.

## Payments
- Add Paystack, Flutterwave, and Stripe secret keys to backend.
- Add public keys to frontend.
- Configure payment webhooks to `/api/v1/payments/webhook/:provider`.

## Docker
Run locally:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
npm install
docker compose up --build
```
