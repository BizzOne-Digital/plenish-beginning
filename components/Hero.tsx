'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="hero-bg" style={{
      minHeight: '100vh',
      backgroundImage: 'url(/hero.png)',
      backgroundSize: 'cover',
      backgroundPosition: '30% center',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke="#C9A84C" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)"/>
        </svg>
      </div>

      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,32,96,0.25) 0%, transparent 70%)', pointerEvents: 'none' }}/>

      <div className="hero-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 5% 60px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60, alignItems: 'center' }} className="hero-grid">

          {/* Left Content */}
          <div style={{ maxWidth: 640, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1s ease 0.2s' }}>
            <div className="hero-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ height: 1, width: 40, background: '#C9A84C' }}/>
              <span className="section-label">100% Natural • Caribbean Heritage</span>
            </div>

            <h1 className="hero-title" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(4rem, 8vw, 7.5rem)', color: '#fff', lineHeight: 0.92, letterSpacing: '0.02em', marginBottom: 28 }}>
              LIFE<br/>
              <span style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96A, #A07830)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>BEGINS</span><br/>
              NOW
            </h1>

            <p className="hero-lead" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 440, marginBottom: 16, fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
              Restoring health from the inside out through authentic, salt-free seasonings that never compromise on flavor.
            </p>
            <p className="hero-sub" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: 420, marginBottom: 40 }}>
              Non-GMO • MSG-Free • Gut Health • Caribbean Inspired
            </p>

            <div className="hero-btns" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
              <a href="#shop" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/>
                </svg>
                Shop Now
              </a>
              <a href="#about-us" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                Our Story
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="hero-badges" style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[
                { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'Salt-Free', sub: 'No added salt' },
                { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', label: 'Non-GMO', sub: 'Clean & natural' },
                { icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z', label: 'MSG-Free', sub: 'No fillers' },
              ].map(b => (
                <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(201,168,76,0.08)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d={b.icon}/></svg>
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>{b.label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem' }}>{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner - Discount */}
        <div className="hero-discount" style={{ marginTop: 60, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: 12, padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
            </svg>
            <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Limited Time Offers</span>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: '#C9A84C', lineHeight: 1 }}>5% OFF</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Orders over $50</div>
            </div>
            <div style={{ width: 1, background: 'rgba(201,168,76,0.3)' }}/>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: '#C9A84C', lineHeight: 1 }}>10% OFF</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Orders over $100</div>
            </div>
          </div>
          <a href="#shop" className="btn-gold" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>Claim Discount</a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(1deg); }
        }
        @media (max-width: 900px) {
          .hero-bg { align-items: flex-start !important; }
          .hero-inner { padding: 90px 5% 40px !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-discount { display: none !important; }
          .hero-bg { background-image: url(/mobile-hero.png) !important; background-position: center center !important; }
          .hero-title { font-size: clamp(2.4rem, 10vw, 3.2rem) !important; margin-bottom: 12px !important; }
          .hero-lead { font-size: 0.85rem !important; margin-bottom: 8px !important; }
          .hero-sub { font-size: 0.75rem !important; margin-bottom: 16px !important; }
          .hero-btns { gap: 10px !important; margin-bottom: 18px !important; }
          .hero-btns a { padding: 10px 18px !important; font-size: 0.78rem !important; }
          .hero-eyebrow { margin-bottom: 12px !important; }
          .hero-badges { gap: 18px !important; }
          .hero-badges > div > div:first-child { width: 28px !important; height: 28px !important; }
        }
      `}</style>
    </section>
  );
}
