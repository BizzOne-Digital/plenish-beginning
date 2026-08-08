import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2026-07-29.dahlia',
});

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'cad',
        product_data: {
          name: item.name,
          description: `${item.size} – Salt-Free, Non-GMO, MSG-Free`,
          images: [item.image],
          metadata: { brand: 'Plenish Beginning' },
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Apply discount via coupon if applicable
    const subtotal = items.reduce((s: number, i: any) => s + i.price * i.quantity, 0);
    let discounts: any[] = [];
    
    if (subtotal >= 100) {
      const coupon = await stripe.coupons.create({ percent_off: 10, duration: 'once' });
      discounts = [{ coupon: coupon.id }];
    } else if (subtotal >= 50) {
      const coupon = await stripe.coupons.create({ percent_off: 5, duration: 'once' });
      discounts = [{ coupon: coupon.id }];
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      discounts,
      shipping_address_collection: { allowed_countries: ['CA'] },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/#shop`,
      metadata: { store: 'Plenish Beginning' },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
