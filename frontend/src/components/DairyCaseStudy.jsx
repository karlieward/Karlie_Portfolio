import { useEffect } from 'react'

// Images live in /public/case-studies/dairy (downloaded from Figma with get-figma-images.sh)
const img = (name) => `/case-studies/dairy/${name}`

export default function DairyCaseStudy({ onBack }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <article className="kw-cs">
      <div className="kw-container">
        <button className="kw-cs-back" onClick={onBack}>← Back to work</button>

        <p className="kw-eyebrow">Wards Dairy</p>
        <h1 className="kw-cs-title">Creating a custom inventory system</h1>
        <p className="kw-cs-sub">Less managing. More savings.</p>

        <dl className="kw-cs-meta">
          <div><dt>Role</dt><dd>Database Designer, Business Stakeholder</dd></div>
          <div><dt>Timeline</dt><dd>November ’25 – December ’25</dd></div>
          <div><dt>Team</dt><dd>Casey Black, Hector Casablanca, Hirohito Mizuno, Karlie Ward</dd></div>
          <div><dt>Links</dt><dd className="kw-links">
            <a href="https://dairy-farm-inventory.onrender.com" target="_blank" rel="noopener noreferrer">Live app</a>
            <a href="https://github.com/karlieward/DairyFarm_Inventory" target="_blank" rel="noopener noreferrer">GitHub</a>
          </dd></div>
        </dl>

        <img className="kw-cs-hero-img" src={img('hero.png')} alt="The Wards Dairy sign outside the farm" />

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The assignment</p>
          <h2>Started as a class project.</h2>
          <p>The project began as a class assignment to build a real solution for a real company. I convinced my team to take on my family’s dairy inventory. When the semester ended, the assignment did too, but the problem didn’t, so I’m continuing to build it for the people who use it every day.</p>
          <img className="kw-cs-img" src={img('team.png')} alt="The project team: Casey Black, Hector Casablanca, Hirohito Mizuno and Karlie Ward" />
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The background</p>
          <h2>Inventory was my job.</h2>
          <p>Our dairy’s stock room covers the whole operation, from cattle treatments to supplies like window cleaner for the truck drivers. Without a single database, we couldn’t keep track of what we had or what we were spending. This project turned that problem into one system for every vendor, department, and item.</p>
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><p>Orders often run tens of thousands of dollars at a time.</p></div>
            <div className="kw-cs-box"><p>The stock room holds hundreds of thousands in product.</p></div>
            <div className="kw-cs-box"><p>Items come from many vendors under many different names.</p></div>
          </div>
          <img className="kw-cs-img" src={img('stockroom.png')} alt="The dairy stock room shelves" />
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The stakeholders</p>
          <h2>Who this affects.</h2>
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><h3>Owners</h3><p>Pay the bills. Have ultimate say.</p></div>
            <div className="kw-cs-box"><h3>General Manager · Kassie</h3><p>Orders all medicine.</p></div>
            <div className="kw-cs-box"><h3>Secretary · Clarissa</h3><p>Checks supplies out.</p></div>
            <div className="kw-cs-box"><h3>Department managers</h3><p>Request what their teams need.</p></div>
            <div className="kw-cs-box"><h3>Dairy staff</h3><p>Check out supplies.</p></div>
            <div className="kw-cs-box"><h3>Supply vendors</h3><p>Walmart, Costco, Simplot, Animal Health, Merck, Zoetis</p></div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The users</p>
          <h2>Designed with two roles in mind.</h2>
          <div className="kw-cs-grid">
            <div className="kw-cs-box">
              <p className="kw-eyebrow">General manager</p>
              <h3>Kassie</h3>
              <p>Runs the farm, office, and dairy at once. Sees the big picture across every department.</p>
              <ul>
                <li><strong>Goal:</strong> Know what we have and what to order without another project.</li>
                <li><strong>Today:</strong> Counts by hand on paper, types it into Excel, and sends orders to vendors.</li>
                <li><strong>Frustration:</strong> Inventory is one more job on top of everything else, and she wants it to stop being her responsibility.</li>
              </ul>
              <p className="kw-cs-quote" style={{ fontSize: '1.2rem', marginTop: 16 }}>“I can’t wait until this isn’t my responsibility anymore.”</p>
            </div>
            <div className="kw-cs-box">
              <p className="kw-eyebrow">Secretary</p>
              <h3>Clarissa</h3>
              <p>New to the ag industry. Speaks Spanish with staff and will do whatever needs to be done.</p>
              <ul>
                <li><strong>Goal:</strong> Know what is checked out with a simple protocol.</li>
                <li><strong>Today:</strong> Receives orders, puts them away, and checks items out by writing them in a notebook.</li>
                <li><strong>Frustration:</strong> Learning the industry on the job and missing small details.</li>
              </ul>
              <p className="kw-cs-quote" style={{ fontSize: '1.2rem', marginTop: 16 }}>“I am learning as I go, I need something simple!”</p>
            </div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The problem</p>
          <h2>One system for one vendor.</h2>
          <img className="kw-cs-img" src={img('vendor-system.png')} alt="The single-vendor inventory system the dairy used before" />
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><h3>Locations and departments</h3><p>No restrictions for what they could use.</p></div>
            <div className="kw-cs-box"><h3>Duplicate items</h3><p>Same item, varying quantities. Which one is right?</p></div>
            <div className="kw-cs-box"><h3>One vendor’s inventory system</h3><p>Only their products. We had several other vendors.</p></div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The goal</p>
          <h2>One system for ALL vendors.</h2>
          <img className="kw-cs-img" src={img('goal-system.png')} alt="The new inventory system covering every vendor" />
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><h3>Locations and departments</h3><p>Only available supplies and medicine come up.</p></div>
            <div className="kw-cs-box"><h3>One name per item</h3><p>With a photo for easy identification.</p></div>
            <div className="kw-cs-box"><h3>Add any item through records</h3><p>Regardless of vendor, so no items are left out.</p></div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The challenges</p>
          <h2>Designing as both client and teammate.</h2>
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><h3>Sitting on both sides of the table</h3><p>I could see exactly what I wanted as the client, but I still had to collaborate, compromise, and hand off real ownership of the interface to my teammates.</p></div>
            <div className="kw-cs-box"><h3>Whether to expand the user pool</h3><p>We contemplated designing the system in Spanish too, which would open it to Spanish-speaking managers. The real question was whether we wanted to expand the users at all.</p></div>
            <div className="kw-cs-box"><h3>Keeping user error low</h3><p>The system had to be as simple as possible, with as few clicks as possible and a very intuitive layout, so the database would stay as accurate as possible. That is why we added images and retrained everyone on locations and departments.</p></div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The product</p>
          <h2>Built for tablet and desktop.</h2>
          <p>The assignment had two requirements: full CRUD operations and two views. We built an admin view (Kassie) for adding, updating, and deleting records, and a user view (Clarissa) for looking up and updating records.</p>
          <div className="kw-cs-box" style={{ marginTop: 28, maxWidth: 520, padding: 0, overflow: 'hidden' }}>
            <table className="kw-cs-table">
              <thead><tr><th>Action</th><th>Admin view</th><th>User view</th></tr></thead>
              <tbody>
                <tr><td>Create</td><td>✓</td><td>—</td></tr>
                <tr><td>Read</td><td>✓</td><td>✓</td></tr>
                <tr><td>Update</td><td>✓</td><td>✓</td></tr>
                <tr><td>Delete</td><td>✓</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
          <div className="kw-cs-grid">
            <img className="kw-cs-img" src={img('sketch-1.png')} alt="Early sketch of the inventory screens" />
            <img className="kw-cs-img" src={img('tablet-mockup.png')} alt="The inventory app on a tablet" />
          </div>
          <div className="kw-cs-grid">
            <img className="kw-cs-img" src={img('app-screen-1.png')} alt="Inventory app screen" />
            <img className="kw-cs-img" src={img('app-screen-2.png')} alt="Inventory app screen" />
          </div>
          <p style={{ marginTop: 28 }}>
            <a className="kw-button" style={{ textDecoration: 'none', display: 'inline-block' }} href="https://dairy-farm-inventory.onrender.com" target="_blank" rel="noopener noreferrer">Try the live app</a>
            <span style={{ marginLeft: 16, color: 'var(--brown-soft)', fontSize: '0.95rem' }}>Log in with username <strong>demo</strong> and password <strong>demo</strong></span>
          </p>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The tech stack</p>
          <h2>How it’s built.</h2>
          <p>This stack let me build a relational structure flexible enough to model real farm operations — vendors, departments, and inventory as distinct, connected entities — while Multer handled the image uploads that turned out to be one of the project’s biggest differentiators.</p>
          <img className="kw-cs-img" src={img('tech-logos.png')} alt="Logos of the technologies used" style={{ maxWidth: 760 }} />
          <img className="kw-cs-img" src={img('erd.png')} alt="Entity relationship diagram for the inventory database" />
          <p style={{ marginTop: 20 }}><a className="kw-links" style={{ color: 'var(--brown)', fontWeight: 500 }} href="https://github.com/karlieward/DairyFarm_Inventory" target="_blank" rel="noopener noreferrer">github.com/karlieward/DairyFarm_Inventory</a></p>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The future</p>
          <h2>Reports, predictions, and integration.</h2>
          <div className="kw-cs-grid">
            <div className="kw-cs-box"><h3>Reporting</h3><p>Reporting to track costs and trends, including automated order summaries and purchase trends.</p></div>
            <div className="kw-cs-box"><h3>Predictions</h3><p>Machine learning to see when we use the most products and when it’s best to order them.</p></div>
            <div className="kw-cs-box"><h3>Integration</h3><p>A direct line between incoming orders and live inventory counts, ideally connected to the herd management software we already rely on.</p></div>
          </div>
          <p className="kw-cs-quote">“If you can’t measure it, you can’t improve it.”</p>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The impact</p>
          <h2>Less managing. More savings.</h2>
          <p>A system like this means less time spent hunting down inventory and more time trusting the numbers — clear purchasing trends, fewer stockouts, and real savings instead of paying a premium for overpriced substitutes in a bind.</p>
          <div className="kw-cs-stats">
            <div className="kw-cs-stat"><strong>3 hrs</strong><span>Saved each week</span></div>
            <div className="kw-cs-stat"><strong>150+</strong><span>Items for one shared inventory</span></div>
            <div className="kw-cs-stat"><strong>7+</strong><span>Vendors consolidated</span></div>
            <div className="kw-cs-stat"><strong>10</strong><span>Departments covered</span></div>
          </div>
        </section>

        <section className="kw-cs-section">
          <p className="kw-eyebrow">The lesson</p>
          <h2>I’d sketch before I code.</h2>
          <p>As an Information Systems student, I see how we jump into building without always going through the steps of sketching, prototyping, and getting feedback. As a UX/UI designer, I have learned how important those steps are. This project shows it is a great V1, and I see the potential to take it further as I redesign it for a V2.</p>
          <img className="kw-cs-img" src={img('lesson.png')} alt="Sketches for the next version of the inventory system" />
        </section>

        <button className="kw-cs-back" onClick={onBack} style={{ marginTop: 24 }}>← Back to work</button>
      </div>
    </article>
  )
}
