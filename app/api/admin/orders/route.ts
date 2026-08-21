import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Order from '@/models/Order';
import { isAdminRequest } from '@/lib/adminAuth';

export async function GET(req: NextRequest) {
  if (!isAdminRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await connectDB();
  const orders = await Order.find().sort({ createdAt: -1 }).limit(200);
  return NextResponse.json({ orders });
}
