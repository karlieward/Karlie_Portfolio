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
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/karlieward/" target="_blank" rel="noopener noreferrer"
                 style={{
                   fontSize: '0.95rem',
                   color: 'var(--dark)',
                   fontWeight: 600,
                   textDecoration: 'none',
                   transition: 'color 0.3s',
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#6C63FF'}
                 onMouseLeave={(e) => e.target.style.color = 'var(--dark)'}
              >
                LinkedIn
              </a>
              <a href="https://github.com/karlieward" target="_blank" rel="noopener noreferrer"
                 style={{
                   fontSize: '0.95rem',
                   color: 'var(--dark)',
                   fontWeight: 600,
                   textDecoration: 'none',
                   transition: 'color 0.3s',
                 }}
                 onMouseEnter={(e) => e.target.style.color = '#6C63FF'}
                 onMouseLeave={(e) => e.target.style.color = 'var(--dark)'}
              >
                GitHub
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
