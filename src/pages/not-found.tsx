export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px', background: '#f3f6f6', color: '#122630' }}>
      <main style={{ maxWidth: '560px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'monospace', letterSpacing: '.12em', textTransform: 'uppercase', color: '#1d6e94' }}>E&amp;S Motors</p>
        <h1 style={{ fontSize: 'clamp(42px, 8vw, 74px)', margin: '18px 0', lineHeight: .9, textTransform: 'uppercase' }}>Page not found</h1>
        <a href="/" style={{ color: '#1d6e94', fontWeight: 700 }}>Return home</a>
      </main>
    </div>
  );
}
