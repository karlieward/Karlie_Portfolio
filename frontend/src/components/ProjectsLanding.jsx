export default function ProjectsLanding({ onSelectCategory }) {
  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid #e5e7eb' }}>
      <div className="container">
        <div style={{ marginBottom: 60 }}>
          <div className="section-label">My Work</div>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: 40,
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {/* Technical Solutions Card */}
          <div
            onClick={() => onSelectCategory('technical')}
            style={{
              background: '#fff',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              padding: 40,
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              e.currentTarget.style.borderColor = 'var(--dark)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
              e.currentTarget.style.borderColor = '#e5e7eb'
            }}
          >
            <div style={{ fontSize: '3.5rem', marginBottom: 24 }}>💻</div>
            <h3 style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '1.5rem',
              marginBottom: 16,
              color: 'var(--dark)',
            }}>
              Technical Solutions
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              flex: 1,
              marginBottom: 16,
            }}>
              Full-stack applications, web projects, and coding work showcasing my technical skills.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              marginTop: 16,
              color: '#6b7280',
              fontSize: '0.9rem',
            }}>
              <span>Explore</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

          {/* Design Portfolio Card */}
          <div
            onClick={() => onSelectCategory('design')}
            style={{
              background: '#fff',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              padding: 40,
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              e.currentTarget.style.borderColor = 'var(--dark)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
              e.currentTarget.style.borderColor = '#e5e7eb'
            }}
          >
            <div style={{ fontSize: '3.5rem', marginBottom: 24 }}>🎨</div>
            <h3 style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: '1.5rem',
              marginBottom: 16,
              color: 'var(--dark)',
            }}>
              Design Portfolio
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              flex: 1,
              marginBottom: 16,
            }}>
              UI/UX design, branding, and creative work showcasing my design expertise.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              marginTop: 16,
              color: '#6b7280',
              fontSize: '0.9rem',
            }}>
              <span>Explore</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
