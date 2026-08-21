import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { signAdminToken, ADMIN_COOKIE } from '@/lib/adminAuth';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const hash = process.env.ADMIN_PASSWORD_HASH;
  const plain = process.env.ADMIN_PASSWORD;

  let valid = false;
  if (hash) {
    valid = await bcrypt.compare(password || '', hash);
  } else if (plain) {
    valid = password === plain;
  }

  if (!valid) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const token = signAdminToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
