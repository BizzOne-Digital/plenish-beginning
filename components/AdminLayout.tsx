'use client';
import { useRouter, usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const NAV = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/settings', label: 'Contact Info' },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    router.push('/admin/login');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#FAF7F0', fontFamily: 'Inter, sans-serif' }}>
      <aside style={{ width: 220, background: '#1B3A2D', padding: '28px 0', flexShrink: 0 }}>
        <div style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem', padding: '0 24px', marginBottom: 32 }}>
          Plenish Admin
        </div>
        <nav>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: 'block',
                padding: '12px 24px',
                color: pathname === item.href ? '#C9A84C' : 'rgba(255,255,255,0.7)',
                background: pathname === item.href ? 'rgba(201,168,76,0.1)' : 'transparent',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderLeft: pathname === item.href ? '3px solid #C9A84C' : '3px solid transparent',
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={logout}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '12px 24px',
              marginTop: 20,
              color: 'rgba(255,255,255,0.4)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.85rem',
            }}
          >
            Log Out
          </button>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '32px 40px', overflowY: 'auto' }}>{children}</main>
    </div>
  );
}
