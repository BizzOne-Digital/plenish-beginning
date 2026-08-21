'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';

const FIELDS = [
  { name: 'phone', label: 'Phone Number' },
  { name: 'email', label: 'Email Address' },
  { name: 'hours', label: 'Business Hours', textarea: true },
  { name: 'instagram', label: 'Instagram Handle' },
  { name: 'tiktok', label: 'TikTok Handle' },
  { name: 'whatsapp', label: 'WhatsApp Number' },
];

export default function AdminSettingsPage() {
  const [form, setForm] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/settings').then(async (res) => {
      if (res.status === 401) return router.push('/admin/login');
      const data = await res.json();
      setForm(data.settings || {});
      setLoading(false);
    });
  }, [router]);

  const save = async () => {
    setSaving(true);
    setSaved(false);
    await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <AdminLayout><p>Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <h1 className="font-display" style={{ fontSize: '1.8rem', color: '#1B3A2D', marginBottom: 28 }}>Contact Info</h1>
      <div style={{ background: '#fff', borderRadius: 14, padding: '32px', maxWidth: 560, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        {FIELDS.map((f) => (
          <div key={f.name} style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#1B3A2D', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {f.label}
            </label>
            {f.textarea ? (
              <textarea
                value={form[f.name] || ''}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                rows={3}
                style={{ width: '100%', border: '1.5px solid rgba(27,58,45,0.15)', borderRadius: 8, padding: '10px 14px', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }}
              />
            ) : (
              <input
                value={form[f.name] || ''}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                style={{ width: '100%', border: '1.5px solid rgba(27,58,45,0.15)', borderRadius: 8, padding: '10px 14px', fontSize: '0.9rem', outline: 'none' }}
              />
            )}
          </div>
        ))}
        <button onClick={save} disabled={saving} className="btn-gold">
          {saving ? 'Saving...' : saved ? 'Saved ✓' : 'Save Changes'}
        </button>
      </div>
    </AdminLayout>
  );
}
