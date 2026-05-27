export default function About({ data }) {
  return (
    <section id="about" className="section" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative shape */}
      <div style={{
        position: 'absolute', top: -60, right: -60,
        width: 300, height: 300,
        borderRadius: '50%',
        background: 'rgba(108,99,255,0.08)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -40,
        width: 240, height: 240,
        borderRadius: '50%',
        background: 'rgba(255,107,107,0.06)',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64, alignItems: 'center'
        }}>
          {/* Left: Text */}
          <div>
            <div className="section-label" style={{ color: '#FF6B6B' }}>About Me</div>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: 24 }}>
              Where tech meets<br />
              <span style={{
                background: 'linear-gradient(90deg, #FF6B6B, #6C63FF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>creativity.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 36 }}>
              {data.bio}
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {data.highlights.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    background: ['#FF6B6B','#6C63FF','#FFD166','#06D6A0'][i % 4],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem',
                  }}>✓</div>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Fun card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Big avatar placeholder */}
            <div style={{
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, rgba(255,107,107,0.25), rgba(108,99,255,0.25))',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: 40,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 16, textAlign: 'center'
            }}>
              <div style={{
                width: 100, height: 100, borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF6B6B, #6C63FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.5rem', fontWeight: 800, color: '#fff',
                fontFamily: 'Plus Jakarta Sans',
              }}>K</div>
              <div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.4rem', color: '#fff' }}>Karlie</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: 4 }}>
                  Information Systems Graduate
                </div>
              </div>
              <div style={{
                display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center'
              }}>
                {['React', '.NET', 'Figma', 'SQL'].map(t => (
                  <span key={t} style={{
                    padding: '4px 12px', borderRadius: 100,
                    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                    fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)',
                    fontFamily: 'Plus Jakarta Sans', fontWeight: 600,
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Fun fact cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { emoji: '🎨', label: 'Design-first thinker' },
                { emoji: '💻', label: 'Full-stack builder' },
                { emoji: '📐', label: 'Systems designer' },
                { emoji: '✨', label: 'Detail-obsessed' },
              ].map(item => (
                <div key={item.label} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px 16px',
                  display: 'flex', flexDirection: 'column', gap: 8
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{item.emoji}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', fontFamily: 'Plus Jakarta Sans' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
