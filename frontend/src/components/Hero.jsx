import { useEffect, useRef } from 'react'

export default function Hero({ data }) {
  const blobRef = useRef(null)

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 80,
    }}>
      {/* Decorative background blobs */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-80px',
        width: 520, height: 520, borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'linear-gradient(135deg, rgba(255,107,107,0.15), rgba(108,99,255,0.12))',
        animation: 'blob 8s ease-in-out infinite',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-60px',
        width: 340, height: 340, borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        background: 'linear-gradient(135deg, rgba(6,214,160,0.12), rgba(255,209,102,0.12))',
        animation: 'blob 10s ease-in-out infinite reverse',
        zIndex: 0,
      }} />

      {/* Floating dots */}
      {[
        { top: '20%', left: '8%', color: '#FF6B6B', size: 12 },
        { top: '65%', left: '6%', color: '#FFD166', size: 8 },
        { top: '35%', right: '12%', color: '#06D6A0', size: 10 },
        { top: '75%', right: '8%', color: '#6C63FF', size: 14 },
      ].map((dot, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: dot.top, left: dot.left, right: dot.right,
          width: dot.size, height: dot.size,
          borderRadius: '50%',
          background: dot.color,
          animation: `float ${3 + i * 0.6}s ease-in-out infinite`,
          animationDelay: `${i * 0.4}s`,
          zIndex: 0,
        }} />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 680 }}>
          {/* Greeting badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', borderRadius: 100, padding: '8px 18px',
            boxShadow: 'var(--shadow-sm)', marginBottom: 32,
            border: '1px solid rgba(0,0,0,0.06)',
            animation: 'fadeUp 0.5s ease forwards',
          }}>
            <span style={{ fontSize: '1.1rem' }}>👋</span>
            <span style={{
              fontFamily: 'Plus Jakarta Sans', fontWeight: 600,
              fontSize: '0.9rem', color: 'var(--gray)'
            }}>
              {data.greeting}
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            lineHeight: 1.05, marginBottom: 8,
            animation: 'fadeUp 0.6s ease 0.1s both',
          }}>
            {data.name}
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF6B6B, #6C63FF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>.</span>
          </h1>

          {/* Rotating role badges */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28,
            animation: 'fadeUp 0.6s ease 0.2s both',
          }}>
            {['Designer', 'Developer', 'Storyteller'].map((role, i) => (
              <span key={role} style={{
                padding: '6px 16px',
                borderRadius: 100,
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 700,
                fontSize: '0.85rem',
                background: i === 0 ? '#FFE8E8' : i === 1 ? '#EEEEFF' : '#E0FBF4',
                color: i === 0 ? '#FF6B6B' : i === 1 ? '#6C63FF' : '#048A69',
              }}>
                {role}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--gray)', lineHeight: 1.7,
            marginBottom: 44, maxWidth: 560,
            animation: 'fadeUp 0.6s ease 0.3s both',
          }}>
            {data.tagline}
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center',
            animation: 'fadeUp 0.6s ease 0.4s both',
          }}>
            <a href="#projects" className="btn btn-primary" style={{ fontSize: '1rem' }}>
              {data.cta} →
            </a>
            <a href="#about" className="btn btn-outline" style={{ fontSize: '1rem' }}>
              {data.ctaSecondary}
            </a>
          </div>

          {/* Social proof strip */}
          <div style={{
            marginTop: 64, display: 'flex', flexWrap: 'wrap', gap: 32,
            animation: 'fadeUp 0.6s ease 0.5s both',
          }}>
            {[
              { value: '4+', label: 'Projects Built' },
              { value: 'BYU', label: 'Info Systems' },
              { value: '2', label: 'Core Disciplines' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
                  fontSize: '1.8rem', color: 'var(--dark)'
                }}>{stat.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gray)', marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'float 2s ease-in-out infinite',
        opacity: 0.5,
      }}>
        <span style={{ fontSize: '0.75rem', fontFamily: 'Plus Jakarta Sans', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--gray)' }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: 'var(--gray)' }} />
      </div>
    </section>
  )
}
