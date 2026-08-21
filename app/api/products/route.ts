import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import { PRODUCTS } from '@/lib/cartStore';

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({ active: true }).sort({ createdAt: 1 });
    if (products.length === 0) return NextResponse.json({ products: PRODUCTS });
    return NextResponse.json({ products });
  } catch (err) {
    // DB not configured yet or unreachable - fall back to the static catalog
    console.error('Products fetch fell back to static catalog:', err);
    return NextResponse.json({ products: PRODUCTS });
  }
}
