import { useState, useEffect } from 'react'

const archiveLinks = [
  { label: 'Technical', category: 'technical' },
  { label: 'Design', category: 'design' },
]

export default function Navbar({ projectCategory, onCloseProject, onResetProjects, onSelectCategory }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHome = (hash) => {
    setMenuOpen(false)
    onCloseProject()
    onResetProjects()
    setTimeout(() => {
      if (!hash) return window.scrollTo(0, 0)
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'auto' })
    }, 50)
  }

  const goCategory = (category) => {
    setMenuOpen(false)
    onSelectCategory(category)
  }

  const mainLinks = [
    { label: 'Work', onClick: () => goHome('#projects') },
    { label: 'Fun', onClick: () => goCategory('fun'), active: projectCategory === 'fun' },
    { label: 'About', onClick: () => goHome('#about') },
  ]

  const renderLinks = (mobile) => (
    <>
      {mainLinks.map(link => (
        <button key={link.label} className={`kw-nav-link${link.active ? ' is-active' : ''}${mobile ? ' is-mobile' : ''}`} onClick={link.onClick}>
          {link.label}
        </button>
      ))}
      <span className="kw-nav-divider" aria-hidden="true" />
      {archiveLinks.map(link => (
        <button
          key={link.label}
          className={`kw-nav-link kw-nav-archive${projectCategory === link.category ? ' is-active' : ''}${mobile ? ' is-mobile' : ''}`}
          onClick={() => goCategory(link.category)}
        >
          {link.label}
        </button>
      ))}
    </>
  )

  return (
    <nav className={`kw-nav${scrolled ? ' is-scrolled' : ''}`}>
      <button className="kw-logo" onClick={() => goHome()} aria-label="Home">KW</button>

      <div className="kw-nav-links">{renderLinks(false)}</div>

      <button className="kw-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
        <span /><span /><span />
      </button>

      {menuOpen && <div className="kw-mobile-menu">{renderLinks(true)}</div>}
    </nav>
  )
}
