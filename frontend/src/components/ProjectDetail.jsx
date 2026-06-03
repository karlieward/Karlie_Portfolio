export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <section id="project-detail" className="section" style={{ borderTop: '1px solid #e5e7eb', background: '#fafafa' }}>
      <div className="container">
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#6b7280',
            marginBottom: 32,
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--dark)'}
          onMouseLeave={(e) => e.target.style.color = '#6b7280'}
        >
          ← Back to Projects
        </button>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Project Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: '4rem', marginBottom: 24 }}>{project.emoji}</div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: 'var(--dark)' }}>
              {project.title}
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: 1.8, marginBottom: 24 }}>
              {project.longDescription || project.description}
            </p>

            {/* Tech Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {project.tags.map(tag => (
                <span key={tag} style={{
                  padding: '6px 12px',
                  borderRadius: 6,
                  background: '#f3f4f6',
                  color: 'var(--dark)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  fontFamily: 'Plus Jakarta Sans',
                }}>{tag}</span>
              ))}
            </div>

            {/* GitHub Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 16px',
                  borderRadius: 6,
                  background: 'var(--dark)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                View on GitHub
              </a>
            )}
          </div>

          {/* Images Gallery */}
          {project.images && project.images.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, color: 'var(--dark)' }}>
                Gallery
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 16,
              }}>
                {project.images.map((image, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      border: '1px solid #e5e7eb',
                      background: '#f3f4f6',
                      aspectRatio: '16/9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                    }}
                  >
                    {image.src.startsWith('http') ? (
                      <img src={image.src} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ textAlign: 'center', padding: 24 }}>
                        <div style={{ fontSize: '3rem', marginBottom: 8 }}>📸</div>
                        <p>{image.alt}</p>
                        <p style={{ fontSize: '0.85rem', marginTop: 8 }}>(Screenshot to be added)</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
