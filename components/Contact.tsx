'use client';
import { useState } from 'react';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const info = [
    { icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h-1 1v2.92z', text: '647-572-8435', label: 'Phone' },
    { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6', text: 'plenishb@gmail.com', label: 'Email' },
    { icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', text: 'Mon–Fri: 8am–8pm\nSat: 9am–5pm\nSun: Closed', label: 'Hours' },
  ];

  return (
    <section id="contact" style={{ background: '#FAF7F0', padding: '100px 5%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">Get in Touch</span>
          <div className="divider-gold" style={{ margin: '16px auto' }}/>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1B3A2D' }}>Contact Us</h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60 }} className="contact-grid">
          <Reveal>
            <div style={{ background: '#1B3A2D', borderRadius: 20, padding: '40px', height: '100%' }}>
              <h3 className="font-display" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: 8 }}>Let's Talk</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 36 }}>Wholesale inquiries, bulk orders, or product questions — we're here for you.</p>
              {info.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 28, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d={item.icon}/></svg>
                  </div>
                  <div>
                    <div style={{ color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ color: '#fff', fontSize: '0.88rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.text}</div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
                {[
                  { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z' },
                  { label: 'TikTok', path: 'M9 12a4 4 0 100 8 4 4 0 000-8zM15 2s1 2 3 3v3s-2 0-3-2v8a7 7 0 11-7-7' },
                  { label: 'WhatsApp', path: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' },
                ].map(s => (
                  <div key={s.label} title={s.label} className="icon-badge" style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.2)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d={s.path}/></svg>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={150} style={{ background: '#fff', borderRadius: 20, padding: '40px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(27,58,45,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A2D" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="font-display" style={{ color: '#1B3A2D', fontSize: '1.5rem', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: '#6B7280', fontSize: '0.88rem' }}>We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="btn-gold" style={{ marginTop: 20 }}>Send Another</button>
              </div>
            ) : (
              <>
                <h3 className="font-display" style={{ color: '#1B3A2D', fontSize: '1.5rem', marginBottom: 28 }}>Send a Message</h3>
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                ].map(field => (
                  <div key={field.name} style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', color: '#1B3A2D', fontSize: '0.8rem', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{field.label}</label>
                    <input name={field.name} type={field.type} value={(form as any)[field.name]} onChange={handle} placeholder={field.placeholder}
                      style={{ width: '100%', border: '1.5px solid rgba(27,58,45,0.15)', borderRadius: 10, padding: '12px 16px', fontSize: '0.9rem', outline: 'none', fontFamily: 'Inter, sans-serif', transition: 'border-color 0.2s', color: '#1A1A1A', background: '#FAFAFA' }}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = '#C9A84C'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(27,58,45,0.15)'}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: 'block', color: '#1B3A2D', fontSize: '0.8rem', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us how we can help..." rows={5}
                    style={{ width: '100%', border: '1.5px solid rgba(27,58,45,0.15)', borderRadius: 10, padding: '12px 16px', fontSize: '0.9rem', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'vertical', color: '#1A1A1A', background: '#FAFAFA' }}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = '#C9A84C'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(27,58,45,0.15)'}
                  />
                </div>
                <button onClick={submit} className="btn-gold" style={{ width: '100%' }}>Send Message</button>
              </>
            )}
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
