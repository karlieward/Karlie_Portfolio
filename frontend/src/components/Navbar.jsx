import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 24px',
      height: 68,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(250,250,248,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
    }}>
      {/* Logo */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, #FF6B6B, #6C63FF)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1rem'
        }}>K</div>
        <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.1rem', color: 'var(--dark)' }}>
          karlie
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}
           className="nav-links">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            style={{
              padding: '8px 16px',
              borderRadius: 100,
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: 'var(--dark)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'var(--light)'
              e.target.style.color = 'var(--coral)'
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent'
              e.target.style.color = 'var(--dark)'
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ padding: '10px 22px', fontSize: '0.88rem' }}
        >
          Hire Me ✨
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: 5, padding: 8
        }}
        className="hamburger"
        aria-label="Menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: 24, height: 2,
            background: 'var(--dark)', borderRadius: 2,
            transition: 'all 0.3s',
            transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                      : menuOpen && i === 1 ? 'scaleX(0)'
                      : menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                      : 'none'
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(250,250,248,0.97)', backdropFilter: 'blur(12px)',
          padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4,
          borderBottom: '1px solid rgba(0,0,0,0.06)'
        }}>
          {links.map(link => (
            <a key={link.label} href={link.href}
               onClick={() => setMenuOpen(false)}
               style={{
                 padding: '12px 16px', borderRadius: 8,
                 fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: '1rem',
                 color: 'var(--dark)',
               }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
             className="btn btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
            Hire Me ✨
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
