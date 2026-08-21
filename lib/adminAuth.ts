import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'dev-secret-change-me';
export const ADMIN_COOKIE = 'admin_session';

export function signAdminToken() {
  return jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyAdminToken(token: string | undefined): boolean {
  if (!token) return false;
  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    return decoded?.role === 'admin';
  } catch {
    return false;
  }
}

export function isAdminRequest(req: NextRequest): boolean {
  const token = req.cookies.get(ADMIN_COOKIE)?.value;
  return verifyAdminToken(token);
}
