export default function Skills({ data }) {
  return (
    <section id="skills" className="section" style={{
      background: 'linear-gradient(160deg, #f8f7ff 0%, #fff8f8 100%)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">What I bring to the table.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technical chops and creative instincts — I believe the best digital experiences need both.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32, marginBottom: 48
        }}>
          {/* Technical Skills */}
          <SkillCard
            title="Technical"
            emoji="💻"
            accentColor="#6C63FF"
            skills={data.technical}
            barColor="linear-gradient(90deg, #6C63FF, #9B8EFF)"
          />

          {/* Creative Skills */}
          <SkillCard
            title="Creative"
            emoji="🎨"
            accentColor="#FF6B6B"
            skills={data.creative}
            barColor="linear-gradient(90deg, #FF6B6B, #FF9B9B)"
          />
        </div>

        {/* Tools */}
        <div style={{
          background: '#fff',
          borderRadius: 'var(--radius-lg)',
          padding: 40,
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ fontSize: '1.5rem' }}>🛠️</span>
            <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.2rem' }}>
              Tools & Technologies
            </h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {data.tools.map((tool, i) => {
              const colors = [
                { bg: '#FFE8E8', color: '#FF6B6B' },
                { bg: '#EEEEFF', color: '#6C63FF' },
                { bg: '#FFF8E0', color: '#B8860B' },
                { bg: '#E0FBF4', color: '#048A69' },
              ]
              const c = colors[i % 4]
              return (
                <span key={tool} style={{
                  padding: '8px 18px', borderRadius: 100,
                  background: c.bg, color: c.color,
                  fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
                  fontSize: '0.88rem',
                  transition: 'transform 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
                >{tool}</span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, emoji, accentColor, skills, barColor }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 36,
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: accentColor + '20',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.3rem',
        }}>{emoji}</div>
        <h3 style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.2rem'
        }}>{title} Skills</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {skills.map(skill => (
          <div key={skill.name}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: 8
            }}>
              <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: '0.9rem' }}>
                {skill.name}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--gray)', fontWeight: 600 }}>
                {skill.level}%
              </span>
            </div>
            <div style={{
              height: 8, borderRadius: 100,
              background: 'var(--light)', overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', borderRadius: 100,
                background: barColor,
                width: `${skill.level}%`,
                transition: 'width 1s ease',
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
