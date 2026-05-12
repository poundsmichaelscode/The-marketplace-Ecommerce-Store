# THE MARKET PLACE

**THE MARKET PLACE** is a production-ready multivendor e-commerce marketplace architecture inspired by Jumia, Amazon, and AliExpress. It includes a Next.js frontend, Express/MongoDB backend, JWT authentication, vendor/admin/buyer dashboards, payment integration scaffolds, AI shopping features, Docker, CI/CD, API documentation, and deployment guides.

---

## Features

### Buyer
- Product discovery
- Product details
- Cart system
- Checkout flow
- Order history
- Invoice and receipt endpoints
- Wishlist-ready schema
- AI shopping assistant

### Vendor
- Vendor onboarding
- Vendor dashboard
- Product management
- Inventory-ready product model
- Order management-ready APIs
- Vendor analytics-ready structure
- AI product description generation

### Admin
- Platform dashboard
- User management
- Vendor approval
- Product/order/payment oversight
- Dispute and monitoring-ready architecture
- AI fraud scoring endpoint

### AI
- AI shopping assistant
- AI semantic search fallback
- AI product description generation
- AI review summarization
- AI fraud signal scoring
- Extension points for Pinecone/Weaviate and recommendation ranking

### Security
- JWT authentication
- Role-based access control
- Rate limiting
- Helmet secure headers
- CORS protection
- MongoDB sanitization
- XSS cleaning
- Centralized error handling
- Environment variable validation

---

## Tech Stack

### Frontend
- Next.js App Router
- TypeScript
- Tailwind CSS
- Shadcn-style UI primitives
- TanStack Query
- Zustand-ready architecture
- Framer Motion-ready setup

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- Redis
- JWT
- OpenAI integration scaffold
- Swagger API docs

### DevOps
- Docker
- Docker Compose
- GitHub Actions CI
- Vercel-ready frontend
- Render/Railway-ready backend

---

## Project Structure

```txt
the-market-place/
├── apps/
│   ├── api/              # Express + MongoDB backend
│   └── web/              # Next.js frontend
├── packages/
│   └── shared/           # Shared types
├── docs/
│   ├── API.md
│   └── DEPLOYMENT.md
├── .github/workflows/ci.yml
├── docker-compose.yml
├── package.json
└── README.md
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

Update the values in both `.env` files.

### 3. Start MongoDB and Redis with Docker

```bash
docker compose up mongo redis
```

### 4. Seed demo data

```bash
npm run seed --workspace apps/api
```

Demo accounts:

```txt
admin@example.com / Password123!
buyer@example.com / Password123!
vendor@example.com / Password123!
```

### 5. Run the full app

```bash
npm run dev
```

Frontend: `http://localhost:3000`  
Backend: `http://localhost:5000/api/v1/health`  
Swagger Docs: `http://localhost:5000/api/docs`

---

## Docker Run

```bash
docker compose up --build
```

---

## API Documentation

See [`docs/API.md`](docs/API.md). Swagger is also served at `/api/docs` when the backend is running.

---

## Deployment

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Production Notes

Before going live:

1. Replace all JWT secrets with strong random values.
2. Use MongoDB Atlas with restricted IP access.
3. Use managed Redis.
4. Configure real payment webhooks.
5. Enable Cloudinary signed uploads.
6. Add email verification SMTP provider.
7. Add Sentry or another monitoring tool.
8. Add full unit, integration, and E2E tests.
9. Add real CSRF protection for cookie-based auth flows.
10. Configure backup and disaster recovery.

---

## Author

Built for **THE MARKET PLACE** by **poundsmichaels digitals**.


## Premium Frontend Redesign

The frontend has been redesigned with a luxury marketplace design system using the brand palette `#013328`, `#CC8B65`, `#D3DCD2`, and `#100C0D`. It includes animated landing sections, responsive product cards, premium authentication pages, AI shopping assistant widget, and buyer/vendor/admin dashboards with charts.

Run:

```bash
npm install
npm run dev
```

Frontend: http://localhost:3000
Backend: use `NEXT_PUBLIC_API_URL` in `apps/web/.env`.
