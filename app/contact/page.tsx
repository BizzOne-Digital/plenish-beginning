"use client";
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import ChatButton from '@/components/ChatButton';
import Reveal from '@/components/Reveal';

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="We're Here to Help"
          title="Let's Start a Conversation"
          subtitle="Whether it's a product question, bulk order, or general feedback — our team responds within 24 hours."
        />

        {/* Business hours strip */}
        <section style={{ background: '#FAF7F0', padding: '60px 5% 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {hours.map((h, i) => (
              <Reveal key={i} delay={i * 100} className="hover-lift" style={{ background: '#fff', borderRadius: 14, padding: '22px 24px', border: '1px solid rgba(27,58,45,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ color: '#1B3A2D', fontWeight: 700, fontSize: '0.9rem', marginBottom: 6 }}>{h.day}</div>
                <div style={{ color: '#C9A84C', fontSize: '0.85rem', fontWeight: 600 }}>{h.time}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <CartSidebar />
      <ChatButton />
    </>
  );
}
