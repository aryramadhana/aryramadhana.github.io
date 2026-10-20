/**
 * AboutSection
 *
 * Two-column layout: visual card with stats on the left,
 * text content and skill chips on the right.
 */

const STATS = [
  { num: '2+', label: 'Years Experience' },
  { num: '15+', label: 'Projects' },
  { num: '300+', label: 'Mentoring Participants' },
  { num: '10+', label: 'Clients' },
]

const SKILLS = [
  'Microsoft Excel', 'Spreadsheet', 'Python', 'SQL', 'Apache Spark', 'BigQuery', 'Tableau', 'Data Studio',
  'PostgreeSQL', 'Git',
]

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-4 py-12 xs:px-6 xs:py-[60px] md:px-8 md:py-[70px] lg:px-10 lg:py-[90px]"
    >
      <div className="grid grid-cols-1 items-center gap-[30px] xs:gap-10 md:gap-[50px] lg:grid-cols-2 lg:gap-20">
        {/* ── Visual / Stats ── */}
        <div className="relative">
          <div className="relative overflow-hidden rounded bg-green-lighter p-6 xs:p-7 md:p-8 lg:p-9">
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green/20" />

            <p className="mb-2 font-mono text-xs text-green">
              // hello world
            </p>
            <p className="text-[15px] leading-[1.8] text-gray">
              Turning raw data into reliable, scalable infrastructure. That's what gets me out of bed.
            </p>

            {/* Stats Grid */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              {STATS.map(({ num, label }) => (
                <div
                  key={label}
                  className="rounded-sm bg-white p-5 text-center shadow"
                >
                  <div className="font-serif text-4xl font-black leading-none text-green">
                    {num}
                  </div>
                  <div className="mt-1 text-[11px] font-medium tracking-[0.05em] text-gray">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Text Content ── */}
        <div>
          <div className="fade-up mb-2.5 font-mono text-[10px] font-light uppercase tracking-[0.2em] text-green md:text-[11px]">About Me</div>
          <h2 className="fade-up d1 mb-4 font-serif text-[clamp(20px,5vw,32px)] font-black leading-[1.1] tracking-[-0.03em] xs:text-[clamp(24px,3vw,36px)] md:text-[clamp(32px,4vw,48px)]">
            Building data systems that <em className="italic text-green">actually</em> scale.
          </h2>

          <p className="fade-up d3 mb-6 text-sm leading-[1.9] text-gray">
            I'm a Data Engineer and Analyst based in Jakarta. I clean, transform, and analyze data, build interactive dashboards, and automate reporting pipelines.
            Most of my work has been on e-commerce and marketing data, turning it into decisions the business can act on.
            I also mentor in data analytics and AI programs, helping learners go from concept to working with real tools.
          </p>

          {/* Skill Chips */}
          <div className="fade-up d4 mt-5 flex flex-wrap gap-2.5 md:gap-2">
            {SKILLS.map(skill => (
              <span
                key={skill}
                className="cursor-default rounded-full border border-green/20 bg-green-lighter px-3 py-[5px] font-mono text-[10px] text-green-darker transition-all duration-200 hover:bg-green hover:text-white md:px-3.5 md:py-1.5 md:text-[11px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
