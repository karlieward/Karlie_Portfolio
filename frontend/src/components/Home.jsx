import dairy1 from '../assets/images/dairy-1.jpg'
import na1 from '../assets/images/NA-01.png'
import mib1 from '../assets/images/MIB-01.png'
import chairs from '../assets/images/ChairsPortfolio.png'
import icons from '../assets/images/IconsPortfolio.png'
import wf0 from '../assets/images/WF-00.png'
import hw1 from '../assets/images/HW-01.png'
import logoLotto from '../assets/images/LogoLottoPortfolio.png'
import wards1 from '../assets/images/WardsPortfolio-01.png'

// Draft titles and descriptions — Karlie to approve before launch.
const CARDS = [
  {
    key: 'dairy',
    label: 'Full-stack app · Live demo',
    title: 'Less managing. More savings.',
    description: 'Designing and building a custom inventory system for Wards Dairy, a working dairy farm.',
    image: dairy1,
    imagePosition: 'center 45%',
  },
  {
    key: 'neue',
    label: 'Product design · Mobile',
    title: 'Helping students decide what to work on next',
    description: 'Neue, a productivity app with focus timers and badges that make finishing tasks feel rewarding.',
    image: na1,
  },
  {
    key: 'mib',
    label: 'Interaction design · iOS',
    title: 'Designing a new interaction inside an Apple app',
    description: 'Research, design and a prototype that fits Apple’s own design language.',
    image: mib1,
    underConstruction: true,
  },
  {
    key: 'tools',
    label: 'Illustrator · Figma · MindStudio · Generative AI',
    title: 'How I design with other tools',
    description: 'Smaller projects grouped by the tool I used to make them.',
    collage: [chairs, icons, wf0, hw1, logoLotto, wards1],
  },
]

function CardImage({ card }) {
  if (card.collage) {
    return (
      <div className="kw-card-image kw-collage">
        {card.collage.map((src, i) => (
          <div key={i} className="kw-collage-cell"><img src={src} alt="" /></div>
        ))}
      </div>
    )
  }
  return (
    <div className="kw-card-image">
      <img src={card.image} alt="" style={{ objectPosition: card.imagePosition || 'center' }} />
      {card.underConstruction && (
        <div className="kw-construction" aria-hidden="true">
          <div className="kw-tape kw-tape-1" />
          <div className="kw-tape kw-tape-2" />
          <div className="kw-sign">Under construction</div>
        </div>
      )}
    </div>
  )
}

export default function Home({ onOpenCard }) {
  return (
    <>
      <section className="kw-hero">
        <div className="kw-container kw-hero-inner">
          <h1 className="kw-name">Karlie Ward</h1>
          <p className="kw-role">Information Systems student who designs and builds</p>
        </div>
      </section>

      <section id="projects" className="kw-section kw-work">
        <div className="kw-container">
          <div className="kw-card-grid">
            {CARDS.map(card => (
              <button key={card.key} className="kw-card" onClick={() => onOpenCard(card.key)}>
                <CardImage card={card} />
                <p className="kw-card-label">
                  {card.label}
                  {card.underConstruction && <span className="kw-badge">In progress</span>}
                </p>
                <h2 className="kw-card-title">{card.title}</h2>
                <p className="kw-card-desc">{card.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
