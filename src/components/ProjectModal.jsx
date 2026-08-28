import { useEffect, useRef } from 'react'

/**
 * ProjectModal
 *
 * Overlay modal showing full project details. Mounted only while a project
 * is selected (see ProjectsSection). Traps focus while open, restores it to
 * the trigger on close, and closes on overlay click, close button, or Escape.
 *
 * @param {Object}   project  - the currently selected project
 * @param {Function} onClose  - callback to close the modal
 */
function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    panelRef.current?.focus()

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      className="fixed inset-0 z-[500] flex items-center justify-center bg-dark/60 backdrop-blur-[4px]"
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[90vh] w-[min(640px,90vw)] overflow-y-auto rounded-xl bg-white p-4 py-6 shadow-[0_32px_80px_rgba(0,0,0,0.2)] outline-none xs:max-h-[85vh] xs:rounded xs:px-6 xs:py-8 md:p-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border-0 bg-gray-lightest text-base text-gray transition-all duration-200 hover:bg-green hover:text-white xs:h-9 xs:w-9 xs:text-lg"
        >
          ✕
        </button>

        {/* Thumbnail */}
        <div
          className="mb-4 flex h-[140px] items-center justify-center overflow-hidden rounded-sm xs:mb-6 xs:h-40 md:h-[200px]"
          style={{ background: project.bg }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Category */}
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-green">
          {project.category}
        </div>

        {/* Title */}
        <h3 id="project-modal-title" className="mb-3 font-serif text-[28px] font-black tracking-[-0.02em]">
          {project.title}
        </h3>

        {/* Full Description */}
        <div className="mb-5 text-sm leading-[1.8] text-gray">
          {project.fullDesc}
        </div>

        {/* Tools */}
        <SectionLabel>Tools &amp; Technologies</SectionLabel>
        <div className="mb-2 flex flex-wrap gap-[7px]">
          {project.toolsLabel.map(t => (
            <span
              key={t}
              className="rounded-xs border border-green/25 bg-green-lighter px-3 py-[5px] text-[11px] font-semibold text-green-darker"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <SectionLabel>Key Highlights</SectionLabel>
        <ul className="flex list-none flex-col gap-2">
          {project.highlights.map(h => (
            <li
              key={h}
              className="relative pl-[18px] text-[13px] leading-[1.6] text-gray"
            >
              <span className="absolute left-0 font-bold text-green">→</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-7 flex gap-3">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="no-underline">
            <button className="inline-flex items-center gap-2 rounded-full border-0 bg-green px-[22px] py-[11px] text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-[0_8px_24px_rgba(34,197,94,0.35)]">
              🔗 View Project
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="mb-2.5 mt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-dark">
      {children}
    </div>
  )
}

export default ProjectModal
