/**
 * Navbar
 *
 * Fixed top navigation bar with glass-morphism effect.
 * Contains brand logo, nav links, and hire-me CTA button.
 */
function Navbar() {
  const handleHireClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      padding: '0 40px', height: '68px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      {/* Brand */}
      <div style={{
        fontFamily: 'Fraunces, serif', fontSize: '22px', fontWeight: 900,
        color: 'var(--dark)', letterSpacing: '-0.02em',
      }}>
        hary<span style={{ color: 'var(--green)' }}>.</span>
      </div>

      {/* Nav Links */}
      <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }}>
        {[
          { label: 'About',    href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact',  href: '#contact' },
        ].map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              style={{
                fontSize: '13px', fontWeight: 500,
                color: 'var(--gray)', textDecoration: 'none',
                transition: 'color .2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--green)'}
              onMouseLeave={e => e.target.style.color = 'var(--gray)'}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="nav-btn" onClick={handleHireClick} style={{
        fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em',
        color: '#fff', background: 'var(--green)', border: 'none',
        padding: '10px 22px', borderRadius: '50px', cursor: 'pointer',
        transition: 'all .2s',
      }}>
        ✦ Hire Me
      </button>
    </nav>
  )
}

export default Navbar
