import { useState } from 'react'

const tagColors = {
  coral:  { bg: '#FFE8E8', color: '#FF6B6B' },
  purple: { bg: '#EEEEFF', color: '#6C63FF' },
  yellow: { bg: '#FFF8E0', color: '#B8860B' },
  mint:   { bg: '#E0FBF4', color: '#048A69' },
}

export default function Projects({ data }) {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid #e5e7eb' }}>
      <div className="container">
        <div style={{ marginBottom: 60 }}>
          <div className="section-label">My Work</div>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 32,
        }}>
          {data.map(project => {
            const isHovered = hovered === project.id
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => project.link && window.open(project.link, '_blank')}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid #e5e7eb',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  cursor: project.link ? 'pointer' : 'default',
                  display: 'flex', flexDirection: 'column',
                  borderColor: isHovered ? 'var(--dark)' : '#e5e7eb',
                }}
              >
                {/* Image area */}
                <div style={{
                  height: 200,
                  background: '#f3f4f6',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '3rem',
                  borderBottom: '1px solid #e5e7eb',
                }}>
                  {project.emoji}
                </div>

                {/* Content */}
                <div style={{
                  padding: 24,
                  display: 'flex', flexDirection: 'column', flex: 1,
                }}>
                  <h3 style={{
                    fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
                    fontSize: '1.15rem', marginBottom: 12, color: 'var(--dark)'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '4px 10px', borderRadius: 4,
                        background: '#f3f4f6', color: 'var(--dark)',
                        fontSize: '0.75rem', fontWeight: 600,
                        fontFamily: 'Plus Jakarta Sans',
                      }}>{tag}</span>
                    ))}
                  </div>

                  {/* Link indicator */}
                  {project.link && (
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
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      View on GitHub
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
