'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';

const EMPTY = { id: '', name: '', price: '', size: '', image: '', badge: '', description: '', benefits: '' };

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any | null>(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const load = () => {
    fetch('/api/admin/products').then(async (res) => {
      if (res.status === 401) return router.push('/admin/login');
      const data = await res.json();
      setProducts(data.products || []);
      setLoading(false);
    });
  };

  useEffect(load, [router]);

  const openNew = () => setEditing({ ...EMPTY, isNew: true });
  const openEdit = (p: any) => setEditing({ ...p, benefits: (p.benefits || []).join(', '), isNew: false });

  const upload = async (file: File) => {
    setUploading(true);
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
    const data = await res.json();
    setUploading(false);
    if (data.url) setEditing((e: any) => ({ ...e, image: data.url }));
    else alert(data.error || 'Upload failed');
  };

  const save = async () => {
    const payload = {
      ...editing,
      price: parseFloat(editing.price),
      benefits: editing.benefits.split(',').map((b: string) => b.trim()).filter(Boolean),
    };
    delete payload.isNew;
    await fetch('/api/admin/products', {
      method: editing.isNew ? 'POST' : 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setEditing(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    await fetch('/api/admin/products', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    load();
  };

  if (loading) return <AdminLayout><p>Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <h1 className="font-display" style={{ fontSize: '1.8rem', color: '#1B3A2D' }}>Products</h1>
        <button onClick={openNew} className="btn-gold">+ Add Product</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
        {products.map((p) => (
          <div key={p.id} style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div style={{ height: 160, overflow: 'hidden' }}>
              <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontWeight: 700, color: '#1B3A2D', fontSize: '0.9rem', marginBottom: 4 }}>{p.name}</div>
              <div style={{ color: '#C9A84C', fontWeight: 700, marginBottom: 12 }}>${p.price?.toFixed(2)} · {p.size}</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => openEdit(p)} style={{ flex: 1, padding: '8px', fontSize: '0.78rem', border: '1px solid #1B3A2D', background: 'none', color: '#1B3A2D', borderRadius: 6, cursor: 'pointer' }}>Edit</button>
                <button onClick={() => remove(p.id)} style={{ flex: 1, padding: '8px', fontSize: '0.78rem', border: '1px solid #DC2626', background: 'none', color: '#DC2626', borderRadius: 6, cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, width: 480, maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#1B3A2D', marginBottom: 20, fontWeight: 700 }}>{editing.isNew ? 'Add Product' : 'Edit Product'}</h2>

            {editing.image && <img src={editing.image} alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />}
            <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} style={{ marginBottom: 16, fontSize: '0.8rem' }} />
            {uploading && <p style={{ fontSize: '0.8rem', color: '#C9A84C' }}>Uploading...</p>}

            {[
              { key: 'id', label: 'Product ID (unique slug)', disabled: !editing.isNew },
              { key: 'name', label: 'Name' },
              { key: 'price', label: 'Price (CAD)' },
              { key: 'size', label: 'Size (e.g. 30g)' },
              { key: 'badge', label: 'Badge (optional)' },
              { key: 'benefits', label: 'Benefits (comma-separated)' },
            ].map((f) => (
              <div key={f.key} style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#1B3A2D', marginBottom: 6 }}>{f.label}</label>
                <input
                  value={editing[f.key] || ''}
                  disabled={f.disabled}
                  onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })}
                  style={{ width: '100%', border: '1.5px solid rgba(27,58,45,0.15)', borderRadius: 8, padding: '9px 12px', fontSize: '0.85rem', outline: 'none', background: f.disabled ? '#F5F5F5' : '#fff' }}
                />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#1B3A2D', marginBottom: 6 }}>Description</label>
              <textarea
                value={editing.description || ''}
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                rows={3}
                style={{ width: '100%', border: '1.5px solid rgba(27,58,45,0.15)', borderRadius: 8, padding: '9px 12px', fontSize: '0.85rem', outline: 'none', resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={save} className="btn-gold" style={{ flex: 1 }}>Save</button>
              <button onClick={() => setEditing(null)} style={{ flex: 1, background: 'none', border: '1px solid rgba(27,58,45,0.2)', borderRadius: 4, color: '#1B3A2D', cursor: 'pointer' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
