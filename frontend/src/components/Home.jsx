import mibCard from '../assets/images/MIB-card.png'
import chairs from '../assets/images/ChairsPortfolio.png'
import icons from '../assets/images/IconsPortfolio.png'
import wayfinding from '../assets/images/WF-02.svg'
import wardsLogo from '../assets/images/WardsPortfolio-01.png'
import logoLotto from '../assets/images/LogoLottoPortfolio.png'
import cows from '../assets/images/WardsPortfolio-03.png'

// Draft hooks — Karlie to approve before launch.
const CARDS = [
  {
    key: 'dairy',
    title: 'Combining 7+ vendors and 150+ items into one inventory system',
    sub: 'Full-stack web app · Node.js · PostgreSQL · Live demo',
    image: '/cards/dairy.png',
    imagePosition: 'left top',
  },
  {
    key: 'neue',
    title: 'Turning a student’s to-do list into timers and earned badges',
    sub: 'Mobile app · Figma · Illustrator · Built with Cursor and Expo',
    image: '/cards/neue.png',
    fit: 'contain',
  },
  {
    key: 'mib',
    title: 'Redesigning Apple Books to track reading goals and stats',
    sub: 'iOS interaction design · Figma',
    image: mibCard,
    underConstruction: true,
  },
  {
    key: 'tools',
    title: 'Logos, icons and maps beyond the case studies',
    sub: 'Illustrator · Figma · MindStudio · Generative AI',
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
  return (
    <div className={`kw-card-image${card.fit === 'contain' ? ' is-contain' : ''}`}>
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
                <h2 className="kw-card-title">{card.title}</h2>
                <p className="kw-card-sub">{card.sub}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
