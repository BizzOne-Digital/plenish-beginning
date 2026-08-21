import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Settings from '@/models/Settings';
import { isAdminRequest } from '@/lib/adminAuth';

export async function GET(req: NextRequest) {
  if (!isAdminRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await connectDB();
  const settings = await Settings.findOne({ key: 'site' });
  return NextResponse.json({ settings });
}

export async function PUT(req: NextRequest) {
  if (!isAdminRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await connectDB();
  const body = await req.json();
  const settings = await Settings.findOneAndUpdate({ key: 'site' }, body, { new: true, upsert: true });
  return NextResponse.json({ settings });
}
