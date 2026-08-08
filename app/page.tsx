"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Shop from '@/components/Shop';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import ChatButton from '@/components/ChatButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Shop />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CartSidebar />
      <ChatButton />
    </>
  );
}
