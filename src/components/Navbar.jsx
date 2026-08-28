import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

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
      <nav className="fixed left-0 right-0 top-0 z-[200] flex h-[68px] items-center justify-between border-b border-black/[.06] bg-white/[.88] px-10 backdrop-blur-[14px]">
        {/* Brand */}
        <div className="font-serif text-[22px] font-black tracking-[-0.02em] text-dark">
          hary<span className="text-green">.</span>
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden list-none gap-7 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[13px] font-medium text-gray no-underline transition-colors duration-200 hover:text-green"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={handleHireClick}
          className="rounded-full border-0 bg-green px-[22px] py-2.5 text-xs font-bold tracking-[0.05em] text-white transition-all duration-200"
        >
          ✦ Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          className="border-0 bg-transparent text-2xl text-dark md:hidden"
        >
          {isMobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="fixed left-0 right-0 top-[68px] z-[199] border-b border-black/[.06] bg-white/95 px-10 py-5 backdrop-blur-[14px]"
        >
          <ul className="flex list-none flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className="block py-2 text-sm font-medium text-gray no-underline transition-colors duration-200 hover:text-green"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
