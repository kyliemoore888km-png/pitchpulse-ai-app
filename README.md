# PitchPulse AI

A polished launch-ready AI outbound sales product built with Next.js and designed for a pilot-first SaaS rollout.

## Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase-ready auth and data layer
- Stripe-ready checkout route

## Features
- Landing page with value proposition
- Pricing page
- Signup page
- Dashboard sketch
- Pitch room preview
- Demo-ready API routes

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm run dev
   ```
3. Open:
   ```bash
   http://localhost:3000
   ```

## Environment
Create a `.env.local` file with the following:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PILOT_PRICE_ID=price_xxx
STRIPE_STARTER_PRICE_ID=price_xxx
STRIPE_GROWTH_PRICE_ID=price_xxx
STRIPE_ENTERPRISE_PRICE_ID=price_xxx
```

## Production notes
This is intentionally scaffolded as a launch-ready foundation. You can plug in real Supabase and Stripe keys to activate live auth and billing.
