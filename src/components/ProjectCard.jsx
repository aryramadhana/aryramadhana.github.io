/**
 * ProjectCard
 *
 * Single project card shown in the projects grid.
 * Clicking (or pressing Enter/Space) it opens the ProjectModal with full details.
 *
 * @param {Object} project - project data object from constants/projects.js
 * @param {Function} onOpen - callback to open modal with this project
 */
function ProjectCard({ project, onOpen }) {
  const { bg, category, title, desc, toolsLabel } = project
  const visibleTools = toolsLabel.slice(0, 3)
  const remainingCount = toolsLabel.length - 3

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(project)
        }
      }}
      className="cursor-pointer overflow-hidden rounded border-[1.5px] border-transparent bg-white shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-green hover:shadow-lg"
    >
      {/* Thumbnail */}
      <div className="flex h-40 items-center justify-center text-5xl" style={{ background: bg }}>
        <img src={project.image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-green">
          {category}
        </div>
        <div className="mb-2 text-[15px] font-bold leading-[1.3] text-dark">
          {title}
        </div>
        <div className="mb-3.5 text-xs leading-[1.7] text-gray">
          {desc}
        </div>

        {/* Tool Tags */}
        <div className="flex flex-wrap gap-[5px]">
          {visibleTools.map(tool => (
            <span
              key={tool}
              className="rounded-[4px] border border-gray-lighter bg-gray-lightest px-[9px] py-[3px] text-[10px] font-medium text-gray"
            >
              {tool}
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="rounded-[4px] border border-gray-lighter bg-gray-lightest px-[9px] py-[3px] text-[10px] font-medium text-gray">
              +{remainingCount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
