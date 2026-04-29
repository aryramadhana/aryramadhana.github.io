import { useState } from 'react'

/**
 * ContactSection
 *
 * Two-column layout: contact info on the left, contact form on the right.
 * Includes basic form state management.
 */
function ContactSection() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Wire up to your email service or API
    console.log('Form submitted:', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      className="section contact"
      style={{ background: 'linear-gradient(135deg,var(--green-ll) 0%,var(--white) 100%)' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

        {/* ── Left: Info ── */}
        <div>
          <div className="section-eyebrow fade-up">Get In Touch</div>
          <h2 className="section-title fade-up d1">
            Let's <em>build</em> something great together.
          </h2>
          <p className="fade-up d2" style={{
            fontSize: '14px', color: 'var(--gray)', lineHeight: 1.8, marginBottom: '8px',
          }}>
            Open to full-time roles, freelance projects, and consulting engagements.
            Based in Jakarta — available remotely worldwide.
          </p>

          <div className="contact-info fade-up d3" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '28px' }}>
            {[
              { icon: '📧', label: 'Email', value: 'haryrnasution@gmail.com' },
              { icon: '📍', label: 'Location', value: 'Jakarta, Indonesia' },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/hary-ramadhana-n' },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'var(--green-ll)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-l)' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--dark)' }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Form ── */}
        {/* <div className="fade-up d2" style={{
          background: 'var(--white)', borderRadius: 'var(--radius)',
          padding: '40px', boxShadow: 'var(--shadow-lg)',
        }}>
          <form onSubmit={handleSubmit}> */}
        {/* Name Row */}
        {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
              <FormGroup label="First Name">
                <input
                  className="form-inp"
                  name="firstName"
                  placeholder="Reza"
                  value={form.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.background = 'var(--white)' }}
                  onBlur={e =>  { e.target.style.borderColor = 'var(--gray-ll)'; e.target.style.background = 'var(--gray-lll)' }}
                /> */}
        {/* </FormGroup> */}
        {/* <FormGroup label="Last Name">
                <input
                  name="lastName"
                  placeholder="Pratama"
                  value={form.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.background = 'var(--white)' }}
                  onBlur={e =>  { e.target.style.borderColor = 'var(--gray-ll)'; e.target.style.background = 'var(--gray-lll)' }}
                />
              </FormGroup>
            </div> */}

        {/* <FormGroup label="Email Address" style={{ marginBottom: '16px' }}>
              <input
                type="email" name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.background = 'var(--white)' }}
                onBlur={e =>  { e.target.style.borderColor = 'var(--gray-ll)'; e.target.style.background = 'var(--gray-lll)' }}
              />
            </FormGroup> */}

        {/* <FormGroup label="Phone Number" style={{ marginBottom: '16px' }}>
              <input
                type="tel" name="phone"
                placeholder="+62 812 ..."
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.background = 'var(--white)' }}
                onBlur={e =>  { e.target.style.borderColor = 'var(--gray-ll)'; e.target.style.background = 'var(--gray-lll)' }}
              />
            </FormGroup>

            <FormGroup label="Your Message" style={{ marginBottom: '16px' }}>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                style={{ ...inputStyle, height: '110px', resize: 'none' }}
                onFocus={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.background = 'var(--white)' }}
                onBlur={e =>  { e.target.style.borderColor = 'var(--gray-ll)'; e.target.style.background = 'var(--gray-lll)' }}
              />
            </FormGroup> */}

        {/* <button
              type="submit"
              style={{
                width: '100%', fontSize: '13px', fontWeight: 700, color: '#fff',
                background: submitted ? 'var(--green-d)' : 'var(--green)',
                border: 'none', padding: '14px',
                borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                transition: 'all .25s', marginTop: '4px',
              }}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message ✦'} */}
        {/* </button> */}
        {/* </form>
        </div> */}
      </div>
    </section>
  )
}

/* ── Sub-components ─────────────────────────── */

function FormGroup({ label, children, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', ...style }}>
      <label style={{
        fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em',
        textTransform: 'uppercase', color: 'var(--gray)',
      }}>
        {label}
      </label>
      {children}
    </div>
  )
}

const inputStyle = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: '13px', padding: '12px 16px',
  border: '1.5px solid var(--gray-ll)',
  borderRadius: 'var(--radius-sm)',
  outline: 'none', width: '100%',
  background: 'var(--gray-lll)', color: 'var(--dark)',
  transition: 'border-color .2s, background .2s',
}

export default ContactSection
