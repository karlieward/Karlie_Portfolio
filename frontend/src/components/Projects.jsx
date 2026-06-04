import { useState } from 'react'

export default function Projects({ data, onProjectClick }) {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      {/* Back button */}
      <section className="section" style={{ borderTop: '1px solid #e5e7eb', background: '#fafafa', paddingBottom: 0 }}>
        <div className="container">
          <button
            onClick={() => window.history.back()}
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
        </div>
      </section>

      {/* Quick GitHub Links Section */}
      <section id="github-links" className="section" style={{ borderTop: '1px solid #e5e7eb', background: '#fafafa' }}>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <div className="section-label">Quick Links</div>
            <h2 className="section-title">GitHub Projects</h2>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'flex-start',
          }}>
            {data.map(project => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  padding: 20,
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid #e5e7eb',
                  background: '#fff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  transform: hovered === project.id ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hovered === project.id ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  borderColor: hovered === project.id ? 'var(--dark)' : '#e5e7eb',
                  cursor: 'pointer',
                  minWidth: 140,
                }}
              >
                <div style={{ fontSize: '2.5rem' }}>{project.emoji}</div>
                <span style={{ fontWeight: 600, color: 'var(--dark)', textAlign: 'center', fontSize: '0.9rem' }}>
                  {project.title}
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#6b7280' }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section" style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ marginBottom: 60 }}>
            <div className="section-label">Featured Work</div>
            <h2 className="section-title">Project Details</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: 32,
          }}>
            {data.map(project => {
              const isHovered = hovered === `featured-${project.id}`
              return (
                <div
                  key={`featured-${project.id}`}
                  onMouseEnter={() => setHovered(`featured-${project.id}`)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => onProjectClick(project)}
                  style={{
                    background: '#fff',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid #e5e7eb',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    borderColor: isHovered ? 'var(--dark)' : '#e5e7eb',
                  }}
                >
                  {/* Image area */}
                  <div style={{
                    height: 200,
                    background: '#f3f4f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    borderBottom: '1px solid #e5e7eb',
                  }}>
                    {project.emoji}
                  </div>

                  {/* Content */}
                  <div style={{
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}>
                    <h3 style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      marginBottom: 12,
                      color: 'var(--dark)',
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      marginBottom: 16,
                      flex: 1,
                    }}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{
                          padding: '4px 10px',
                          borderRadius: 4,
                          background: '#f3f4f6',
                          color: 'var(--dark)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          fontFamily: 'Plus Jakarta Sans',
                        }}>{tag}</span>
                      ))}
                    </div>

                    {/* View Details indicator */}
                    <div style={{
                      marginTop: 16,
                      paddingTop: 12,
                      borderTop: '1px solid #e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      color: '#6b7280',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease',
                      opacity: isHovered ? 1 : 0.7,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      View Details
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
