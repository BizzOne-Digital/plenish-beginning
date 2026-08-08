'use client';
import Reveal from './Reveal';
const testimonials = [
  { name: 'Marcia Thompson', role: 'Home Cook, Toronto', text: 'These seasonings changed my kitchen. The All Purpose blend is on every dish I make. My family thinks I went to culinary school!', rating: 5 },
  { name: 'Chef Andre Williams', role: 'Restaurant Owner, Mississauga', text: 'I use the Mikal Jerk and Master Blend in my restaurant. Customers keep asking what my secret is. Finally a brand that gets Caribbean flavor right.', rating: 5 },
  { name: 'Sandra Beckford', role: 'Health Coach, Brampton', text: 'Finding salt-free seasonings with this much flavor is nearly impossible. Plenish Beginning solved that problem. My gut health clients love it.', rating: 5 },
  { name: 'David Noel', role: 'Fitness Enthusiast, Scarborough', text: 'Clean ingredients, amazing taste. The Turmeric & Cayenne blend is part of my meal prep every week. Love that it supports gut health.', rating: 5 },
  { name: 'Patricia Henry', role: 'Retired Nurse, Hamilton', text: 'My doctor told me to cut sodium. I thought I would lose all my flavor. Plenish Beginning proved me wrong — Caribbean taste without the salt!', rating: 5 },
  { name: 'Michael Rae', role: 'Food Blogger, Ottawa', text: 'Reviewed dozens of spice brands. Plenish Beginning stands out for quality, authenticity, and mission. The Pimento Powder is outstanding.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#FAF7F0', padding: '100px 5%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">What Customers Say</span>
          <div className="divider-gold" style={{ margin: '16px auto' }}/>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1B3A2D' }}>
            Loved Across Canada
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 70} className="hover-lift" style={{ background: '#fff', borderRadius: 16, padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(27,58,45,0.06)', position: 'relative' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(201,168,76,0.15)" style={{ marginBottom: 16 }}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
              </svg>
              <p style={{ color: '#4A4A4A', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                {[...Array(t.rating)].map((_, s) => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#C9A84C"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #1B3A2D, #2D5A42)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C', fontFamily: 'Bebas Neue', fontSize: '1.1rem' }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ color: '#1B3A2D', fontWeight: 700, fontSize: '0.85rem' }}>{t.name}</div>
                  <div style={{ color: '#9CA3AF', fontSize: '0.72rem' }}>{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
