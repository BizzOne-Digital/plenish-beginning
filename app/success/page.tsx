export default function SuccessPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#1B3A2D', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(201,168,76,0.2)', border: '2px solid #C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h1 style={{ fontFamily: 'Bebas Neue', fontSize: '3rem', color: '#C9A84C', letterSpacing: '0.05em', marginBottom: 16 }}>Order Confirmed!</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 32 }}>
          Thank you for your order from Plenish Beginning. Your authentic, salt-free seasonings are on their way. You'll receive a confirmation email shortly.
        </p>
        <a href="/" style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96A)', color: '#1B3A2D', fontWeight: 700, padding: '14px 32px', borderRadius: 4, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
