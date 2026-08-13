'use client';
import { useCartStore } from '@/lib/cartStore';
import { useState } from 'react';

export default function CartSidebar() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, total, discount, finalTotal, itemCount, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (e) {
      alert('Checkout error. Please try again.');
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={toggleCart}/>
      <div className="cart-sidebar">
        {/* Header */}
        <div style={{ padding: '28px 28px 20px', borderBottom: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '1.6rem', color: '#fff', letterSpacing: '0.05em' }}>Your Cart</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{itemCount()} item{itemCount() !== 1 ? 's' : ''}</p>
          </div>
          <button onClick={toggleCart} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" style={{ margin: '0 auto 16px', display: 'block' }}>
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Your cart is empty</p>
              <button onClick={toggleCart} className="btn-gold" style={{ marginTop: 20, fontSize: '0.8rem', padding: '10px 24px' }}>Start Shopping</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 64, height: 64, borderRadius: 10, overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(201,168,76,0.2)' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, marginBottom: 4, fontFamily: 'Playfair Display, serif' }}>{item.name}</div>
                  <div style={{ color: '#C9A84C', fontSize: '0.78rem', fontWeight: 700, marginBottom: 10 }}>${(item.price * item.quantity).toFixed(2)}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: 8, overflow: 'hidden' }}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px 10px', fontSize: '1rem' }}>−</button>
                      <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, minWidth: 24, textAlign: 'center' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px 10px', fontSize: '1rem' }}>+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.target as HTMLElement).style.color = '#ef4444'}
                      onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.35)'}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 28px', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Subtotal</span>
                <span style={{ color: '#fff', fontSize: '0.85rem' }}>${total().toFixed(2)}</span>
              </div>
              {discount() > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: '#C9A84C', fontSize: '0.85rem' }}>Discount {total() >= 100 ? '(10%)' : '(5%)'}</span>
                  <span style={{ color: '#C9A84C', fontSize: '0.85rem' }}>-${discount().toFixed(2)}</span>
                </div>
              )}
              {total() < 50 && (
                <div style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8, padding: '10px 14px', marginBottom: 12 }}>
                  <p style={{ color: '#C9A84C', fontSize: '0.75rem' }}>
                    Add ${(50 - total()).toFixed(2)} more for <strong>5% off</strong>
                  </p>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ color: '#fff', fontWeight: 700 }}>Total</span>
                <span style={{ color: '#C9A84C', fontWeight: 800, fontFamily: 'Bebas Neue', fontSize: '1.3rem' }}>${finalTotal().toFixed(2)}</span>
              </div>
            </div>

            <button onClick={handleCheckout} disabled={loading} className="btn-gold" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, opacity: loading ? 0.7 : 1 }}>
              {loading ? (
                <>Processing...</>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                  Checkout Securely
                </>
              )}
            </button>
            <button onClick={clearCart} style={{ width: '100%', marginTop: 10, background: 'none', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, color: 'rgba(255,255,255,0.5)', padding: '10px', cursor: 'pointer', fontSize: '0.78rem', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
