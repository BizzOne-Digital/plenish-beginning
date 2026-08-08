'use client';
import Reveal from './Reveal';
export default function About() {
  const stats = [
    { value: '100%', label: 'Natural Ingredients' },
    { value: 'Salt', label: 'Free Blends' },
    { value: 'Non', label: 'GMO Certified' },
    { value: 'MSG', label: 'Free Always' },
  ];

  return (
    <section id="about-us" style={{ background: '#1B3A2D', padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -100, top: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents: 'none' }}/>

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
          
          {/* Image side */}
          <Reveal style={{ position: 'relative' }}>
            <div className="hover-lift" style={{ borderRadius: 20, overflow: 'hidden', height: 500 }}>
              <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&q=80" alt="Fresh herbs" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}/>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(27,58,45,0.4) 0%, transparent 60%)' }}/>
            </div>
            {/* Floating card */}
            <div className="animate-float" style={{ position: 'absolute', bottom: 30, right: -24, background: '#FAF7F0', borderRadius: 14, padding: '20px 24px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', maxWidth: 200 }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '2.5rem', color: '#1B3A2D', lineHeight: 1 }}>8+</div>
              <div style={{ color: '#2D5A42', fontSize: '0.8rem', fontWeight: 600 }}>Premium Blends Available</div>
              <div style={{ marginTop: 10, display: 'flex', gap: 4 }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#C9A84C"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                ))}
              </div>
            </div>
            {/* Gold accent */}
            <div className="animate-spin-slow" style={{ position: 'absolute', top: -12, left: -12, width: 80, height: 80, border: '3px solid rgba(201,168,76,0.4)', borderRadius: 16 }}/>
          </Reveal>

          {/* Content side */}
          <Reveal delay={150}>
            <span className="section-label" style={{ color: '#C9A84C' }}>Our Story</span>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #C9A84C, #E8C96A)', margin: '16px 0' }}/>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: 24, lineHeight: 1.2 }}>
              Good Health Starts<br/>
              <span style={{ color: '#C9A84C' }}>at the Plate</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 20 }}>
              At Plenish Beginning, we believe that what you season your food with matters as much as the food itself. Born from Caribbean tradition and a passion for clean living, we create herb blends that restore health without sacrificing flavor.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: 36 }}>
              Our mission is to empower every kitchen — from home cooks to restaurant owners — with non-GMO, MSG-free blends that support gut health and inspire wholesome, vibrant living.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 36 }}>
              {[
                { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', text: 'Salt-Free formulas that let real flavors shine' },
                { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', text: 'Non-GMO ingredients sourced with care' },
                { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', text: 'Caribbean heritage in every blend' },
                { icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z', text: 'MSG-Free, gut-friendly ingredients' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div className="icon-badge" style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d={item.icon}/></svg>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>

            <a href="#shop" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>Shop All Products</a>
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
