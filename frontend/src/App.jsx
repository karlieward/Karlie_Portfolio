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
      <Navbar
        selectedProject={selectedProject}
        onCloseProject={() => setSelectedProject(null)}
        projectCategory={projectCategory}
        onResetProjects={() => setProjectCategory(null)}
      />
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
              onBack={() => setProjectCategory(null)}
            />
          </>
        ) : projectCategory === 'design' ? (
          <>
            <DesignProjects
              data={portfolioData.designProjects}
              onProjectClick={setSelectedProject}
              onBack={() => setProjectCategory(null)}
            />
          </>
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
    designProjects: [
      {
        id: 1,
        title: "Wayfinding Map",
        description: "An exploration of logo design through wayfinding concepts",
        longDescription: "A comprehensive logo design exploration project that investigates wayfinding and navigation concepts through visual design. This project showcases the iterative design process from initial sketches through digital refinement, demonstrating design evolution across multiple concepts.",
        tags: ["Figma", "Adobe Illustrator"],
        preview: "/images/WF-00.png",
        images: [
          { src: "/images/WF-01.svg", alt: "Wayfinding exploration 1" },
          { src: "/images/WF-02.svg", alt: "Wayfinding exploration 2" },
          { src: "/images/WF-03.svg", alt: "Wayfinding exploration 3" },
          { src: "/images/WF-04.svg", alt: "Wayfinding exploration 4" }
        ]
      },
      {
        id: 2,
        title: "Hello, World",
        description: "Website redesign focusing on digital hierarchy and responsive design",
        longDescription: "A comprehensive website redesign project that emphasizes digital hierarchy and responsive design principles. This project demonstrates the design process from research and user personas through styling and implementation across desktop and mobile platforms.",
        tags: ["Figma"],
        preview: "HW-01.png",
        images: [
          { src: "/images/HW-01.png", alt: "Hello World exploration 1" },
          { src: "/images/HW-02.png", alt: "Hello World exploration 2" },
          { src: "/images/HW-03.png", alt: "Hello World exploration 3" },
          { src: "/images/HW-04.png", alt: "Hello World exploration 4" },
          { src: "/images/HW-05.png", alt: "Hello World exploration 5" },
          { src: "/images/HW-06.png", alt: "Hello World exploration 6" },
          { src: "/images/HW-07.png", alt: "Hello World exploration 7" }
        ]
      },
      {
        id: 3,
        title: "Neue App",
        description: "A student productivity app that helps organize and prioritize daily tasks",
        longDescription: "A student productivity app designed to help organize and prioritize daily tasks across school, work, and personal responsibilities. Features integrated timers for time-boxed tasks and achievement badges to motivate completion.",
        tags: ["Figma", "Adobe Illustrator"],
        preview: "NA-01.png",
        images: [
          { src: "/images/NA-01.png", alt: "Neue App exploration 1" },
          { src: "/images/NA-02.png", alt: "Neue App exploration 2" },
          { src: "/images/NA-03.png", alt: "Neue App exploration 3" },
          { src: "/images/NA-04.png", alt: "Neue App exploration 4" },
          { src: "/images/NA-05.png", alt: "Neue App exploration 5" },
          { src: "/images/NA-06.png", alt: "Neue App exploration 6" },
          { src: "/images/NA-07.png", alt: "Neue App exploration 7" },
          { src: "/images/NA-08.png", alt: "Neue App exploration 8" },
          { src: "/images/NA-09.png", alt: "Neue App exploration 9" },
          { src: "/images/NA-10.png", alt: "Neue App exploration 10" },
          { src: "/images/NA-11.png", alt: "Neue App exploration 11" },
          { src: "/images/NA-12.png", alt: "Neue App exploration 12" },
          { src: "/images/NA-13.png", alt: "Neue App exploration 13" },
          { src: "/images/NA-14.png", alt: "Neue App exploration 14" }
        ]
      },
      {
        id: 4,
        title: "Make It Better",
        description: "Research, design, and prototype a new interaction within an Apple app",
        longDescription: "Research, design, and prototype a new interaction within the latest operating system of an Apple app which is consistent with the original application design and improves or is compatible with the core function of the app.",
        tags: ["Figma"],
        preview: "MIB-01.png",
        images: [
          { src: "/images/MIB-01.png", alt: "Make It Better exploration 1" },
          { src: "/images/MIB-02.png", alt: "Make It Better exploration 2" },
          { src: "/images/MIB-03.png", alt: "Make It Better exploration 3" },
          { src: "/images/MIB-04.png", alt: "Make It Better exploration 4" },
          { src: "/images/MIB-05.png", alt: "Make It Better exploration 5" },
          { src: "/images/MIB-06.png", alt: "Make It Better exploration 6" }
        ]
      }
    ],
    projects: [
      {
        id: 1,
        title: "Dairy Farm Inventory System",
        description: "Full-stack inventory management system for tracking farm medications and supplies. Built with Node.js, Express, and PostgreSQL with role-based access control and comprehensive audit logging.",
        longDescription: "A full-stack dairy farm inventory system that allows staff to track medications, equipment, and supplies across different departments. Features include user authentication, role-based access control (Admin vs User views), real-time inventory tracking with quantity management, image uploads for medications, and detailed audit logging of all system changes. Test the live app with default credentials: Username: karlie | Password: kw (admin access)",
        tags: ["Node.js", "Express", "PostgreSQL", "Supabase", "EJS", "Render"],
        emoji: "🐄",
        github: "https://dairy-farm-inventory.onrender.com",
        images: []
      },
      {
        id: 2,
        title: "Luna - Sleep Guardian",
        description: "Full-stack sleep optimization and task management app built with a team using Scrum. Helps users protect their sleep schedule while managing daily tasks and calendar events.",
        longDescription: "Luna is a comprehensive sleep optimization platform developed collaboratively using Scrum methodology. The app features sleep goal tracking, daily sleep check-ins with mood and sleep quality insights, task management with priority and due dates, calendar integration with event conflict detection, and bedtime reminders with email and SMS delivery. Users can view personalized sleep insights through charts, receive schedule-shifting suggestions to accommodate sleep goals, and track their sleep streak. Built with React 18 + TypeScript frontend, Node.js + Express backend, PostgreSQL database, and session-based authentication.",
        tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Scrum"],
        emoji: "🌙",
        github: "https://github.com/karlieward/sleep-guardian",
        images: []
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
