'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1B3A2D' }}>
      <form onSubmit={submit} style={{ background: '#fff', borderRadius: 16, padding: '40px', width: 340, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1B3A2D', marginBottom: 24, textAlign: 'center' }}>
          Plenish Admin
        </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          style={{ width: '100%', border: '1.5px solid rgba(27,58,45,0.15)', borderRadius: 8, padding: '12px 16px', fontSize: '0.9rem', marginBottom: 16, outline: 'none' }}
          autoFocus
        />
        {error && <p style={{ color: '#DC2626', fontSize: '0.8rem', marginBottom: 12 }}>{error}</p>}
        <button type="submit" disabled={loading} className="btn-gold" style={{ width: '100%' }}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
