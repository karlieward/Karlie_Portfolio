import { useEffect } from 'react'

// Images live in /public/case-studies/neue (downloaded from Figma with get-figma-images.sh)
const img = (name) => `/case-studies/neue/${name}`

// Shows one region of a full 1920×1080 Figma export
function Crop({ src, alt, box, full = [1920, 1080] }) {
  const [x, y, w, h] = box
  return (
    <div className="kw-crop" style={{ aspectRatio: `${w} / ${h}` }}>
      <img
        src={src}
        alt={alt}
        style={{ width: `${(full[0] / w) * 100}%`, left: `${(-x / w) * 100}%`, top: `${(-y / h) * 100}%` }}
      />
    </div>
  )
}

const COMPETITORS = [
  ['comp-calendar.png', 'Calendar'],
  ['comp-notes.png', 'Notes'],
  ['comp-clock.png', 'Clock'],
  ['comp-todoist.png', 'Todoist'],
  ['comp-timetimer.png', 'Time Timer'],
  ['comp-focuskeeper.png', 'Focus Keeper'],
]

// Positions from the Figma positioning matrix (percent of the chart)
const MATRIX = [
  { label: 'Focus Keeper', x: 2, y: 24 },
  { label: 'Daily Planner', x: 21, y: 38 },
  { label: 'Calendar', x: 30, y: 53 },
  { label: 'Todoist', x: 53, y: 31 },
  { label: 'Notes', x: 62, y: 40 },
  { label: 'Time Timer', x: 68, y: 61 },
  { label: 'Clock', x: 62, y: 69 },
  { label: 'Neue (Focus Timer)', x: 70, y: 2, me: true },
]

const MOTIVATION = [
  ['Incentives', 63],
  ['Balance', 23],
  ['Organization', 52],
  ['Completion', 83],
]

const FLOW = ['Start', 'Add task', 'Set category, time and priority', 'List tasks', 'Display by category or priority', 'Do tasks', 'Earn badges', 'End or repeat']

