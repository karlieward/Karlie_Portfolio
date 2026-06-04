import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsLanding from './components/ProjectsLanding'
import Projects from './components/Projects'
import DesignProjects from './components/DesignProjects'
import ProjectDetail from './components/ProjectDetail'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [portfolioData, setPortfolioData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  const [projectCategory, setProjectCategory] = useState(null) // null = landing, 'technical' = tech, 'design' = design

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
      <Navbar selectedProject={selectedProject} onCloseProject={() => setSelectedProject(null)} />
      <main>
        {!selectedProject && !projectCategory && (
          <>
            <Hero data={portfolioData.hero} />
            <About data={portfolioData.about} />
          </>
        )}
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : projectCategory === 'technical' ? (
          <>
            <Projects
              data={portfolioData.projects}
              onProjectClick={setSelectedProject}
            />
          </>
        ) : projectCategory === 'design' ? (
          <DesignProjects onBack={() => setProjectCategory(null)} />
        ) : (
          <>
            <ProjectsLanding onSelectCategory={setProjectCategory} />
            <Skills data={portfolioData.skills} />
            <Contact />
          </>
        )}
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
      tagline: "Information Systems student who thinks good design and clean code belong together.",
      cta: "See My Work",
      ctaSecondary: "About Me"
    },
    about: {
      bio: "I'm a recent Information Systems graduate with a passion for bridging the gap between technology and creativity. I love building things that are both functional and beautiful — whether that's a polished web app, a thoughtfully designed UI, or a data-driven solution that actually makes sense to the people using it.",
      highlights: [
        "B.S. Information Systems — BYU (graduating soon)",
        "Loves UI/UX + full-stack development",
        "Passionate about AI and emerging technologies",
        "Always learning something new"
      ]
    },
    projects: [
      {
        id: 1,
        title: "Dairy Farm Inventory System",
        description: "Full-stack web application for managing farm medication inventory with user authentication, image uploads, and role-based access control. Features real-time inventory tracking, medication details with images, and comprehensive audit logging.",
        longDescription: "A comprehensive inventory management system built for a dairy farm. This application allows farm staff to track medications, equipment, and supplies across different departments. Admins can add, edit, and delete inventory items with image uploads. The system includes role-based access control (Admin vs User views), real-time quantity tracking, and an audit log that tracks all changes made to the system for compliance and accountability.",
        tags: ["Node.js", "Express", "PostgreSQL", "Knex", "Multer", "EJS"],
        emoji: "🐄",
        github: "https://github.com/karlieward/DairyFarm_Inventory",
        images: [
          { src: "/images/dairy-1.jpg", alt: "Login page" },
          { src: "/images/dairy-2.jpg", alt: "Dashboard with departments" },
          { src: "/images/dairy-3.jpg", alt: "Medication inventory" },
          { src: "/images/dairy-4.jpg", alt: "Admin records" },
          { src: "/images/dairy-5.jpg", alt: "Edit medication" }
        ]
      }
    ],
    skills: {
      technical: [
        "React / JavaScript",
        "TypeScript",
        "Node.js / Express",
        "PostgreSQL / SQL",
        "C# / .NET",
        "HTML & CSS",
        "Git & Version Control",
        "Python",
        "Knex",
        "Multer",
        "EJS",
        "APIs & REST"
      ],
      creative: [
        "UI/UX Design",
        "Figma & Prototyping",
        "Brand Identity & Design",
        "Typography & Color Theory",
        "Web Design",
        "User Research",
        "Adobe Suite"
      ]
    }
  }
}

export default App
