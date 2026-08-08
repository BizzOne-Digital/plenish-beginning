'use client';
import { useState } from 'react';
import { useCartStore, PRODUCTS, Product } from '@/lib/cartStore';
import Reveal from './Reveal';

export default function Shop() {
  const { addItem, toggleCart } = useCartStore();
  const [added, setAdded] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const filters = ['All', '30g Bags', '70-80g Bags', 'Caribbean'];

  const filtered = PRODUCTS.filter(p => {
    if (filter === '30g Bags') return p.size === '30g';
    if (filter === '70-80g Bags') return p.size === '80g' || p.size === '70g';
    if (filter === 'Caribbean') return p.badge === 'Caribbean';
    return true;
  });

  const handleAdd = (product: Product) => {
    addItem(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
    toggleCart();
  };

  return (
    <section id="shop" style={{ background: '#FAF7F0', padding: '100px 5%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <Reveal style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">Our Products</span>
          <div className="divider-gold" style={{ margin: '16px auto' }}/>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1B3A2D', marginBottom: 16 }}>
            Authentic Herb Blends & Seasonings
          </h2>
          <p style={{ color: '#4A4A4A', fontSize: '1rem', maxWidth: 540, margin: '0 auto' }}>
            Salt-free, non-GMO, MSG-free blends that support gut health and bring the Caribbean to your kitchen.
          </p>
        </Reveal>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '8px 20px', borderRadius: 40, fontSize: '0.8rem', fontWeight: 600,
              fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'all 0.25s',
              background: filter === f ? '#1B3A2D' : 'transparent',
              color: filter === f ? '#C9A84C' : '#1B3A2D',
              border: filter === f ? '2px solid #1B3A2D' : '2px solid rgba(27,58,45,0.25)',
            }}>{f}</button>
          ))}
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 28 }}>
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={i * 80} className="product-card" style={{
              background: '#fff', borderRadius: 16, overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(27,58,45,0.08)',
              position: 'relative',
            }}>
              {/* Badge */}
              {product.badge && (
                <div style={{ position: 'absolute', top: 16, left: 16, background: 'linear-gradient(135deg, #C9A84C, #E8C96A)', color: '#1B3A2D', fontSize: '0.65rem', fontWeight: 800, padding: '4px 12px', borderRadius: 40, letterSpacing: '0.08em', textTransform: 'uppercase', zIndex: 2 }}>
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.transform = 'scale(1.08)'}
                  onMouseLeave={e => (e.target as HTMLElement).style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,58,45,0.5) 0%, transparent 60%)' }}/>
                {/* Size chip */}
                <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(27,58,45,0.85)', color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: 40 }}>
                  {product.size}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px 20px 24px' }}>
                <h3 className="font-display" style={{ fontSize: '1.05rem', color: '#1B3A2D', marginBottom: 8, fontWeight: 700 }}>{product.name}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: 14 }}>{product.description}</p>

                {/* Benefits */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
                  {product.benefits.map(b => (
                    <span key={b} style={{ background: 'rgba(27,58,45,0.08)', color: '#2D5A42', fontSize: '0.65rem', fontWeight: 700, padding: '3px 10px', borderRadius: 40, letterSpacing: '0.05em' }}>{b}</span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: 'Bebas Neue', fontSize: '1.8rem', color: '#1B3A2D', lineHeight: 1 }}>${product.price.toFixed(2)}</span>
                    <span style={{ color: '#9CA3AF', fontSize: '0.72rem', marginLeft: 4 }}>CAD</span>
                  </div>
                  <button onClick={() => handleAdd(product)} style={{
                    background: added === product.id ? '#2D5A42' : 'linear-gradient(135deg, #C9A84C, #E8C96A)',
                    color: added === product.id ? '#fff' : '#1B3A2D',
                    border: 'none', borderRadius: 8, padding: '10px 18px',
                    cursor: 'pointer', fontWeight: 700, fontSize: '0.78rem',
                    display: 'flex', alignItems: 'center', gap: 7,
                    transition: 'all 0.3s', fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>
                    {added === product.id ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                        Added
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
