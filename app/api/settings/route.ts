import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Settings from '@/models/Settings';

const DEFAULTS = {
  phone: '647-572-8435',
  email: 'plenishb@gmail.com',
  hours: 'Mon–Fri: 8am–8pm\nSat: 9am–5pm\nSun: Closed',
  instagram: '',
  tiktok: '',
  whatsapp: '',
};

export async function GET() {
  try {
    await connectDB();
    const settings = await Settings.findOne({ key: 'site' });
    return NextResponse.json({ settings: settings || DEFAULTS });
  } catch (err) {
    console.error('Settings fetch fell back to defaults:', err);
    return NextResponse.json({ settings: DEFAULTS });
  }
}
