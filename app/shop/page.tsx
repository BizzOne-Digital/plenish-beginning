"use client";
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import Shop from '@/components/Shop';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import ChatButton from '@/components/ChatButton';
import Reveal from '@/components/Reveal';

const perks = [
  { icon: 'M20 12V22H4V12', title: 'Canada-Wide Shipping', text: 'Orders processed Mon–Fri (8am–8pm) and Sat (9am–5pm), delivered straight to your door.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Quality Guaranteed', text: 'Every blend is non-GMO, salt-free, and MSG-free — no compromises, ever.' },
  { icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z', title: 'Automatic Discounts', text: '5% off orders over $50, 10% off orders over $100 — applied automatically at checkout.' },
];

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="Shop the Collection"
          title="Flavor Without Compromise"
          subtitle="Browse our full range of salt-free, non-GMO, MSG-free herb blends and seasonings — crafted for gut health and bold Caribbean flavor."
        />
        <Shop />

        {/* Perks */}
        <section style={{ background: '#1B3A2D', padding: '80px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
              {perks.map((p, i) => (
                <Reveal key={i} delay={i * 100} className="hover-lift" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 16, padding: '32px 28px', textAlign: 'center' }}>
                  <div className="icon-badge" style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d={p.icon}/></svg>
                  </div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{p.title}</div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Wholesale CTA */}
        <section style={{ background: '#FAF7F0', padding: '80px 5%' }}>
          <Reveal style={{ maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 20, padding: '48px 40px', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', border: '1px solid rgba(27,58,45,0.08)' }}>
            <span className="section-label">For Restaurants & Retailers</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1B3A2D', margin: '16px 0 12px' }}>Interested in Bulk or Wholesale?</h2>
            <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 28px' }}>
              We partner with restaurant owners and food businesses across Canada. Reach out for bulk pricing and wholesale accounts.
            </p>
            <a href="/contact" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>Contact Us</a>
          </Reveal>
        </section>
      </main>
      <Footer />
      <CartSidebar />
      <ChatButton />
    </>
  );
}
