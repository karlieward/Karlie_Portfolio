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

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 680 }}>
          {/* Name */}
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
            lineHeight: 1.1, marginBottom: 24,
            animation: 'fadeUp 0.6s ease forwards',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}>
            Hi, I'm {data.name}.
          </h1>

          {/* Tagline */}
          <p style={{
            fontSize: 'clamp(0.9rem, 1.7vw, 1.1rem)',
            color: '#6b7280', lineHeight: 1.6,
            marginBottom: 48,
            animation: 'fadeUp 0.6s ease 0.15s both',
            fontWeight: 400,
          }}>
            {data.tagline}
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center',
            animation: 'fadeUp 0.6s ease 0.3s both',
          }}>
            <a href="#projects" className="btn btn-primary" style={{ fontSize: '0.95rem' }}>
              {data.cta} →
            </a>
            <a href="#about" className="btn btn-outline" style={{ fontSize: '0.95rem' }}>
              {data.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
