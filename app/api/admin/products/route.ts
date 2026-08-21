import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import { isAdminRequest } from '@/lib/adminAuth';

export async function GET(req: NextRequest) {
  if (!isAdminRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await connectDB();
  const products = await Product.find().sort({ createdAt: 1 });
  return NextResponse.json({ products });
}

export async function POST(req: NextRequest) {
  if (!isAdminRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await connectDB();
  const body = await req.json();
  const product = await Product.create(body);
  return NextResponse.json({ product });
}

export async function PUT(req: NextRequest) {
  if (!isAdminRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await connectDB();
  const { id, ...updates } = await req.json();
  const product = await Product.findOneAndUpdate({ id }, updates, { new: true });
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ product });
}

export async function DELETE(req: NextRequest) {
  if (!isAdminRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await connectDB();
  const { id } = await req.json();
  await Product.deleteOne({ id });
  return NextResponse.json({ ok: true });
}
