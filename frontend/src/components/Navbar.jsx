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
      padding: '24px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(255, 255, 255, 0.7)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #e5e7eb' : 'none',
    }}>
      {/* Logo */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none' }}>
        <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.1rem', color: '#000000' }}>
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
              borderRadius: 6,
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
              fontSize: '0.95rem',
              color: '#6b7280',
              transition: 'all 0.3s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.target.style.color = '#000000'
            }}
            onMouseLeave={e => {
              e.target.style.color = '#6b7280'
            }}
          >
            {link.label}
          </a>
        ))}

        {/* GitHub Link */}
        <a
          href="https://github.com/karlieward"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '8px 16px',
            borderRadius: 6,
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: '0.95rem',
            color: '#6b7280',
            transition: 'all 0.3s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            e.target.style.color = '#000000'
          }}
          onMouseLeave={e => {
            e.target.style.color = '#6b7280'
          }}
        >
          GitHub
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/karlieward/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '8px 16px',
            borderRadius: 6,
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: '0.95rem',
            color: '#6b7280',
            transition: 'all 0.3s',
            textDecoration: 'none',
            marginRight: 8,
          }}
          onMouseEnter={e => {
            e.target.style.color = '#000000'
          }}
          onMouseLeave={e => {
            e.target.style.color = '#6b7280'
          }}
        >
          LinkedIn
        </a>

        {/* Contact Button */}
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ padding: '10px 22px', fontSize: '0.88rem' }}
        >
          Contact
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
                 textDecoration: 'none',
               }}>
              {link.label}
            </a>
          ))}
          <a href="https://github.com/karlieward" target="_blank" rel="noopener noreferrer"
             onClick={() => setMenuOpen(false)}
             style={{
               padding: '12px 16px', borderRadius: 8,
               fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: '1rem',
               color: 'var(--dark)',
               textDecoration: 'none',
             }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/karlieward/" target="_blank" rel="noopener noreferrer"
             onClick={() => setMenuOpen(false)}
             style={{
               padding: '12px 16px', borderRadius: 8,
               fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: '1rem',
               color: 'var(--dark)',
               textDecoration: 'none',
             }}>
            LinkedIn
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}
             className="btn btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
            Contact
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
