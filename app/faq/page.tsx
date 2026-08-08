"use client";
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import ChatButton from '@/components/ChatButton';
import Reveal from '@/components/Reveal';

const categories = [
  { title: 'Orders & Shipping', text: 'Questions about order processing times, delivery, and Canada-wide shipping.' },
  { title: 'Ingredients & Quality', text: 'Details on our salt-free, non-GMO, MSG-free formulation standards.' },
  { title: 'Wholesale & Bulk', text: 'Information for restaurant owners and retailers looking to buy in bulk.' },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="Frequently Asked Questions"
          title="Answers, Made Simple"
          subtitle="Everything you need to know about our products, shipping, and ingredients — before you place your order."
        />

        {/* Categories */}
        <section style={{ background: '#FAF7F0', padding: '100px 5% 60px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-label">Browse by Topic</span>
              <div className="divider-gold" style={{ margin: '16px auto' }}/>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1B3A2D' }}>Find Your Answer Faster</h2>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {categories.map((c, i) => (
                <Reveal key={i} delay={i * 100} className="hover-lift" style={{ background: '#fff', borderRadius: 14, padding: '24px 22px', border: '1px solid rgba(27,58,45,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <div style={{ color: '#1B3A2D', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>{c.title}</div>
                  <p style={{ color: '#6B7280', fontSize: '0.82rem', lineHeight: 1.6 }}>{c.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        {/* Still have questions CTA */}
        <section style={{ background: '#FAF7F0', padding: '80px 5% 100px' }}>
          <Reveal style={{ maxWidth: 900, margin: '0 auto', background: '#1B3A2D', borderRadius: 20, padding: '48px 40px', textAlign: 'center' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', marginBottom: 12 }}>Still Have Questions?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 28px' }}>
              Our team is happy to help. Reach out by phone, email, or WhatsApp and we'll get back to you within 24 hours.
            </p>
            <a href="/contact" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>Get in Touch</a>
          </Reveal>
        </section>
      </main>
      <Footer />
      <CartSidebar />
      <ChatButton />
    </>
  );
}
