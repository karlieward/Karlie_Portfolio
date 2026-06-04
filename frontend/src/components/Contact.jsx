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
    <section id="contact" className="section" style={{ background: '#fafafa', borderTop: '1px solid #e5e7eb' }}>
      <div className="container">
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Let's talk.</h2>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} style={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: 'var(--radius-lg)',
            padding: 36,
            display: 'flex', flexDirection: 'column', gap: 20,
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <FormField label="Your Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Smith" />
              <FormField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" />
            </div>
            <FormField label="Message" name="message" type="textarea" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary"
              style={{ alignSelf: 'center', fontSize: '0.9rem', opacity: status === 'sending' ? 0.7 : 1 }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div style={{
                background: '#e8f8f5', border: '1px solid #a3e4d7',
                borderRadius: 'var(--radius-sm)', padding: '12px 16px',
                color: '#048a69', fontWeight: 600, fontSize: '0.9rem',
                fontFamily: 'Plus Jakarta Sans',
              }}>
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{
                background: '#ffe8e8', border: '1px solid #ffb3b3',
                borderRadius: 'var(--radius-sm)', padding: '12px 16px',
                color: '#d32f2f', fontWeight: 600, fontSize: '0.9rem',
                fontFamily: 'Plus Jakarta Sans',
              }}>
                ✗ Something went wrong. Try emailing me directly at karlie3@byu.edu
              </div>
            )}
          </form>

          {/* Email fallback and social links */}
          <div style={{
            marginTop: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16
          }}>
            <p style={{ fontSize: '0.95rem', color: '#6b7280', margin: 0 }}>
              Or email me directly at <a href="mailto:karlie3@byu.edu" style={{ color: 'var(--dark)', fontWeight: 600, textDecoration: 'none' }}>karlie3@byu.edu</a>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/karlieward/" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   width: 44,
                   height: 44,
                   borderRadius: '50%',
                   background: '#f3f4f6',
                   color: '#0077B5',
                   transition: 'all 0.3s',
                   textDecoration: 'none',
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.background = '#0077B5'
                   e.currentTarget.style.color = '#fff'
                   e.currentTarget.style.transform = 'scale(1.1)'
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.background = '#f3f4f6'
                   e.currentTarget.style.color = '#0077B5'
                   e.currentTarget.style.transform = 'scale(1)'
                 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                </svg>
              </a>
              <a href="https://github.com/karlieward" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   width: 44,
                   height: 44,
                   borderRadius: '50%',
                   background: '#f3f4f6',
                   color: '#333',
                   transition: 'all 0.3s',
                   textDecoration: 'none',
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.background = '#333'
                   e.currentTarget.style.color = '#fff'
                   e.currentTarget.style.transform = 'scale(1.1)'
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.background = '#f3f4f6'
                   e.currentTarget.style.color = '#333'
                   e.currentTarget.style.transform = 'scale(1)'
                 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type, value, onChange, placeholder }) {
  const baseStyle = {
    width: '100%',
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: 'var(--radius-sm)',
    padding: '12px 14px',
    color: 'var(--dark)',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{
        fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: '0.85rem',
        color: 'var(--dark)',
      }}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={name} value={value} onChange={onChange}
          placeholder={placeholder} required rows={5}
          style={{ ...baseStyle, resize: 'vertical' }}
          onFocus={e => e.target.style.borderColor = '#6C63FF'}
          onBlur={e => e.target.style.borderColor = '#e5e7eb'}
        />
      ) : (
        <input
          type={type} name={name} value={value} onChange={onChange}
          placeholder={placeholder} required
          style={baseStyle}
          onFocus={e => e.target.style.borderColor = '#6C63FF'}
          onBlur={e => e.target.style.borderColor = '#e5e7eb'}
        />
      )}
    </div>
  )
}
