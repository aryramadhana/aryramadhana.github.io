import { useEffect } from 'react'

/**
 * ProjectModal
 *
 * Animated overlay modal showing full project details.
 * Closes on overlay click, close button, or Escape key.
 *
 * @param {Object|null} project  - the currently selected project (null = closed)
 * @param {Function}    onClose  - callback to close the modal
 */
function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  const isOpen = !!project

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(15,23,42,0.6)', zIndex: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
        transition: 'opacity .3s',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div style={{
        background: 'var(--white)', borderRadius: 'var(--radius)',
        width: 'min(640px,90vw)', maxHeight: '85vh', overflowY: 'auto',
        padding: '40px', position: 'relative',
        transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
        transition: 'transform .3s',
        boxShadow: '0 32px 80px rgba(0,0,0,0.2)',
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'var(--gray-lll)', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', color: 'var(--gray)', transition: 'all .2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--green)'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--gray-lll)'
            e.currentTarget.style.color = 'var(--gray)'
          }}
        >
          ✕
        </button>

        {project && (
          <>
            {/* Thumbnail */}
            <div style={{
              height: '200px', borderRadius: 'var(--radius-sm)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '72px', background: project.bg, marginBottom: '24px',
            }}>
              {project.emoji}
            </div>

            {/* Category */}
            <div style={{
              fontFamily: 'Fira Code, monospace', fontSize: '10px',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--green)', marginBottom: '8px',
            }}>
              {project.category}
            </div>

            {/* Title */}
            <div style={{
              fontFamily: 'Fraunces, serif', fontSize: '28px', fontWeight: 900,
              letterSpacing: '-0.02em', marginBottom: '12px',
            }}>
              {project.title}
            </div>

            {/* Full Description */}
            <div style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.8, marginBottom: '20px' }}>
              {project.fullDesc}
            </div>

            {/* Tools */}
            <SectionLabel>Tools & Technologies</SectionLabel>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '8px' }}>
              {project.toolsLabel.map(t => (
                <span
                  key={t}
                  style={{
                    fontSize: '11px', fontWeight: 600, padding: '5px 12px',
                    background: 'var(--green-ll)', color: 'var(--green-dd)',
                    borderRadius: '6px', border: '1px solid rgba(34,197,94,0.25)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <SectionLabel>Key Highlights</SectionLabel>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.highlights.map(h => (
                <li
                  key={h}
                  style={{
                    fontSize: '13px', color: 'var(--gray)',
                    paddingLeft: '18px', position: 'relative', lineHeight: 1.6,
                  }}
                >
                  <span style={{
                    position: 'absolute', left: 0,
                    color: 'var(--green)', fontWeight: 700,
                  }}>→</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
              <button className="btn-prim" style={{ fontSize: '12px', padding: '11px 22px' }}>
                🔗 View Live
              </button>
              <button className="btn-outline" style={{ fontSize: '12px', padding: '10px 20px' }}>
                ⬡ GitHub
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '0.1em', color: 'var(--dark)',
      marginBottom: '10px', marginTop: '20px',
    }}>
      {children}
    </div>
  )
}

export default ProjectModal
