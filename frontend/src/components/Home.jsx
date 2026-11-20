import mibCard from '../assets/images/MIB-card.png'
import chairs from '../assets/images/ChairsPortfolio.png'
import icons from '../assets/images/IconsPortfolio.png'
import wayfinding from '../assets/images/WF-02.svg'
import wardsLogo from '../assets/images/WardsPortfolio-01.png'
import logoLotto from '../assets/images/LogoLottoPortfolio.png'
import cows from '../assets/images/WardsPortfolio-03.png'

// Neue's category colors, from Karlie's style guide
const NEUE_CATEGORIES = [
  ['Everyday', '#28B873'],
  ['School', '#F6CB38'],
  ['Work', '#4A51BA'],
  ['Miscellaneous', '#C11E6F'],
]

// Draft hooks — Karlie to approve before launch.
const CARDS = [
  {
    key: 'dairy',
    title: 'Combining 7+ vendors and 150+ items into one inventory system',
    sub: 'A full-stack web app built for my family’s dairy farm.',
    image: '/cards/dairy.png',
    imagePosition: 'left top',
  },
  {
    key: 'neue',
    title: 'Turning a student’s to-do list into timers and earned badges',
    sub: 'A productivity app I designed in Figma, then built into a working app.',
    neue: true,
  },
  {
    key: 'mib',
    title: 'Redesigning Apple Books to track reading goals and stats',
    sub: 'A new Library tab for readers who keep track of what they read.',
    image: mibCard,
    underConstruction: true,
  },
  {
    key: 'tools',
    title: 'How I design with other tools',
    sub: 'Illustrator · Figma · MindStudio · Generative AI',
    subIsMeta: true,
    // Each tile zooms into one piece of a project: [image, focus point, zoom]
    collage: [
      [chairs, '31% 50%', 2.6],
      [icons, '52% 86%', 2.4],
      [wayfinding, '50% 50%', 1.5],
      [wardsLogo, '77% 66%', 2.8],
      [logoLotto, '22% 58%', 1.7],
      [cows, '28% 55%', 1.5],
    ],
  },
]

function CardImage({ card }) {
  if (card.collage) {
    return (
      <div className="kw-card-image kw-collage">
        {card.collage.map(([src, focus, zoom], i) => (
          <div key={i} className="kw-collage-cell">
            <img src={src} alt="" style={{ objectPosition: focus, transformOrigin: focus, transform: `scale(${zoom})` }} />
          </div>
        ))}
      </div>
    )
  }
  if (card.neue) {
    return (
      <div className="kw-card-image kw-neue-card">
        <div className="kw-neue-swatches">
          {NEUE_CATEGORIES.map(([name, color]) => (
            <span key={name} style={{ background: color }}>{name}</span>
          ))}
        </div>
        <div className="kw-neue-phone">
          <img src="/cards/neue.png" alt="" />
        </div>
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
          <p className="kw-role">Information Systems student who ties together tech, design, and operations</p>
        </div>
      </section>

      <section id="projects" className="kw-section kw-work">
        <div className="kw-container">
          <div className="kw-card-grid">
            {CARDS.map(card => (
              <button key={card.key} className="kw-card" onClick={() => onOpenCard(card.key)}>
                <CardImage card={card} />
                <h2 className="kw-card-title">{card.title}</h2>
                <p className={`kw-card-sub${card.subIsMeta ? ' is-meta' : ''}`}>{card.sub}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
