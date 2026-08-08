'use client';
import { useState } from 'react';
import Reveal from './Reveal';

const faqs = [
  { q: 'Are your products really salt-free?', a: 'Yes — every Plenish Beginning blend is completely salt-free. We use natural herbs and spices to create bold flavor without any added sodium.' },
  { q: 'Are the blends Non-GMO and MSG-free?', a: 'Absolutely. We are committed to clean ingredients only. All our products are Non-GMO and contain zero MSG, fillers, or artificial additives.' },
  { q: 'Do you ship across Canada?', a: 'Yes, we ship Canada-wide. Orders are processed Monday to Friday (8am–8pm) and Saturday (9am–5pm). We are closed Sundays.' },
  { q: 'What discounts do you offer?', a: 'We offer 5% off orders over $50 and 10% off orders over $100. Discounts are automatically applied at checkout.' },
  { q: 'Can restaurant owners buy in bulk?', a: 'Yes! We work with restaurant owners and food businesses. Contact us directly at plenishb@gmail.com or WhatsApp 647-572-8435 for bulk pricing.' },
  { q: 'Are your products good for gut health?', a: 'Our blends are formulated with gut health in mind — clean herbs, no artificial additives, and naturally anti-inflammatory spices like turmeric and cayenne.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" style={{ background: '#1B3A2D', padding: '100px 5%' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">Got Questions?</span>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #C9A84C, #E8C96A)', margin: '16px auto' }}/>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>Frequently Asked</h2>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 12, overflow: 'hidden', transition: 'all 0.3s' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', padding: '20px 24px', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: 16 }}>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', textAlign: 'left', fontFamily: 'Playfair Display, serif' }}>{faq.q}</span>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: open === i ? '#C9A84C' : 'rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open === i ? '#1B3A2D' : '#C9A84C'} strokeWidth="3" style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="animate-fadeInUp" style={{ padding: '0 24px 20px' }}>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
