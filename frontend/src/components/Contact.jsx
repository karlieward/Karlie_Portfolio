import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ color: '#FF6B6B' }}>Get In Touch</div>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: 16 }}>
            Let's build something
            <span style={{
              background: 'linear-gradient(90deg, #FFD166, #FF6B6B)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              display: 'block',
            }}> great together.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 52, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Whether you have a project in mind, want to chat about design + code, or just want to say hi —
            my inbox is always open.
          </p>

          {/* Contact form */}
          <form onSubmit={handleSubmit} style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-lg)',
            padding: 40,
            textAlign: 'left',
            display: 'flex', flexDirection: 'column', gap: 20,
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              <FormField label="Your Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Smith" />
              <FormField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" />
            </div>
            <FormField label="Message" name="message" type="textarea" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', fontSize: '1rem', opacity: status === 'sending' ? 0.7 : 1 }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message ✉️'}
            </button>

            {status === 'success' && (
              <div style={{
                background: 'rgba(6,214,160,0.15)', border: '1px solid rgba(6,214,160,0.3)',
                borderRadius: 'var(--radius-sm)', padding: '12px 16px',
                color: '#06D6A0', fontWeight: 600, fontSize: '0.9rem',
                fontFamily: 'Plus Jakarta Sans',
              }}>
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{
                background: 'rgba(255,107,107,0.15)', border: '1px solid rgba(255,107,107,0.3)',
                borderRadius: 'var(--radius-sm)', padding: '12px 16px',
                color: '#FF6B6B', fontWeight: 600, fontSize: '0.9rem',
                fontFamily: 'Plus Jakarta Sans',
              }}>
                ✗ Something went wrong. Try emailing me directly at karlie3@byu.edu
              </div>
            )}
          </form>

          {/* Direct links */}
          <div style={{
            marginTop: 40, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16
          }}>
            {[
              { label: 'karlie3@byu.edu', href: 'mailto:karlie3@byu.edu', emoji: '✉️' },
              { label: 'LinkedIn', href: 'https://linkedin.com', emoji: '💼' },
              { label: 'GitHub', href: 'https://github.com', emoji: '🐙' },
            ].map(link => (
              <a key={link.label} href={link.href}
                 style={{
                   display: 'flex', alignItems: 'center', gap: 8,
                   background: 'rgba(255,255,255,0.06)',
                   border: '1px solid rgba(255,255,255,0.1)',
                   borderRadius: 100, padding: '10px 20px',
                   color: 'rgba(255,255,255,0.8)',
                   fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: '0.9rem',
                   transition: 'all 0.2s',
                 }}
                 onMouseEnter={e => {
                   e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                   e.currentTarget.style.color = '#fff'
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                   e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                 }}
              >
                <span>{link.emoji}</span> {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type, value, onChange, placeholder }) {
  const baseStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 'var(--radius-sm)',
    padding: '14px 16px',
    color: '#fff',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label style={{
        fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.7)',
      }}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={name} value={value} onChange={onChange}
          placeholder={placeholder} required rows={5}
          style={{ ...baseStyle, resize: 'vertical' }}
          onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
        />
      ) : (
        <input
          type={type} name={name} value={value} onChange={onChange}
          placeholder={placeholder} required
          style={baseStyle}
          onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
        />
      )}
    </div>
  )
}
