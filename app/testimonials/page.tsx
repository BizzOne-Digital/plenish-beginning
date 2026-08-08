"use client";
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import ChatButton from '@/components/ChatButton';
import Reveal from '@/components/Reveal';

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '10+', label: 'Cities Across Canada' },
  { value: '100%', label: 'Salt-Free Recipes' },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="Customer Stories"
          title="Loved by Kitchens Across Canada"
          subtitle="From home cooks to restaurant owners, see why families and chefs trust Plenish Beginning for bold, salt-free flavor."
        />

        {/* Stats */}
        <section style={{ background: '#1B3A2D', padding: '60px 5%' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, textAlign: 'center' }}>
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 90}>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '2.4rem', color: '#C9A84C', lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 6 }}>{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <Testimonials />

        {/* CTA */}
        <section style={{ background: '#FAF7F0', padding: '0 5% 100px' }}>
          <Reveal style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1B3A2D', marginBottom: 16 }}>Ready to Taste the Difference?</h2>
            <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 28px' }}>
              Join hundreds of satisfied customers and bring authentic, salt-free flavor to your table.
            </p>
            <a href="/shop" className="btn-gold" style={{ textDecoration: 'none', display: 'inline-block' }}>Shop Now</a>
          </Reveal>
        </section>
      </main>
      <Footer />
      <CartSidebar />
      <ChatButton />
    </>
  );
}
