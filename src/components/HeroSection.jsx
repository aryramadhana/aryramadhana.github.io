import { useRef } from 'react'
import { use3DParallax } from '@/hooks/use3DParallax'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import heroImage from './fotoweb.png';
/**
 * HeroSection
 *
 * Full-viewport hero with:
 * - Social links
 * - Animated heading
 * - CTA buttons
 * - 3D morphing blob with emoji character and parallax floating tags
 *
 * The 3D parallax effect is managed by the use3DParallax hook.
 */
function HeroSection() {
  const heroRef   = useRef(null)
  const sceneRef  = useRef(null)
  const blobRef   = useRef(null)
  const charRef   = useRef(null)
  const glowRef   = useRef(null)
  const shadowRef = useRef(null)
  const tag1Ref   = useRef(null)
  const tag2Ref   = useRef(null)
  const tag3Ref   = useRef(null)

  use3DParallax({ heroRef, sceneRef, blobRef, charRef, glowRef, shadowRef, tag1Ref, tag2Ref, tag3Ref })

  // const socials = [
  //   // { emoji: '📷', title: 'Instagram', href: '#' },
  //   { emoji: '🐙', title: 'GitHub',    href: '#' },
  //   { emoji: '💼', title: 'LinkedIn',  href: '#' },
  //   // { emoji: '▶',  title: 'YouTube',   href: '#' },
  // ]

  const socials = [
  { icon: <FaGithub />, title: 'GitHub', href: 'https://github.com/aryramadhana' },
  { icon: <FaLinkedin />, title: 'LinkedIn', href: 'https://www.linkedin.com/in/hary-ramadhana-n/' },
];

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        minHeight: '100vh', padding: '100px 40px 60px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px',
        alignItems: 'center',
        background: 'linear-gradient(135deg, var(--green-ll) 0%, var(--white) 60%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        content:'', position:'absolute', top:'-120px', right:'-120px',
        width:'500px', height:'500px', borderRadius:'50%',
        background:'radial-gradient(circle,rgba(34,197,94,0.15) 0%,transparent 70%)',
        pointerEvents:'none',
      }} />
      <div style={{
        content:'', position:'absolute', bottom:'-80px', left:'10%',
        width:'300px', height:'300px', borderRadius:'50%',
        background:'radial-gradient(circle,rgba(34,197,94,0.08) 0%,transparent 70%)',
        pointerEvents:'none',
      }} />

      {/* ── Left Column ── */}
      <div>
        {/* Social Icons */}
        <div className="hero-socials fade-up" style={{ display:'flex', gap:'10px', marginBottom:'20px' }}>
          {socials.map(({ icon, title, href }) => (
            <a
              key={title} 
              href={href} 
              title={title}
              target="_blank" // Tambahan: agar link terbuka di tab baru (opsional)
              rel="noopener noreferrer" // Praktik keamanan yang baik untuk target="_blank"
              style={{
                width:'36px', height:'36px', borderRadius:'10px',
                background:'var(--white)', border:'1px solid var(--gray-ll)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'18px', // Sedikit diperbesar dari 14px agar logo SVG/React Icon terlihat lebih jelas
                cursor:'pointer', textDecoration:'none',
                color:'var(--dark)', transition:'all .2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--green)'
                e.currentTarget.style.color = 'var(--green)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--gray-ll)'
                e.currentTarget.style.color = 'var(--dark)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Heading */}
        <h3
          className="hero-greeting fade-up d1"
          style={{
            fontFamily:'Fraunces, serif',
            fontSize:'clamp(25px,3vw,64px)', fontWeight:500,
            lineHeight:1.05, letterSpacing:'-0.03em', marginBottom:'16px',
          }}
        >
          Hi, I'm <em style={{ color:'var(--green)', fontStyle:'italic' }}>Hary</em><br />
          Data Engineer & Analyst
        </h3>

        {/* Description */}
        <p
          className="hero-desc fade-up d2"
          style={{ fontSize:'15px', color:'var(--gray)', lineHeight:1.8, maxWidth:'440px', marginBottom:'32px' }}
        >
          I build pipelines, analysis, and turn raw data into decisions that move businesses forward. 2+ years, 10+ projects.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions fade-up d3" style={{ display:'flex', gap:'14px', alignItems:'center', flexWrap:'wrap' }}>
          <button className="btn-prim">⬇ Download CV</button>
          <button
  className="btn-outline"
  onClick={() => window.location.href = 'mailto:haryrnasution@gmail.com'}
>
  ✉ Contact Me
</button>
        </div>
      </div>

      {/* ── Right Column: 3D Scene ── */}
      <div
        className="hero-right fade-up d2"
        style={{
          position:'relative', display:'flex', alignItems:'center', justifyContent:'center',
          perspective:'900px', perspectiveOrigin:'center center', zIndex:2,
        }}
      >
        <div
          id="hero-scene"
          ref={sceneRef}
          style={{
            width:'420px', height:'420px', position:'relative',
            transformStyle:'preserve-3d', transition:'transform 0.08s ease-out',
            willChange:'transform',
          }}
        >
          {/* Morphing Blob */}
          <div
            id="hero-blob"
            ref={blobRef}
            style={{
              width:'100%', height:'100%',
              background:'linear-gradient(135deg,var(--green-l),var(--green))',
              borderRadius:'60% 40% 70% 30%/50% 60% 40% 50%',
              display:'flex', alignItems:'center', justifyContent:'center',
              animation:'morphBlob 8s ease-in-out infinite',
              transformStyle:'preserve-3d', transition:'box-shadow 0.15s ease',
              position:'relative',
            }}
          >
            {/* Glow */}
            <div
              id="hero-glow"
              ref={glowRef}
              style={{
                position:'absolute', inset:'-20px', borderRadius:'50%',
                background:'radial-gradient(circle at center,rgba(34,197,94,0.35) 0%,transparent 65%)',
                pointerEvents:'none',
                transition:'opacity 0.2s ease, transform 0.08s ease-out',
                willChange:'transform, opacity',
              }}
            />

            {/* Avatar Circle */}
            <div
              id="hero-avatar"
              style={{
                width:'340px', height:'340px', borderRadius:'50%',
                background:'var(--white)',
                display:'flex', alignItems:'center', justifyContent:'center',
                boxShadow:'0 20px 60px rgba(0,0,0,0.1)',
                position:'relative', zIndex:2,
                transformStyle:'preserve-3d', transition:'transform 0.08s ease-out',
                willChange:'transform',
              }}
            >
              <img
  id="hero-char"
  ref={charRef}
  src={heroImage}
  alt="Hero Character"
  style={{
    width: '500px', // Menggantikan fontSize agar ukurannya tetap sama
    height: '500px', // Bisa diganti 'auto' jika proporsi gambar bukan persegi
    objectFit: 'contain', // Menjaga gambar agar tidak gepeng
    display: 'block', 
    position: 'relative',
    transition: 'transform 0.08s ease-out, filter 0.1s ease',
    willChange: 'transform',
    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.25))',
    userSelect: 'none', 
    cursor: 'pointer',
  }}
/>
            </div>

            {/* 3D Floor Shadow */}
            <div
              id="hero-shadow"
              ref={shadowRef}
              style={{
                position:'absolute', bottom:'-20px', left:'50%',
                transform:'translateX(-50%)',
                width:'200px', height:'24px', borderRadius:'50%',
                background:'radial-gradient(ellipse,rgba(0,0,0,0.18) 0%,transparent 70%)',
                transition:'transform 0.08s ease-out, opacity 0.08s ease-out',
                willChange:'transform, opacity', pointerEvents:'none',
              }}
            />
          </div>

          {/* Floating Tags */}
          <FloatingTag ref={tag1Ref} id="tag1" style={{ top:'40px', left:'-20px', animationDelay:'0s' }}>
            <TagDot /> 2+ Years Exp
          </FloatingTag>
          <FloatingTag ref={tag2Ref} id="tag2" style={{ bottom:'60px', left:'-30px', animationDelay:'0.8s' }}>
            <TagDot /> 10+ Projects
          </FloatingTag>
          <FloatingTag ref={tag3Ref} id="tag3" style={{ top:'80px', right:'-10px', animationDelay:'1.6s' }}>
            <TagDot /> Jakarta, ID
          </FloatingTag>
        </div>
      </div>

      {/* morphBlob keyframe injected via style tag */}
      <style>{`
        @keyframes morphBlob {
          0%,100% { border-radius:60% 40% 70% 30%/50% 60% 40% 50% }
          25%      { border-radius:40% 60% 30% 70%/60% 40% 60% 40% }
          50%      { border-radius:70% 30% 50% 50%/40% 70% 30% 60% }
          75%      { border-radius:30% 70% 40% 60%/70% 30% 70% 30% }
        }
        @keyframes floatTag {
          0%,100% { transform:translateY(0) }
          50%     { transform:translateY(-8px) }
        }
      `}</style>
    </section>
  )
}

/** Reusable floating tag element */
import { forwardRef } from 'react'

const FloatingTag = forwardRef(({ children, style, id }, ref) => (
  <div
    id={id}
    ref={ref}
    style={{
      position:'absolute',
      background:'var(--white)',
      borderRadius:'12px',
      padding:'10px 16px',
      boxShadow:'var(--shadow-lg)',
      fontSize:'12px', fontWeight:600,
      display:'flex', alignItems:'center', gap:'8px',
      animation:'floatTag 3s ease-in-out infinite',
      willChange:'transform',
      transition:'transform 0.12s ease-out, box-shadow 0.12s ease',
      ...style,
    }}
  >
    {children}
  </div>
))

FloatingTag.displayName = 'FloatingTag'

function TagDot() {
  return (
    <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'var(--green)', display:'inline-block' }} />
  )
}

export default HeroSection
