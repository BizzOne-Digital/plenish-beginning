import { NextRequest, NextResponse } from 'next/server';

const CLOVER_MERCHANT_ID = process.env.CLOVER_MERCHANT_ID!;
const CLOVER_API_TOKEN = process.env.CLOVER_API_TOKEN!;
const CLOVER_API_BASE = process.env.CLOVER_API_BASE || 'https://api.clover.com';

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    const lineItems = items.map((item: any) => ({
      name: `${item.name} (${item.size})`,
      price: Math.round(item.price * 100),
      unitQty: item.quantity,
    }));

    const subtotal = items.reduce((s: number, i: any) => s + i.price * i.quantity, 0);
    if (subtotal >= 100) {
      lineItems.push({ name: 'Discount (10%)', price: -Math.round(subtotal * 0.10 * 100), unitQty: 1 });
    } else if (subtotal >= 50) {
      lineItems.push({ name: 'Discount (5%)', price: -Math.round(subtotal * 0.05 * 100), unitQty: 1 });
    }

    const res = await fetch(`${CLOVER_API_BASE}/invoicingcheckoutservice/v1/checkouts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Clover-Merchant-Id': CLOVER_MERCHANT_ID,
        Authorization: `Bearer ${CLOVER_API_TOKEN}`,
      },
      body: JSON.stringify({
        shoppingCart: { lineItems },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Clover error:', data);
      return NextResponse.json({ error: data?.message || 'Clover checkout failed' }, { status: res.status });
    }

    return NextResponse.json({ url: data.href });
  } catch (err: any) {
    console.error('Clover checkout error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
