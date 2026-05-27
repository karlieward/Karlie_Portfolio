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
    <section id="projects" className="section">
      <div className="container">
        <div style={{ marginBottom: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="section-label">My Work</div>
            <h2 className="section-title">Projects I'm proud of.</h2>
            <p className="section-subtitle">
              A mix of technical builds and creative work — each one a chance to solve something real.
            </p>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer"
             className="btn btn-outline" style={{ flexShrink: 0 }}>
            View GitHub →
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {data.map(project => {
            const tc = tagColors[project.tagColor] || tagColors.coral
            const isHovered = hovered === project.id
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-lg)',
                  padding: 32,
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                  cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', gap: 20,
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Colored accent top bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: tc.color,
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.3s',
                }} />

                {/* Emoji icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 'var(--radius-md)',
                  background: project.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem',
                  transition: 'transform 0.3s',
                  transform: isHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
                }}>
                  {project.emoji}
                </div>

                <div>
                  <h3 style={{
                    fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
                    fontSize: '1.15rem', marginBottom: 10, color: 'var(--dark)'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '4px 12px', borderRadius: 100,
                      background: tc.bg, color: tc.color,
                      fontSize: '0.78rem', fontWeight: 700,
                      fontFamily: 'Plus Jakarta Sans',
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div style={{
                  position: 'absolute', bottom: 24, right: 24,
                  width: 36, height: 36, borderRadius: '50%',
                  background: tc.bg, color: tc.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: 700,
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.25s',
                }}>→</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
