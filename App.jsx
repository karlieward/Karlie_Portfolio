import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [portfolioData, setPortfolioData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch data from .NET API
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        setPortfolioData(data)
        setLoading(false)
      })
      .catch(() => {
        // Fallback data if API is not running
        setPortfolioData(getFallbackData())
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', flexDirection: 'column', gap: 16,
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          border: '4px solid #FFE8E8',
          borderTop: '4px solid #FF6B6B',
          animation: 'spin-slow 0.8s linear infinite'
        }} />
        <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>Loading...</p>
        <style>{`@keyframes spin-slow { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Projects data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function getFallbackData() {
  return {
    hero: {
      greeting: "Hi, I'm",
      name: "Karlie",
      tagline: "Information Systems grad who thinks good design and clean code belong together.",
      cta: "See My Work",
      ctaSecondary: "About Me"
    },
    about: {
      bio: "I'm a recent Information Systems graduate with a passion for bridging the gap between technology and creativity. I love building things that are both functional and beautiful — whether that's a polished web app, a thoughtfully designed UI, or a data-driven solution that actually makes sense to the people using it.",
      highlights: [
        "B.S. Information Systems — BYU",
        "Loves UI/UX + full-stack development",
        "Figma to React pipeline enthusiast",
        "Always learning something new"
      ]
    },
    projects: [
      {
        id: 1,
        title: "Brand Identity System",
        description: "Designed a complete visual identity for a local small business — logo, color palette, typography, and component library in Figma.",
        tags: ["Figma", "Branding", "Design"],
        tagColor: "coral",
        emoji: "🎨",
        color: "#FFE8E8"
      },
      {
        id: 2,
        title: "Full-Stack Dashboard",
        description: "Built a real-time analytics dashboard with React + .NET API backend, featuring live charts, filtering, and user authentication.",
        tags: ["React", ".NET", "SQL", "Charts"],
        tagColor: "purple",
        emoji: "📊",
        color: "#EEEEFF"
      },
      {
        id: 3,
        title: "UX Research Study",
        description: "Conducted user interviews and usability tests for a campus app redesign. Delivered wireframes and a final prototype with measurable improvements.",
        tags: ["UX Research", "Figma", "Prototyping"],
        tagColor: "mint",
        emoji: "🔍",
        color: "#E0FBF4"
      },
      {
        id: 4,
        title: "E-commerce Web App",
        description: "Developed a full-featured e-commerce site with product listings, cart, and checkout — built with React, .NET Web API, and a SQL Server database.",
        tags: ["React", ".NET", "SQL Server"],
        tagColor: "yellow",
        emoji: "🛒",
        color: "#FFF8E0"
      },
      {
        id: 5,
        title: "Dairy Farm Inventory System",
        description: "Full-stack web application for managing farm medication inventory with user authentication, image uploads, and role-based access control. Features real-time inventory tracking, medication details with images, and comprehensive audit logging.",
        tags: ["Node.js", "Express", "PostgreSQL", "Knex", "Multer", "EJS"],
        emoji: "🐄",
        link: "https://github.com/karlieward/Karlie_Portfolio"
      }
    ],
    skills: {
      technical: [
        { name: "React / JavaScript", level: 90 },
        { name: "C# / .NET", level: 85 },
        { name: "SQL / Databases", level: 80 },
        { name: "HTML & CSS", level: 95 },
        { name: "Python", level: 70 },
        { name: "Git & Version Control", level: 85 }
      ],
      creative: [
        { name: "Figma & Prototyping", level: 92 },
        { name: "UI/UX Design", level: 88 },
        { name: "Brand Identity", level: 80 },
        { name: "Typography & Color", level: 85 }
      ],
      tools: ["VS Code", "Visual Studio", "Figma", "Postman", "GitHub", "Azure", "Notion", "Adobe Suite"]
    }
  }
}

export default App
