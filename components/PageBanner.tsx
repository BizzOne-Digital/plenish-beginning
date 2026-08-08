'use client';
import { useEffect, useState } from 'react';

export default function PageBanner({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0D2318 0%, #1B3A2D 50%, #2D5A42 100%)',
      padding: '160px 5% 80px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-banner" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke="#C9A84C" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-banner)"/>
        </svg>
      </div>
      <div className="animate-float" style={{ position: 'absolute', top: '20%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)', pointerEvents: 'none' }}/>
      <div style={{
        maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <span className="section-label" style={{ color: '#C9A84C' }}>{eyebrow}</span>
        <h1 className="font-display" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fff', margin: '16px 0 20px', letterSpacing: '0.02em' }}>{title}</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7 }}>{subtitle}</p>
      </div>
    </section>
  );
}
