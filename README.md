# Plenish Beginning – Next.js eCommerce Website

## Setup & Run

```bash
npm install
npm run dev
```

## Environment Variables (.env.local)

```
STRIPE_SECRET_KEY=sk_live_...          # From Stripe Dashboard
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_SITE_URL=https://plenishb.ca
```

## Stripe Setup Steps
1. Create account at stripe.com
2. Go to Developers > API Keys
3. Copy Secret Key → STRIPE_SECRET_KEY
4. Copy Publishable Key → NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
5. Set up webhook for order fulfillment at: /api/webhook

## Pages & Sections
- Home (Hero with floating product showcase)
- Shop (8 products with Add to Cart + filter)
- About Us
- Testimonials
- FAQ
- Contact (with WhatsApp chat)
- Cart Sidebar (Stripe Checkout integration)
- /success (Order confirmation page)

## Discount Logic
- Orders $50+: 5% auto-applied via Stripe coupon
- Orders $100+: 10% auto-applied via Stripe coupon

## Deployment to plenishb.ca
1. Push to GitHub
2. Deploy via Vercel: vercel.com/new
3. Add environment variables in Vercel dashboard
4. Connect domain plenishb.ca in Vercel > Domains

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (Cart State)
- Stripe (Payment Integration)
- Framer Motion ready
