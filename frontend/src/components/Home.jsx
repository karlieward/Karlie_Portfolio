import mibCard from '../assets/images/MIB-card.png'
import rReferee from '../assets/images/tools/r-referee.png'
import chair from '../assets/images/tools/chair.png'
import cows from '../assets/images/tools/cows.png'
import icons from '../assets/images/tools/icons.png'

// Neue's stacked title colors, from Karlie's title slide
const NEUE_COLORS = ['#4A51BA', '#28B873', '#F6CB38', '#C11E6F']

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
    title: 'Putting school, work and everyday tasks in one place to prioritize',
    sub: 'Designed in Figma, then built with Cursor.',
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
    collage: [rReferee, chair, cows, icons],
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
  if (card.neue) {
    return (
      <div className="kw-card-image kw-neue-card">
        <div className="kw-neue-stack" aria-hidden="true">
          {NEUE_COLORS.map(color => (
            <span key={color} style={{ color }}>Neue App</span>
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
          <p className="kw-role">Information Systems student who thinks good design and clean code belong together</p>
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
