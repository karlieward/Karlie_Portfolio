import { useEffect } from 'react'

// Shows Karlie's Figma designs exactly as designed, one 16:9 frame after another.
// White in the designs blends into the site's cream background (mix-blend-mode: multiply).
// `links` are clickable areas placed over links in the designs, in percent of the frame.
export default function CaseStudySlides({ folder, slides, links = {}, onBack }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <article className="kw-slides-page">
      <div className="kw-slides">
        <button className="kw-cs-back" onClick={onBack}>← Back to work</button>
        {slides.map((alt, i) => {
          const n = String(i + 1).padStart(2, '0')
          return (
            <div key={n} className="kw-slide">
              <img src={`/case-studies/${folder}/${n}.png`} alt={alt} loading={i < 2 ? 'eager' : 'lazy'} />
              {(links[i + 1] || []).map(l => (
                <a
                  key={l.href}
                  className="kw-slide-link"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  style={{ left: `${l.box[0]}%`, top: `${l.box[1]}%`, width: `${l.box[2]}%`, height: `${l.box[3]}%` }}
                />
              ))}
            </div>
          )
        })}
        <button className="kw-cs-back" onClick={onBack} style={{ marginTop: 32 }}>← Back to work</button>
      </div>
    </article>
  )
}
