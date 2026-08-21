'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';

export default function AdminDashboard() {
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

  const totalRevenue = orders.filter((o) => o.status === 'paid').reduce((s, o) => s + o.total, 0);
  const pendingCount = orders.filter((o) => o.status === 'pending').length;

  if (loading) return <AdminLayout><p>Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <h1 className="font-display" style={{ fontSize: '1.8rem', color: '#1B3A2D', marginBottom: 28 }}>Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 40 }}>
        <div style={{ background: '#fff', borderRadius: 14, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ color: '#6B7280', fontSize: '0.8rem', marginBottom: 8 }}>Total Orders</div>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: '#1B3A2D' }}>{orders.length}</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ color: '#6B7280', fontSize: '0.8rem', marginBottom: 8 }}>Pending</div>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: '#C9A84C' }}>{pendingCount}</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ color: '#6B7280', fontSize: '0.8rem', marginBottom: 8 }}>Revenue (Paid)</div>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: '#1B3A2D' }}>${totalRevenue.toFixed(2)}</div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.1rem', color: '#1B3A2D', marginBottom: 16, fontWeight: 700 }}>Recent Orders</h2>
      <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        {orders.slice(0, 8).map((o) => (
          <div key={o._id} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid #F0F0F0', fontSize: '0.85rem' }}>
            <span style={{ color: '#6B7280' }}>{new Date(o.createdAt).toLocaleString()}</span>
            <span>{o.items?.length || 0} item(s)</span>
            <span style={{ fontWeight: 700, color: '#1B3A2D' }}>${o.total?.toFixed(2)}</span>
            <span style={{ textTransform: 'capitalize', color: o.status === 'paid' ? '#16A34A' : '#C9A84C' }}>{o.status}</span>
          </div>
        ))}
        {orders.length === 0 && <div style={{ padding: 20, color: '#9CA3AF', fontSize: '0.85rem' }}>No orders yet.</div>}
      </div>
    </AdminLayout>
  );
}