export default function NeueCaseStudy({ onBack }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <article className="kw-cs">
      <div className="kw-container">
        <button className="kw-cs-back" onClick={onBack}>← Back to work</button>

        <p className="kw-eyebrow">Neue App · Product design</p>
        <h1 className="kw-cs-title">Helping students decide what to work on next</h1>
        <p className="kw-cs-sub">Neue is an app that helps students complete and prioritize all their daily tasks, with timers for each task and badges that make finishing feel rewarding.</p>

        <dl className="kw-cs-meta">
          <div><dt>Role</dt><dd>Designer and developer</dd></div>
          <div><dt>Tools</dt><dd>Figma, Adobe Illustrator, Cursor, Expo Go</dd></div>
          <div><dt>Links</dt><dd className="kw-links">
            <a href="https://www.figma.com/proto/buCouJuFG5o9Uyx4wqhT8h/NEUE-APP?team_id=1415715963632767103&node-id=162-2395&page-id=125%3A835&starting-point-node-id=162%3A2507&t=SvNLmQ6WP31K6jg0-1" target="_blank" rel="noopener noreferrer">Prototype</a>
            <a href="https://github.com/karlieward/neue-app" target="_blank" rel="noopener noreferrer">GitHub</a>
          </dd></div>
        </dl>

        <div className="kw-cs-hero-phone">
          <img src={img('hero-phone.png')} alt="Neue's Focus Timer screen on an iPhone" />
        </div>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The brief</p>
          <h2>One app for school, work and everything in between.</h2>
          <p>Create an app that helps students <strong>complete</strong> and <strong>prioritize</strong> all daily tasks from school and work to everyday chores. This app supports my idea by incorporating a timer with delegated time to each task and badges to <strong>incentivize</strong> completion.</p>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Journey map</p>
          <h2>From “I can’t get organized” to “this is working.”</h2>
          <div className="kw-cs-box kw-journey">
            <div className="kw-journey-head">Phases</div>
            {['Problem', 'Explore', 'Implement', 'Reflect'].map(p => <div key={p} className="kw-journey-phase">{p}</div>)}
            <div className="kw-journey-head">Steps</div>
            <div><p>Tasks not complete</p><p>Can’t get organized</p></div>
            <div><p>What can help me get organized?</p><p>Physical or digital?</p></div>
            <div><p>Decide and “buy”</p><p>Start using app</p></div>
            <div><p>Are things getting accomplished?</p><p>Is this app effective?</p></div>
          </div>
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><h3>Goal</h3><p>Satisfaction and continual use</p></div>
            <div className="kw-cs-box"><h3>Opportunities</h3><p>Make everyday accomplishments fun and rewarding</p></div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Research and persona</p>
          <p className="kw-cs-quote" style={{ marginTop: 0 }}>“How do I integrate my job, school assignments, cleaning my apartment, hanging out with friends, fulfilling my calling, tests, washing laundry, calling my mom, sewing my quilt, and dating when there is not enough time in the day?”</p>
          <div className="kw-persona">
            <div className="kw-persona-id">
              <img src={img('persona.png')} alt="Persona: Abbey Chopra" />
              <h3>Abbey Chopra</h3>
              <div className="kw-tags"><span>Go getter</span><span>Perfectionist</span><span>Ambitious</span></div>
              <dl className="kw-persona-facts">
                <div><dt>Age</dt><dd>21</dd></div>
                <div><dt>Work</dt><dd>Anatomy TA</dd></div>
                <div><dt>Family</dt><dd>Single</dd></div>
                <div><dt>Location</dt><dd>Brigham Young University</dd></div>
                <div><dt>Major</dt><dd>Pre-Med</dd></div>
              </dl>
            </div>
            <div>
              <h3>Goals</h3>
              <ul className="kw-list"><li>Clean apartment</li><li>Pass all classes</li><li>Make money</li><li>Socialize</li></ul>
              <h3 style={{ marginTop: 28 }}>Frustrations</h3>
              <ul className="kw-list">
                <li>Can only focus on one thing (school, work, friends) at a time</li>
                <li>Daily chores not getting done</li>
                <li>Struggles to integrate all aspects of life</li>
              </ul>
              <h3 style={{ marginTop: 28 }}>Motivation</h3>
              <div className="kw-bars">
                {MOTIVATION.map(([label, pct]) => (
                  <div key={label} className="kw-bar"><span>{label}</span><div><i style={{ width: `${pct}%` }} /></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Competitive analysis</p>
          <h2>What’s already out there.</h2>
          <div className="kw-comp-grid">
            {COMPETITORS.map(([file, name]) => (
              <figure key={name}><img src={img(file)} alt={`${name} app`} /><figcaption>{name}</figcaption></figure>
            ))}
          </div>
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><p>Apple apps have a larger share of the market, largely because of Apple’s ecosystem.</p></div>
            <div className="kw-cs-box"><p>Timers such as the Pomodoro Technique are very popular in productivity apps.</p></div>
            <div className="kw-cs-box"><p>Physical planners sell less every year because digital ones offer more customization and functionality.</p></div>
          </div>
          <div className="kw-cs-stats">
            <div className="kw-cs-stat"><strong>7.8B</strong><span>Digital planner market, growing 17.1%</span></div>
            <div className="kw-cs-stat"><strong>1.3B</strong><span>Physical planner market, growing 4.6%</span></div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Positioning matrix</p>
          <h2>An open spot: organized and rewarding.</h2>
          <div className="kw-matrix">
            <span className="kw-matrix-axis kw-top">High organization</span>
            <span className="kw-matrix-axis kw-bottom">Low organization</span>
            <span className="kw-matrix-axis kw-left">No incentives</span>
            <span className="kw-matrix-axis kw-right">Incentives</span>
            <div className="kw-matrix-plot">
              {MATRIX.map(m => (
                <span key={m.label} className={`kw-matrix-dot${m.me ? ' is-me' : ''}`} style={{ left: `${m.x}%`, top: `${m.y}%` }}>{m.label}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Competitive flows</p>
          <h2>Learning from Time Timer and Focus Keeper.</h2>
          <p>Some things these apps are doing well is providing a timer. They are customizable to time and task. One app color codes (Time Timer) while the other app prioritizes (Focus Keeper). Time Timer does not offer much more than customizing a timer. Focus Keeper lets you create your to-do list and customize each item by priority, a timer, schedule, and description. This app also provides generic timers such as a stretching timer or study timer. Things I could do better are incorporate more of an incentive or reward.</p>
          <Crop src={img('flows-slide.png')} alt="Screens from Time Timer and Focus Keeper with notes" box={[490, 60, 1370, 910]} />
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">User flow</p>
          <h2>Create an intuitive display and fun incentive.</h2>
          <ol className="kw-flow">
            {FLOW.map((step, i) => <li key={step}><span>{i + 1}</span>{step}</li>)}
          </ol>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Paper prototype</p>
          <h2>Testing on paper first.</h2>
          <img className="kw-cs-img kw-cs-img-plain" src={img('paper-prototype.png')} alt="Paper prototype sketches of the Neue app" />
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><h3>Feedback</h3><p>Overall, users completed all given tasks. The greatest struggle was figuring out how to prioritize.</p></div>
            <div className="kw-cs-box"><h3>What testers said</h3><ul><li>“Rather drag and drop than a menu to prioritize”</li><li>“Lots of icons, too much going on”</li><li>“What is this for?”</li><li>“Schedule tasks?”</li></ul></div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Digital wireframe</p>
          <h2>All the pieces in place.</h2>
          <img className="kw-cs-img" src={img('wireframe.png')} alt="Digital wireframes of the Neue app" />
          <div className="kw-cs-box" style={{ marginTop: 24, maxWidth: 520 }}><h3>Feedback</h3><p>All major necessities present, but details lacking.</p></div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Style guide and branding</p>
          <h2>Finding the look.</h2>
          <img className="kw-cs-img" src={img('style-options.png')} alt="Early style guide options" />
          <div className="kw-icons-row">
            <Crop src={img('icons-slide.png')} alt="The Neue badge icon set" box={[60, 110, 970, 770]} />
            <div className="kw-logo-card">
              <img src={img('logo.png')} alt="The Focus Timer logo" />
              <p>I wanted a logo that was simple but also conveyed the idea of goals and time.</p>
            </div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">High-fidelity prototype</p>
          <h2>First iteration feedback.</h2>
          <img className="kw-cs-img" src={img('hifi-1.png')} alt="First high-fidelity iteration of Neue" />
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><h3>What I heard</h3><ul><li>Unappealing red</li><li>Overall bland, not exciting</li><li>Too similar priority colors</li><li>What is this drop shadow?</li><li>Not aligned</li></ul></div>
            <div className="kw-cs-box"><h3>What I changed</h3><p>Updated priority to be decided when creating a task. However, the prioritization by color did not give enough contrast to clearly differentiate between the three prioritization levels. Decided to go in a different direction using symbols to show priority. With suggestions, went back to my branding board and brainstormed a new color scheme to make the app more playful and exciting.</p></div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Final style guide</p>
          <h2>Fun, playful and exciting.</h2>
          <p>One of my greatest struggles was finding the right color scheme for this app. My previous attempts seemed too plain or monochromatic. I wanted the app to feel fun, playful, and exciting, reflecting the nature of celebrating with earned badges. With this final style guide, I started to see my vision portray more adequately.</p>
          <img className="kw-cs-img kw-cs-img-plain" src={img('style-final.png')} alt="Final Neue style guide with colors, type and logo" />
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Final design</p>
          <h2>The finished prototype.</h2>
          <img className="kw-cs-img" src={img('hifi-2.png')} alt="Final high-fidelity screens of Neue" />
          <p style={{ marginTop: 28 }}>
            <a className="kw-button" style={{ textDecoration: 'none', display: 'inline-block' }} href="https://www.figma.com/proto/buCouJuFG5o9Uyx4wqhT8h/NEUE-APP?team_id=1415715963632767103&node-id=162-2395&page-id=125%3A835&starting-point-node-id=162%3A2507&t=SvNLmQ6WP31K6jg0-1" target="_blank" rel="noopener noreferrer">Open the prototype</a>
          </p>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">Figma to code</p>
          <h2>From prototype to a real app.</h2>
          <p>I took Neue from a high-fidelity Figma prototype into a working mobile app, using Cursor to translate design into code and Expo Go to run it on my phone.</p>
          <img className="kw-cs-img" src={img('figma-to-code.png')} alt="Neue running as a real mobile app" />
          <p style={{ marginTop: 20 }}><a style={{ color: 'var(--brown)', fontWeight: 500 }} href="https://github.com/karlieward/neue-app" target="_blank" rel="noopener noreferrer">View the code on GitHub</a></p>
        </section>

        <button className="kw-cs-back" onClick={onBack} style={{ marginTop: 24 }}>← Back to work</button>
      </div>
    </article>
  )
}
