import headshot from '../assets/images/IS_Headshot.jpg'
import dairy1 from '../assets/images/dairy-1.jpg'
import na1 from '../assets/images/NA-01.png'
import mib1 from '../assets/images/MIB-01.png'
import icons from '../assets/images/IconsPortfolio.png'

// Draft titles and descriptions — Karlie to approve before launch.
const CARDS = [
  {
    key: 'dairy',
    accent: 'var(--green)',
    tint: '#E3F1E8',
    label: 'Full-stack app · Live demo',
    title: 'Less managing. More savings.',
    description: 'Designing and building a custom inventory system for Wards Dairy, a working dairy farm.',
    image: dairy1,
    imagePosition: 'center 45%',
  },
  {
    key: 'neue',
    accent: 'var(--blue)',
    tint: '#E4E5F5',
    label: 'Product design · Mobile',
    title: 'Helping students decide what to work on next',
    description: 'Neue, a productivity app with focus timers and badges that make finishing tasks feel rewarding.',
    image: na1,
    imagePosition: 'center',
  },
  {
    key: 'mib',
    accent: 'var(--pink)',
    tint: '#F6E1EA',
    label: 'Interaction design · iOS',
    title: 'Designing a new interaction inside an Apple app',
    description: 'Research, design and a prototype that fits Apple’s own design language.',
    image: mib1,
    imagePosition: 'center',
  },
  {
    key: 'tools',
    accent: 'var(--gold)',
    tint: '#F8EED2',
    label: 'Illustrator · Figma · MindStudio · Generative AI',
    title: 'How I design with other tools',
    description: 'Smaller projects grouped by the tool I used to make them.',
    image: icons,
    imagePosition: 'center 85%',
  },
]

export default function Home({ onOpenCard }) {
  return (
    <>
      {/* Hero */}
      <section className="kw-hero">
        <div className="kw-container kw-hero-grid">
          <div>
            <h1 className="kw-name">Karlie Ward</h1>
            <p className="kw-role">Information Systems student who designs and builds</p>
          </div>
          <img src={headshot} alt="Karlie Ward" className="kw-headshot" />
        </div>
      </section>

      {/* Work */}
      <section id="projects" className="kw-section">
        <div className="kw-container">
          <p className="kw-eyebrow">Selected work</p>
          <div className="kw-card-grid">
            {CARDS.map(card => (
              <button
                key={card.key}
                className="kw-card"
                style={{ '--card-accent': card.accent }}
                onClick={() => onOpenCard(card.key)}
              >
                <div className="kw-card-image" style={{ background: card.tint }}>
                  <img src={card.image} alt="" style={{ objectPosition: card.imagePosition }} />
                </div>
                <p className="kw-card-label">
                  <span className="kw-dot" style={{ background: card.accent }} />
                  {card.label}
                </p>
                <h2 className="kw-card-title">{card.title}</h2>
                <p className="kw-card-desc">{card.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="kw-section">
        <div className="kw-container kw-about">
          <p className="kw-eyebrow">About</p>
          <h2 className="kw-about-title">Hi, I’m Karlie.</h2>
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
      </section>
    </>
  )
}
