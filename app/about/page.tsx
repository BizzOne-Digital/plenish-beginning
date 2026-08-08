"use client";
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import About from '@/components/About';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import ChatButton from '@/components/ChatButton';
import Reveal from '@/components/Reveal';

const timeline = [
  { year: '2018', title: 'The Idea', text: 'A family recipe for salt-free Caribbean seasoning sparked the vision for Plenish Beginning.' },
  { year: '2020', title: 'First Blend', text: 'Our founding blend, Master Seasoning, was perfected in a home kitchen in Ontario.' },
  { year: '2022', title: 'Going Public', text: 'Plenish Beginning launched online, bringing salt-free, non-GMO seasonings to Canadian homes.' },
  { year: '2024', title: 'Growing Family', text: 'Restaurants and health coaches across Canada now trust our blends every day.' },
];

const values = [
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Integrity', text: 'What is on the label is what is in the bag — no hidden salt, fillers, or shortcuts.' },
  { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', title: 'Purity', text: 'Non-GMO ingredients, sourced with care, kept as close to nature as possible.' },
  { icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z', title: 'Wellness', text: 'Every blend is built to support gut health and everyday vitality, not just taste.' },
  { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', title: 'Heritage', text: 'Caribbean flavor traditions, passed down and reimagined for modern kitchens.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="About Plenish Beginning"
          title="Rooted in Flavor, Built on Health"
          subtitle="From a family kitchen to kitchens across Canada — discover the story, the mission, and the values behind every salt-free blend we make."
        />
        <About />

        {/* Timeline */}
        <section style={{ background: '#FAF7F0', padding: '100px 5%' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <Reveal style={{ textAlign: 'center', marginBottom: 60 }}>
              <span className="section-label">Our Journey</span>
              <div className="divider-gold" style={{ margin: '16px auto' }}/>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1B3A2D' }}>How We Got Here</h2>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 100} className="hover-lift" style={{ background: '#fff', borderRadius: 16, padding: '28px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(27,58,45,0.08)' }}>
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: '2.2rem', color: '#C9A84C', marginBottom: 8 }}>{item.year}</div>
                  <div style={{ color: '#1B3A2D', fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{item.title}</div>
                  <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ background: '#1B3A2D', padding: '100px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Reveal style={{ textAlign: 'center', marginBottom: 60 }}>
              <span className="section-label" style={{ color: '#C9A84C' }}>What We Stand For</span>
              <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #C9A84C, #E8C96A)', margin: '16px auto' }}/>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>Our Core Values</h2>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
              {values.map((v, i) => (
                <Reveal key={i} delay={i * 100} className="hover-lift" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 16, padding: '28px 24px' }}>
                  <div className="icon-badge" style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d={v.icon}/></svg>
                  </div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{v.title}</div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>{v.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
      <ChatButton />
    </>
  );
}
