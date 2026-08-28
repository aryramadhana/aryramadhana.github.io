/**
 * Footer
 *
 * Dark footer bar with brand and copyright.
 */
function Footer() {
  return (
    <footer className="bg-dark flex flex-col items-center gap-3 px-4 py-6 text-center xs:px-6 xs:py-8 md:flex-row md:justify-between md:gap-5 md:p-10 md:text-left">
      <div className="font-serif text-xl font-black text-white">
        hary<span className="text-green">.</span>
      </div>
      <div className="text-xs text-gray-light">
        © 2025 — HaryRNasution · Jakarta, ID
      </div>
    </footer>
  )
}

export default Footer
