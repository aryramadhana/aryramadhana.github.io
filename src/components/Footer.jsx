/**
 * Footer
 *
 * Dark footer bar with brand, copyright, and social links.
 */
function Footer() {
  const links = [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Medium', href: '#' },
  ]

  return (
    <footer style={{
      background: 'var(--dark)',
      padding: '40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    }} className="footer">
      {/* Brand */}
      <div style={{ fontFamily: 'Fraunces, serif', fontSize: '20px', fontWeight: 900, color: '#fff' }}>
        hary<span style={{ color: 'var(--green)' }}>.</span>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: '12px', color: 'var(--gray-l)' }} className="footer-copy">
        © 2025 — HaryRNasution · Jakarta, ID
      </div>

      {/* Links */}
      {/* <div style={{ display: 'flex', gap: '20px' }}>
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{ fontSize: '12px', color: 'var(--gray-l)', textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--green)'}
            onMouseLeave={e => e.target.style.color = 'var(--gray-l)'}
          >
            {label}
          </a>
        ))}
      </div> */}

      <style>{`
        @media (max-width: 768px) {
          .footer {
            padding: 32px 24px;
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          .footer-copy {
            order: 3;
            width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .footer {
            padding: 24px 16px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
