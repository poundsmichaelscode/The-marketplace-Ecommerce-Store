# THE MARKET PLACE API Documentation

Base URL: `/api/v1`

## Auth
- `POST /auth/register` — create buyer/vendor account
- `POST /auth/login` — login and receive JWT tokens
- `GET /auth/me` — authenticated profile
- `POST /auth/forgot-password` — start reset flow
- `POST /auth/reset-password` — complete reset flow
- `POST /auth/verify-email` — verify email token

## Products
- `GET /products?q=&category=&min=&max=&page=&limit=`
- `GET /products/:slug`
- `POST /products` — vendor/admin
- `PATCH /products/:id` — vendor/admin
- `DELETE /products/:id` — vendor/admin archive

## Vendor
- `POST /vendors/onboard`
- `GET /vendors/me/dashboard`
- `GET /vendors` — admin
- `PATCH /vendors/:id/approve` — admin

## Cart and Orders
- `GET /cart`
- `POST /cart/items`
- `DELETE /cart`
- `POST /orders/checkout`
- `GET /orders/mine`
- `GET /orders` — admin
- `PATCH /orders/:id/status`
- `GET /orders/:id/invoice`
- `GET /orders/:id/receipt`

## Payments
- `POST /payments/initialize`
- `POST /payments/webhook/:provider`

## AI
- `POST /ai/chat`
- `GET /ai/search?q=`
- `POST /ai/product-description`
- `GET /ai/reviews/:productId/summary`
- `POST /ai/fraud-score`

Swagger UI is available at `/api/docs`.
