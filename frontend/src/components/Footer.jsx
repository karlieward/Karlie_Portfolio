export default function Footer() {
  return (
    <footer style={{
      background: '#000000', color: 'rgba(255,255,255,0.6)',
      padding: '32px 24px', textAlign: 'center',
      fontFamily: 'Plus Jakarta Sans', fontSize: '0.85rem',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center',
    }}>
      <span>Built by Karlie</span>
      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
        Made with React • Vite • Vercel
      </span>
    </footer>
  )
}
