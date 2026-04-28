import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { PROJECTS, CATEGORIES, TOOLS } from '@/constants/projects'

/**
 * ProjectsSection
 *
 * Displays a filterable project grid with category and tool filters.
 * Manages filter state and modal open/close state.
 */
function ProjectsSection() {
  const [activeCat,  setActiveCat]  = useState('all')
  const [activeTool, setActiveTool] = useState('all')
  const [openProject, setOpenProject] = useState(null)

  const filtered = PROJECTS.filter(p => {
    const catOk  = activeCat  === 'all' || p.category === activeCat
    const toolOk = activeTool === 'all' || p.tools.includes(activeTool)
    return catOk && toolOk
  })

  return (
    <section id="projects" className="section projects" style={{ background: 'var(--gray-lll)' }}>
      <div className="section-eyebrow fade-up">Selected Work</div>
      <h2 className="section-title fade-up d1">Projects that <em>moved the needle.</em></h2>

      {/* ── Filter Bar ── */}
      <div style={{ marginBottom: '36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Category Filter */}
        <FilterRow label="Category">
          {CATEGORIES.map(cat => (
            <FilterBtn
              key={cat}
              active={activeCat === cat}
              onClick={() => setActiveCat(cat)}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </FilterBtn>
          ))}
        </FilterRow>

        {/* Tool Filter */}
        <FilterRow label="Tool">
          {TOOLS.map(tool => (
            <FilterBtn
              key={tool}
              active={activeTool === tool}
              onClick={() => setActiveTool(tool)}
            >
              {tool === 'all' ? 'All' : tool}
            </FilterBtn>
          ))}
        </FilterRow>
      </div>

      {/* ── Project Grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
        {filtered.length === 0 ? (
          <div style={{
            gridColumn: 'span 3', textAlign: 'center',
            padding: '60px', color: 'var(--gray)',
          }}>
            No projects match these filters.
          </div>
        ) : (
          filtered.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setOpenProject}
            />
          ))
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
      />
    </section>
  )
}

/* ── Sub-components ─────────────────────────── */

function FilterRow({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
      <span style={{
        fontFamily: 'Fira Code, monospace', fontSize: '10px',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'var(--gray-l)', minWidth: '72px',
      }}>
        {label}
      </span>
      {children}
    </div>
  )
}

function FilterBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: '12px', fontWeight: 500,
        padding: '7px 16px', borderRadius: '50px',
        border: `1.5px solid ${active ? 'var(--green)' : 'var(--gray-ll)'}`,
        background: active ? 'var(--green)' : 'var(--white)',
        color: active ? '#fff' : 'var(--gray)',
        cursor: 'pointer', transition: 'all .2s',
      }}
    >
      {children}
    </button>
  )
}

export default ProjectsSection
