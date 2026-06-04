export default function DesignProjects({ onBack }) {
  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid #e5e7eb', background: '#fafafa' }}>
      <div className="container">
        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            padding: '8px 0',
            color: '#6b7280',
            cursor: 'pointer',
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: '0.95rem',
            marginBottom: 40,
            transition: 'color 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--dark)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6b7280'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Projects
        </button>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: 48, textAlign: 'center' }}>
            <div className="section-label">Design Portfolio</div>
            <h2 className="section-title">Coming Soon</h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', marginTop: 12 }}>
              Your design projects will be showcased here. Check back soon! 🎨
            </p>
          </div>

          {/* Empty State */}
          <div style={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: 'var(--radius-lg)',
            padding: 60,
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ fontSize: '4rem', marginBottom: 20 }}>🎨</div>
            <h3 style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 600,
              fontSize: '1.2rem',
              color: 'var(--dark)',
              marginBottom: 8,
            }}>
              Design projects loading...
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
              I'm compiling my best design work. In the meantime, check out my technical projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
