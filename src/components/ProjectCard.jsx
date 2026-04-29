/**
 * ProjectCard
 *
 * Single project card shown in the projects grid.
 * Clicking it opens the ProjectModal with full details.
 *
 * @param {Object} project - project data object from constants/projects.js
 * @param {Function} onOpen - callback to open modal with this project
 */
function ProjectCard({ project, onOpen }) {
  const { image, bg, category, title, desc, toolsLabel } = project
  const visibleTools = toolsLabel.slice(0, 3)
  const remainingCount = toolsLabel.length - 3

  return (
    <div
      className="proj-card fade-up"
      onClick={() => onOpen(project)}
      style={{
        background: 'var(--white)', borderRadius: 'var(--radius)',
        overflow: 'hidden', boxShadow: 'var(--shadow)', cursor: 'pointer',
        transition: 'all .3s', border: '1.5px solid transparent',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
        e.currentTarget.style.borderColor = 'var(--green)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = 'var(--shadow)'
        e.currentTarget.style.borderColor = 'transparent'
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: '160px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '48px', background: bg,
      }}>
        <img src={project.image} style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Membuat gambar memenuhi kotak tanpa merusak proporsi (tidak gepeng)
        }} alt="" />
      </div>

      {/* Body */}
      <div style={{ padding: '20px' }}>
        <div style={{
          fontFamily: 'Fira Code, monospace', fontSize: '9px',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--green)', marginBottom: '8px',
        }}>
          {category}
        </div>
        <div style={{
          fontSize: '15px', fontWeight: 700, color: 'var(--dark)',
          marginBottom: '8px', lineHeight: 1.3,
        }}>
          {title}
        </div>
        <div style={{
          fontSize: '12px', color: 'var(--gray)', lineHeight: 1.7, marginBottom: '14px',
        }}>
          {desc}
        </div>

        {/* Tool Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {visibleTools.map(tool => (
            <span
              key={tool}
              style={{
                fontSize: '10px', fontWeight: 500,
                padding: '3px 9px',
                background: 'var(--gray-lll)', color: 'var(--gray)',
                borderRadius: '4px', border: '1px solid var(--gray-ll)',
              }}
            >
              {tool}
            </span>
          ))}
          {remainingCount > 0 && (
            <span style={{
              fontSize: '10px', fontWeight: 500,
              padding: '3px 9px',
              background: 'var(--gray-lll)', color: 'var(--gray)',
              borderRadius: '4px', border: '1px solid var(--gray-ll)',
            }}>
              +{remainingCount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
