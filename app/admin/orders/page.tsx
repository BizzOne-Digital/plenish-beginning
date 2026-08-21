'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/orders').then(async (res) => {
      if (res.status === 401) return router.push('/admin/login');
      const data = await res.json();
      setOrders(data.orders || []);
      setLoading(false);
    });
  }, [router]);

  if (loading) return <AdminLayout><p>Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <h1 className="font-display" style={{ fontSize: '1.8rem', color: '#1B3A2D', marginBottom: 28 }}>Orders</h1>
      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 2fr 1fr 1fr 1fr', padding: '14px 20px', background: '#F9F7F2', fontSize: '0.75rem', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase' }}>
          <span>Date</span><span>Items</span><span>Subtotal</span><span>Total</span><span>Status</span>
        </div>
        {orders.map((o) => (
          <div key={o._id} style={{ display: 'grid', gridTemplateColumns: '1.4fr 2fr 1fr 1fr 1fr', padding: '16px 20px', borderBottom: '1px solid #F0F0F0', fontSize: '0.85rem', alignItems: 'center' }}>
            <span style={{ color: '#6B7280' }}>{new Date(o.createdAt).toLocaleString()}</span>
            <span>{o.items?.map((i: any) => `${i.name} x${i.quantity}`).join(', ')}</span>
            <span>${o.subtotal?.toFixed(2)}</span>
            <span style={{ fontWeight: 700, color: '#1B3A2D' }}>${o.total?.toFixed(2)}</span>
            <span style={{
              display: 'inline-block', textAlign: 'center', textTransform: 'capitalize', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: 20, width: 'fit-content',
              background: o.status === 'paid' ? 'rgba(22,163,74,0.1)' : o.status === 'cancelled' ? 'rgba(220,38,38,0.1)' : 'rgba(201,168,76,0.15)',
              color: o.status === 'paid' ? '#16A34A' : o.status === 'cancelled' ? '#DC2626' : '#A07830',
            }}>
              {o.status}
            </span>
          </div>
        ))}
        {orders.length === 0 && <div style={{ padding: 20, color: '#9CA3AF', fontSize: '0.85rem' }}>No orders yet.</div>}
      </div>
    </AdminLayout>
  );
}
