/**
 * AboutSection
 *
 * Two-column layout: visual card with stats on the left,
 * text content and skill chips on the right.
 */

const STATS = [
  { num: '5+',  label: 'Years Experience' },
  { num: '40+', label: 'Projects Delivered' },
  { num: '12',  label: 'Industries Served' },
  { num: '98%', label: 'Client Satisfaction' },
]

const SKILLS = [
  'Python', 'SQL', 'Apache Spark', 'Kafka', 'dbt', 'Airflow',
  'Snowflake', 'BigQuery', 'Redshift', 'Tableau', 'Looker',
  'GCP', 'AWS', 'Docker', 'Terraform', 'Git',
]

function AboutSection() {
  return (
    <section id="about" className="section about" style={{ background: 'var(--white)' }}>
      <div
        className="about-inner"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
      >
        {/* ── Visual / Stats ── */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              background: 'var(--green-ll)', borderRadius: 'var(--radius)',
              padding: '36px', position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Decorative circle */}
            <div style={{
              position: 'absolute', top: '-40px', right: '-40px',
              width: '160px', height: '160px', borderRadius: '50%',
              background: 'rgba(34,197,94,0.2)', pointerEvents: 'none',
            }} />

            <p style={{ fontFamily: 'Fira Code, monospace', fontSize: '12px', color: 'var(--green)', marginBottom: '8px' }}>
              // hello world
            </p>
            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.8 }}>
              Turning raw data into reliable, scalable infrastructure — that's what gets me out of bed.
            </p>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
              {STATS.map(({ num, label }) => (
                <div
                  key={label}
                  style={{
                    background: 'var(--white)', borderRadius: 'var(--radius-sm)',
                    padding: '20px', textAlign: 'center', boxShadow: 'var(--shadow)',
                  }}
                >
                  <div style={{
                    fontFamily: 'Fraunces, serif', fontSize: '36px', fontWeight: 900,
                    color: 'var(--green)', lineHeight: 1,
                  }}>
                    {num}
                  </div>
                  <div style={{
                    fontSize: '11px', fontWeight: 500, color: 'var(--gray)',
                    marginTop: '4px', letterSpacing: '0.05em',
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Text Content ── */}
        <div>
          <div className="section-eyebrow fade-up">About Me</div>
          <h2 className="section-title fade-up d1">
            Building data systems that <em>actually</em> scale.
          </h2>

          <p className="about-body fade-up d2" style={{
            fontSize: '14px', color: 'var(--gray)', lineHeight: 1.9, marginBottom: '24px',
          }}>
            I'm a Data Engineer and Analyst based in Jakarta with 5+ years of experience designing
            end-to-end data solutions. From Kafka pipelines to Tableau dashboards, I bridge the gap
            between raw infrastructure and business decisions.
          </p>

          <p className="about-body fade-up d3" style={{
            fontSize: '14px', color: 'var(--gray)', lineHeight: 1.9, marginBottom: '24px',
          }}>
            I've worked across fintech, e-commerce, logistics, and HR — helping teams move from
            spreadsheets to self-serve analytics platforms. I care about clean data models,
            observable pipelines, and documentation that future-you will thank present-you for.
          </p>

          {/* Skill Chips */}
          <div className="skill-chips fade-up d4" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
            {SKILLS.map(skill => (
              <span
                key={skill}
                style={{
                  fontFamily: 'Fira Code, monospace', fontSize: '11px',
                  padding: '6px 14px',
                  background: 'var(--green-ll)', color: 'var(--green-dd)',
                  borderRadius: '50px', border: '1px solid rgba(34,197,94,0.2)',
                  transition: 'all .2s', cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--green)'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--green-ll)'
                  e.currentTarget.style.color = 'var(--green-dd)'
                }}
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
