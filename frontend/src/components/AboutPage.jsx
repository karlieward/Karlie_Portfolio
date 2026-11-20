import { useEffect } from 'react'
import Contact from './Contact'

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <section className="kw-section kw-page-top">
        <div className="kw-container kw-about-grid">
          <img className="kw-about-photo" src="/karlie.jpg" alt="Karlie Ward smiling in front of golden autumn trees" />
          <div className="kw-about">
            <h1 className="kw-about-title">Hi, I’m Karlie.</h1>
            <p className="kw-about-body">
              I’m an Information Systems student at BYU who loves the space where design and code meet.
              I build things that are both functional and beautiful, from full-stack web apps to
              thoughtfully designed interfaces.
            </p>
            <div className="kw-links">
              <a href="mailto:karlie3@byu.edu">Email</a>
              <a href="https://www.linkedin.com/in/karlieward/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/karlieward" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
