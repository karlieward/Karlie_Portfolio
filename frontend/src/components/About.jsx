export default function About({ data }) {
  return (
    <section id="about" className="section" style={{ background: 'var(--offwhite)', color: 'var(--dark)', position: 'relative', overflow: 'hidden', borderTop: '1px solid #e5e7eb' }}>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64, alignItems: 'center'
        }}>
          {/* Left: Text */}
          <div>
            <div className="section-label">About</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Where design meets development
            </h2>
            <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 36 }}>
              {data.bio}
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {data.highlights.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                    background: '#e5e7eb',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: '#1a1a1a',
                    marginTop: 2,
                  }}>✓</div>
                  <span style={{ color: 'var(--dark)', fontSize: '0.95rem', fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Avatar card */}
            <div style={{
              borderRadius: 'var(--radius-lg)',
              background: 'var(--white)',
              border: '1px solid #e5e7eb',
              padding: 40,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 16, textAlign: 'center'
            }}>
              <div style={{
                width: 120, height: 120, borderRadius: '50%',
                background: '#e5e7eb',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.5rem', fontWeight: 800, color: 'var(--dark)',
                fontFamily: 'Plus Jakarta Sans',
              }}>K</div>
              <div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '1.3rem', color: 'var(--dark)' }}>Karlie</div>
                <div style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: 4 }}>
                  Information Systems Graduate
                </div>
              </div>
              <div style={{
                display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center'
              }}>
                {['React', '.NET', 'Figma', 'SQL'].map(t => (
                  <span key={t} style={{
                    padding: '6px 14px', borderRadius: 4,
                    background: '#e5e7eb', border: 'none',
                    fontSize: '0.8rem', color: 'var(--dark)',
                    fontFamily: 'Plus Jakarta Sans', fontWeight: 600,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
