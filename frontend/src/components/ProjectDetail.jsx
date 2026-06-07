import { useState, useEffect } from 'react'
import dairy1 from '../assets/images/dairy-1.jpg'
import dairy2 from '../assets/images/dairy-2.jpg'
import dairy3 from '../assets/images/dairy-3.jpg'
import dairy4 from '../assets/images/dairy-4.jpg'
import dairy5 from '../assets/images/dairy-5.jpg'
import wf0 from '../assets/images/WF-00.png'
import wf1 from '../assets/images/WF-01.svg'
import wf2 from '../assets/images/WF-02.svg'
import wf3 from '../assets/images/WF-03.svg'
import wf4 from '../assets/images/WF-04.svg'
import hw1 from '../assets/images/HW-01.png'
import hw2 from '../assets/images/HW-02.png'
import hw3 from '../assets/images/HW-03.png'
import hw4 from '../assets/images/HW-04.png'
import hw5 from '../assets/images/HW-05.png'
import hw6 from '../assets/images/HW-06.png'
import hw7 from '../assets/images/HW-07.png'
import na1 from '../assets/images/NA-01.png'
import na2 from '../assets/images/NA-02.png'
import na3 from '../assets/images/NA-03.png'
import na4 from '../assets/images/NA-04.png'
import na5 from '../assets/images/NA-05.png'
import na6 from '../assets/images/NA-06.png'
import na7 from '../assets/images/NA-07.png'
import na8 from '../assets/images/NA-08.png'
import na9 from '../assets/images/NA-09.png'
import na10 from '../assets/images/NA-10.png'
import na11 from '../assets/images/NA-11.png'
import na12 from '../assets/images/NA-12.png'
import na13 from '../assets/images/NA-13.png'
import na14 from '../assets/images/NA-14.png'

const imageMap = {
  'dairy-1.jpg': dairy1,
  'dairy-2.jpg': dairy2,
  'dairy-3.jpg': dairy3,
  'dairy-4.jpg': dairy4,
  'dairy-5.jpg': dairy5,
  'WF-00.png': wf0,
  'WF-01.svg': wf1,
  'WF-02.svg': wf2,
  'WF-03.svg': wf3,
  'WF-04.svg': wf4,
  'HW-01.png': hw1,
  'HW-02.png': hw2,
  'HW-03.png': hw3,
  'HW-04.png': hw4,
  'HW-05.png': hw5,
  'HW-06.png': hw6,
  'HW-07.png': hw7,
  'NA-01.png': na1,
  'NA-02.png': na2,
  'NA-03.png': na3,
  'NA-04.png': na4,
  'NA-05.png': na5,
  'NA-06.png': na6,
  'NA-07.png': na7,
  'NA-08.png': na8,
  'NA-09.png': na9,
  'NA-10.png': na10,
  'NA-11.png': na11,
  'NA-12.png': na12,
  'NA-13.png': na13,
  'NA-14.png': na14,
}

export default function ProjectDetail({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [project])

  if (!project) return null;

  return (
    <section id="project-detail" className="section" style={{ borderTop: '1px solid #e5e7eb', background: '#fafafa' }}>
      <div className="container">
        {/* Back button */}
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            padding: '8px 0',
            color: '#6b7280',
            cursor: 'pointer',
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: '0.95rem',
            marginBottom: 40,
            transition: 'color 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--dark)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6b7280'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Portfolio
        </button>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Project Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: '4rem', marginBottom: 24 }}>{project.emoji}</div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: 'var(--dark)' }}>
              {project.title}
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: 1.8, marginBottom: 24 }}>
              {project.longDescription || project.description}
            </p>

            {/* Tech Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {project.tags.map(tag => (
                <span key={tag} style={{
                  padding: '6px 12px',
                  borderRadius: 6,
                  background: '#f3f4f6',
                  color: 'var(--dark)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  fontFamily: 'Plus Jakarta Sans',
                }}>{tag}</span>
              ))}
            </div>

            {/* GitHub Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 16px',
                  borderRadius: 6,
                  background: 'var(--dark)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                View on GitHub
              </a>
            )}
          </div>

          {/* Images Gallery */}
          {project.images && project.images.length > 0 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}>
              {project.images.map((image, idx) => {
                const filename = image.src.split('/').pop()
                const imageSrc = imageMap[filename] || image.src
                return (
                  <div key={idx} style={{ borderTop: idx > 0 ? '1px solid #e5e7eb' : 'none', paddingTop: idx > 0 ? 40 : 0 }}>
                    <img
                      src={imageSrc}
                      alt={image.alt}
                      onClick={() => setSelectedImage(imageSrc)}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        cursor: 'pointer',
                        marginBottom: idx < project.images.length - 1 ? 90 : 0,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}
          >
            <img
              src={selectedImage}
              alt="Full size"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 'var(--radius-lg)',
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 1)'
                e.target.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.9)'
                e.target.style.transform = 'scale(1)'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
