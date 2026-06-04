export default function Skills({ data }) {
  return (
    <section id="skills" className="section" style={{
      background: '#fafafa',
      borderTop: '1px solid #e5e7eb',
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
          gap: 32,
        }}>
          {/* Technical Skills */}
          <SkillCard
            title="Technical"
            emoji="💻"
            accentColor="#6C63FF"
            skills={data.technical}
          />

          {/* Creative Skills */}
          <SkillCard
            title="Creative"
            emoji="🎨"
            accentColor="#FF6B6B"
            skills={data.creative}
          />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, emoji, accentColor, skills }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 36,
      border: '1px solid #e5e7eb',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: accentColor + '20',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.3rem',
        }}>{emoji}</div>
        <h3 style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '1.1rem', color: 'var(--dark)'
        }}>{title} Skills</h3>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {skills.map(skill => (
          <span key={skill} style={{
            padding: '8px 14px',
            borderRadius: 6,
            background: '#f3f4f6',
            color: 'var(--dark)',
            fontSize: '0.9rem',
            fontWeight: 500,
            fontFamily: 'Plus Jakarta Sans',
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
