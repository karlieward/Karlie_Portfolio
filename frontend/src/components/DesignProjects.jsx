import { useState } from 'react'
import wf0 from '../assets/images/WF-00.png'
import hw1 from '../assets/images/HW-01.png'

const previewMap = {
  'WF-00.png': wf0,
  'HW-01.png': hw1,
}

export default function DesignProjects({ data, onProjectClick, onBack }) {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      {/* Back button */}
      <section className="section" style={{ borderTop: '1px solid #e5e7eb', background: '#fafafa', paddingBottom: 0 }}>
        <div className="container">
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px 8px',
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

      {/* Design Projects Section */}
      <section id="projects" className="section" style={{ borderTop: '1px solid #e5e7eb', background: '#fafafa' }}>
        <div className="container">
          <div style={{ marginBottom: 60 }}>
            <div className="section-label">Design Work</div>
            <h2 className="section-title">Design Projects</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: 32,
          }}>
            {data && data.map(project => {
              const isHovered = hovered === `design-${project.id}`
              return (
                <div
                  key={`design-${project.id}`}
                  onMouseEnter={() => setHovered(`design-${project.id}`)}
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
                    overflow: 'hidden',
                  }}>
                    {project.preview ? (
                      <img src={previewMap[project.preview.split('/').pop()] || project.preview} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 16 }} />
                    ) : (
                      project.emoji
                    )}
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
