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
    <section id="contact" className="kw-section">
      <div className="kw-container kw-about">
        <h2 className="kw-about-title">Let’s get in touch.</h2>

        <form onSubmit={handleSubmit} className="kw-form">
          <div className="kw-form-row">
            <label className="kw-field">
              <span>Your name</span>
              <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Smith" required />
            </label>
            <label className="kw-field">
              <span>Email address</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" required />
            </label>
          </div>
          <label className="kw-field">
            <span>Message</span>
            <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project or team" required />
          </label>

          <button type="submit" className="kw-button" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && <p className="kw-form-note">Message sent. I’ll get back to you soon.</p>}
          {status === 'error' && (
            <p className="kw-form-note">
              That didn’t go through. You can email me directly at <a href="mailto:karlie3@byu.edu">karlie3@byu.edu</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
