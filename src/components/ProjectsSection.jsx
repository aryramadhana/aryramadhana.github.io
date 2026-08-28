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
  const [activeCat, setActiveCat] = useState('all')
  const [activeTool, setActiveTool] = useState('all')
  const [openProject, setOpenProject] = useState(null)
  const [triggerEl, setTriggerEl] = useState(null)

  const filtered = PROJECTS.filter(p => {
    const catOk = activeCat === 'all' || p.category.toLowerCase() === activeCat.toLowerCase()
    const toolOk = activeTool === 'all' || p.tools.map(t => t.toLowerCase()).includes(activeTool.toLowerCase())
    return catOk && toolOk
  })

  function handleCatChange(cat) {
    setActiveCat(cat)
    setActiveTool('all')
  }

  function handleToolChange(tool) {
    setActiveTool(tool)
    setActiveCat('all')
  }

  function openProjectModal(project, trigger) {
    setTriggerEl(trigger ?? null)
    setOpenProject(project)
  }

  function closeProjectModal() {
    setOpenProject(null)
    triggerEl?.focus()
  }

  return (
    <section
      id="projects"
      className="bg-gray-lightest px-4 py-12 xs:px-6 xs:py-[60px] md:px-8 md:py-[70px] lg:px-10 lg:py-[90px]"
    >
      <div className="fade-up mb-2.5 font-mono text-[10px] font-light uppercase tracking-[0.2em] text-green md:text-[11px]">Selected Work</div>
      <h2 className="fade-up d1 mb-4 font-serif text-[clamp(20px,5vw,32px)] font-black leading-[1.1] tracking-[-0.03em] xs:text-[clamp(24px,3vw,36px)] md:text-[clamp(32px,4vw,48px)]">
        Projects that <em className="italic text-green">moved the needle.</em>
      </h2>

      {/* ── Filter Bar ── */}
      <div className="mb-9 flex flex-col gap-3">
        {/* Category Filter */}
        <FilterRow label="Category">
          {CATEGORIES.map(cat => (
            <FilterBtn
              key={cat}
              active={activeCat === cat}
              onClick={() => handleCatChange(cat)}
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
              onClick={() => handleToolChange(tool)}
            >
              {tool === 'all' ? 'All' : tool}
            </FilterBtn>
          ))}
        </FilterRow>
      </div>

      {/* ── Project Grid ── */}
      <div className="grid grid-cols-1 gap-[14px] xs:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xs:gap-4 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:gap-[18px] lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:gap-5">
        {filtered.length === 0 ? (
          <div className="col-span-full py-[60px] text-center text-gray">
            No projects match these filters.
          </div>
        ) : (
          filtered.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={(p) => openProjectModal(p, document.activeElement)}
            />
          ))
        )}
      </div>

      {/* Modal */}
      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={closeProjectModal}
        />
      )}
    </section>
  )
}

/* ── Sub-components ─────────────────────────── */

function FilterRow({ label, children }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="min-w-[72px] font-mono text-[10px] uppercase tracking-[0.15em] text-gray-light">
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
      aria-pressed={active}
      className={`whitespace-nowrap rounded-full border-[1.5px] px-4 py-[7px] text-xs font-medium transition-all duration-200 ${
        active
          ? 'border-green bg-green text-white'
          : 'border-gray-lighter bg-white text-gray'
      }`}
    >
      {children}
    </button>
  )
}

export default ProjectsSection
