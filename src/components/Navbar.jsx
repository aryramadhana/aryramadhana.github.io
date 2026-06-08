import { useState } from 'react'

/**
 * Navbar
 *
 * Fixed top navigation bar with glass-morphism effect.
 * Responsive: desktop menu, mobile hamburger on small screens.
 */
function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleHireClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileOpen(false)
  }

  const handleNavClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <>
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

        {/* Nav Links - Desktop */}
        <ul style={{
          display: 'flex', gap: '28px', listStyle: 'none',
          '@media (max-width: 768px)': { display: 'none' },
        }}>
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            fontSize: '24px', cursor: 'pointer', color: 'var(--dark)',
            '@media (max-width: 768px)': { display: 'block' },
          }}
          className="mobile-menu-btn"
        >
          {isMobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 199,
          background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(14px)',
          padding: '20px 40px', borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none' }}>
            {[
              { label: 'About',    href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact',  href: '#contact' },
            ].map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  style={{
                    fontSize: '14px', fontWeight: 500,
                    color: 'var(--gray)', textDecoration: 'none',
                    display: 'block', padding: '8px 0',
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
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav ul {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
