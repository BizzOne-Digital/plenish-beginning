'use client';
import { useState } from 'react';

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div style={{ position: 'fixed', bottom: 90, right: 28, zIndex: 998, background: '#fff', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.2)', width: 320, overflow: 'hidden' }}>
          <div style={{ background: 'linear-gradient(135deg, #1B3A2D, #2D5A42)', padding: '20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(201,168,76,0.2)', border: '2px solid #C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>Plenish Beginning</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem' }}>Typically replies within hours</div>
            </div>
            <button onClick={() => setOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div style={{ padding: 20 }}>
            <div style={{ background: '#F3F4F6', borderRadius: 12, padding: '12px 16px', marginBottom: 16 }}>
              <p style={{ fontSize: '0.85rem', color: '#1A1A1A', lineHeight: 1.6 }}>
                👋 Hi! Welcome to Plenish Beginning. Looking for salt-free, authentic Caribbean seasonings? We'd love to help!
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Shop Products', 'Wholesale Inquiry', 'Track Order'].map(opt => (
                <a key={opt} href="https://wa.me/16475728435" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(27,58,45,0.08)', color: '#1B3A2D', fontSize: '0.75rem', fontWeight: 600, padding: '6px 12px', borderRadius: 20, textDecoration: 'none', border: '1px solid rgba(27,58,45,0.15)', display: 'inline-block' }}>{opt}</a>
              ))}
            </div>
            <a href="https://wa.me/16475728435" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16, textDecoration: 'none' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
      <button className="chat-btn" onClick={() => setOpen(!open)}>
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        )}
        Chat with us
      </button>
    </>
  );
}
