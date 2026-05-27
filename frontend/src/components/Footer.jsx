export default function Footer() {
  return (
    <footer style={{
      background: '#111122', color: 'rgba(255,255,255,0.4)',
      padding: '28px 24px', textAlign: 'center',
      fontFamily: 'Plus Jakarta Sans', fontSize: '0.85rem',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <span>Built with</span>
        <span style={{ color: '#FF6B6B' }}>♥</span>
        <span>by Karlie — React + .NET</span>
        <span style={{ margin: '0 8px' }}>·</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
