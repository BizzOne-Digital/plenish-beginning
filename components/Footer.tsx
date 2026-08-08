'use client';
import Reveal from './Reveal';
export default function Footer() {
  return (
    <footer style={{ background: '#0D2318', padding: '60px 5% 30px', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <Reveal style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <img src="/logo.png" alt="Plenish Beginning" style={{ height: 44, width: 'auto', marginBottom: 10 }}/>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Restore Health. Restore Flavor.</div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: 300 }}>
              Authentic, salt-free seasonings rooted in Caribbean heritage. Non-GMO, MSG-free, gut-health focused.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 8 }}>
              {['plenishb.ca', 'ig: @Plenish_b'].map(s => (
                <span key={s} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', padding: '4px 10px', borderRadius: 20 }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Quick Links</div>
            {['Home', 'About Us', 'Shop', 'FAQ', 'Testimonials', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#C9A84C'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}
              >{link}</a>
            ))}
          </div>

          {/* Products */}
          <div>
            <div style={{ color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Products</div>
            {['All Purpose Blend', 'Hot & Spicy', 'Chili & Cayenne', 'Pimento Powder', 'Master Blend', 'Mikal Jerk'].map(p => (
              <a key={p} href="#shop" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem', marginBottom: 10 }}>{p}</a>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <div style={{ color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Contact Info</div>
            {[
              { icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8', text: '647-572-8435' },
              { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6', text: 'plenishb@gmail.com' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d={item.icon}/></svg>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>{item.text}</span>
              </div>
            ))}
            <div style={{ marginTop: 8 }}>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginBottom: 4 }}>Mon–Fri: 8am–8pm</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginBottom: 4 }}>Sat: 9am–5pm</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>Sun: Closed</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>© 2026 Plenish Beginning. All rights reserved.</p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>Salt-Free · Non-GMO · MSG-Free · Caribbean Heritage</p>
        </div>
      </Reveal>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
