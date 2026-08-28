import { useRef, forwardRef } from 'react'
import { use3DParallax } from '@/hooks/use3DParallax'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

/**
 * HeroSection
 *
 * Full-viewport hero with:
 * - Social links
 * - Animated heading
 * - CTA button
 * - 3D morphing blob with character image and parallax floating tags
 *
 * The 3D parallax effect is managed by the use3DParallax hook, which sets
 * per-frame transform/box-shadow/opacity styles directly on the refs below
 * (mouse-position-driven) — those stay imperative and are not expressed as
 * Tailwind classes; only the static base styles are.
 */
function HeroSection() {
  const heroRef = useRef(null)
  const sceneRef = useRef(null)
  const blobRef = useRef(null)
  const charRef = useRef(null)
  const glowRef = useRef(null)
  const shadowRef = useRef(null)
  const tag1Ref = useRef(null)
  const tag2Ref = useRef(null)
  const tag3Ref = useRef(null)

  use3DParallax({ heroRef, sceneRef, blobRef, charRef, glowRef, shadowRef, tag1Ref, tag2Ref, tag3Ref })

  const socials = [
    { icon: <FaGithub />, title: 'GitHub', href: 'https://github.com/aryramadhana' },
    { icon: <FaLinkedin />, title: 'LinkedIn', href: 'https://www.linkedin.com/in/hary-ramadhana-n/' },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative grid grid-cols-1 items-center gap-6 overflow-hidden bg-[linear-gradient(135deg,#F0FDF4_0%,#FFFFFF_60%)] px-4 pb-10 pt-[60px] xs:gap-[30px] xs:px-6 xs:pb-[50px] xs:pt-[70px] md:min-h-screen md:gap-10 md:px-8 md:pb-[60px] md:pt-20 lg:grid-cols-2 lg:gap-[60px] lg:px-10 lg:pb-[60px] lg:pt-[100px]"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-[120px] -top-[120px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.15)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-20 left-[10%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_70%)]" />

      {/* ── Left Column ── */}
      <div className="min-w-0">
        {/* Social Icons */}
        <div className="fade-up mb-5 flex gap-2.5">
          {socials.map(({ icon, title, href }) => (
            <a
              key={title}
              href={href}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-lighter bg-white text-lg text-dark no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-green hover:text-green"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Heading */}
        <h1 className="fade-up d1 mb-4 font-serif text-[clamp(24px,7vw,48px)] font-medium leading-[1.05] tracking-[-0.03em] xs:text-[clamp(28px,6vw,64px)]">
          Hi, I'm <em className="italic text-green">Hary</em><br />
          Data Engineer & Analyst
        </h1>

        {/* Description */}
        <p className="fade-up d2 mb-8 max-w-[440px] text-[13px] leading-[1.8] text-gray xs:text-[15px]">
          I build pipelines, analysis, and turn raw data into decisions that move businesses forward. 2+ years, 15+ projects.
        </p>

        {/* CTA Button */}
        <div className="fade-up d3 flex w-full flex-wrap items-center gap-3.5">
          <button
            onClick={() => window.location.href = 'mailto:haryrnasution@gmail.com'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[1.5px] border-gray-lighter bg-transparent px-[18px] py-2.5 text-center text-xs font-semibold text-dark transition-all duration-200 hover:border-green hover:text-green xs:px-5 xs:py-3 md:px-6 md:py-[13px] md:text-[13px]"
          >
            ✉ Contact Me
          </button>
        </div>
      </div>

      {/* ── Right Column: 3D Scene ── */}
      <div className="fade-up d2 relative z-[2] flex items-center justify-center [perspective:900px] [perspective-origin:center_center]">
        <div
          id="hero-scene"
          ref={sceneRef}
          className="relative h-[200px] w-[200px] [transform-style:preserve-3d] [will-change:transform] transition-transform duration-[80ms] ease-out xs:h-[240px] xs:w-[240px] md:h-[300px] md:w-[300px] lg:h-[420px] lg:w-[420px]"
        >
          {/* Morphing Blob */}
          <div
            id="hero-blob"
            ref={blobRef}
            className="relative flex h-full w-full animate-morphBlob items-center justify-center [background:linear-gradient(135deg,#DCFCE7,#22C55E)] [transform-style:preserve-3d] transition-shadow duration-150 ease-in-out"
          >
            {/* Glow */}
            <div
              id="hero-glow"
              ref={glowRef}
              className="pointer-events-none absolute -inset-5 rounded-full opacity-0 [background:radial-gradient(circle_at_center,rgba(34,197,94,0.35)_0%,transparent_65%)] [will-change:transform,opacity] transition-[opacity,transform] duration-200 ease-out"
            />

            {/* Avatar Circle */}
            <div
              id="hero-avatar"
              className="relative z-[2] flex h-[160px] w-[160px] items-center justify-center rounded-full bg-white [box-shadow:0_20px_60px_rgba(0,0,0,0.1)] [transform-style:preserve-3d] [will-change:transform] transition-transform duration-[80ms] ease-out xs:h-[190px] xs:w-[190px] md:h-[240px] md:w-[240px] lg:h-[340px] lg:w-[340px]"
            >
              <img
                id="hero-char"
                ref={charRef}
                src="/foto/fotoweb.png"
                alt="Hero Character"
                className="relative block h-[230px] w-[230px] cursor-pointer select-none object-contain [filter:drop-shadow(0_20px_30px_rgba(0,0,0,0.25))] [will-change:transform] transition-[transform,filter] duration-[80ms] ease-out xs:h-[280px] xs:w-[280px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px]"
              />
            </div>

            {/* 3D Floor Shadow */}
            <div
              id="hero-shadow"
              ref={shadowRef}
              className="pointer-events-none absolute -bottom-5 left-1/2 h-6 w-[120px] -translate-x-1/2 rounded-full opacity-0 [background:radial-gradient(ellipse,rgba(0,0,0,0.18)_0%,transparent_70%)] [will-change:transform,opacity] transition-[transform,opacity] duration-[80ms] ease-out xs:w-[200px]"
            />
          </div>

          {/* Floating Tags */}
          <FloatingTag ref={tag1Ref} id="tag1" className="left-[-20px] top-10 hidden lg:flex" style={{ animationDelay: '0s' }}>
            <TagDot /> 2+ Years Exp
          </FloatingTag>
          <FloatingTag ref={tag2Ref} id="tag2" className="bottom-[60px] left-[-30px] hidden lg:flex" style={{ animationDelay: '0.8s' }}>
            <TagDot /> 15+ Projects
          </FloatingTag>
          <FloatingTag ref={tag3Ref} id="tag3" className="right-[-10px] top-20 hidden lg:flex" style={{ animationDelay: '1.6s' }}>
            <TagDot /> Jakarta, ID
          </FloatingTag>
        </div>
      </div>
    </section>
  )
}

/** Reusable floating tag element */
const FloatingTag = forwardRef(({ children, style, id, className = '' }, ref) => (
  <div
    id={id}
    ref={ref}
    style={style}
    className={`absolute items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold shadow-lg [will-change:transform] transition-[transform,box-shadow] duration-[120ms] ease-out animate-floatTag ${className}`}
  >
    {children}
  </div>
))

FloatingTag.displayName = 'FloatingTag'

function TagDot() {
  return (
    <span className="inline-block h-2 w-2 rounded-full bg-green" />
  )
}

export default HeroSection
