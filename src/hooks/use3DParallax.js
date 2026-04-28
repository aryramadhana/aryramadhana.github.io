import { useEffect, useRef } from 'react'

/**
 * use3DParallax
 *
 * Attaches mouse-move 3D parallax and cursor glow effects to the hero section.
 * Ported from the original vanilla JS IIFE in portfolio_3d_hero.html.
 *
 * @param {React.RefObject} heroRef   - ref to the hero <section> element
 * @param {React.RefObject} sceneRef  - ref to .hero-scene wrapper
 * @param {React.RefObject} blobRef   - ref to .hero-blob
 * @param {React.RefObject} avatarRef - ref to .hero-avatar
 * @param {React.RefObject} charRef   - ref to the emoji span
 * @param {React.RefObject} glowRef   - ref to .hero-glow
 * @param {React.RefObject} shadowRef - ref to .hero-shadow-3d
 * @param {React.RefObject} tag1Ref   - ref to floating tag 1
 * @param {React.RefObject} tag2Ref   - ref to floating tag 2
 * @param {React.RefObject} tag3Ref   - ref to floating tag 3
 */
export function use3DParallax({
  heroRef,
  sceneRef,
  blobRef,
  charRef,
  glowRef,
  shadowRef,
  tag1Ref,
  tag2Ref,
  tag3Ref,
}) {
  // Smoothing config
  const LERP = 0.08

  function lerp(a, b, t) {
    return a + (b - a) * t
  }

  useEffect(() => {
    const hero   = heroRef.current
    const scene  = sceneRef.current
    const blob   = blobRef.current
    const charEl = charRef.current
    const glow   = glowRef.current
    const shadow = shadowRef.current
    const tag1   = tag1Ref.current
    const tag2   = tag2Ref.current
    const tag3   = tag3Ref.current

    if (!hero || !scene) return

    // Inject cursor glow div
    const cursorGlow = document.createElement('div')
    cursorGlow.id = 'cursor-glow'
    document.body.appendChild(cursorGlow)

    let mx = 0, my = 0
    let cx = 0, cy = 0
    let raf = null

    function animate() {
      raf = null
      cx = lerp(cx, mx, LERP)
      cy = lerp(cy, my, LERP)

      const rotX = -cy * 18
      const rotY =  cx * 22

      if (scene) scene.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`

      if (charEl) {
        charEl.style.transform = `
          translateZ(50px)
          rotateX(${-cy * 8}deg)
          rotateY(${cx * 8}deg)
          scale(${1 + Math.abs(cx) * 0.04 + Math.abs(cy) * 0.04})
        `
      }

      if (blob) {
        blob.style.boxShadow = `
          ${-rotY * 1.5}px ${rotX * 1.5}px 80px rgba(34,197,94,${0.12 + Math.abs(cx) * 0.1 + Math.abs(cy) * 0.1}),
          0 30px 80px rgba(0,0,0,0.08)
        `
      }

      if (glow) {
        glow.style.transform = `translate(${cx * 30}px, ${cy * 30}px)`
        glow.style.opacity = `${0.5 + Math.abs(cx) * 0.5 + Math.abs(cy) * 0.5}`
      }

      if (shadow) {
        shadow.style.transform = `translateX(calc(-50% + ${rotY * 2}px)) scaleX(${1 + Math.abs(cx) * 0.4})`
        shadow.style.opacity   = `${0.6 + Math.abs(cx) * 0.3 + Math.abs(cy) * 0.2}`
      }

      const d1 = 0.35, d2 = 0.25, d3 = 0.45
      if (tag1) tag1.style.transform = `translateX(${cx * -24 * d1}px) translateY(${cy * -16 * d1}px)`
      if (tag2) tag2.style.transform = `translateX(${cx * -24 * d2}px) translateY(${cy * -16 * d2}px)`
      if (tag3) tag3.style.transform = `translateX(${cx * -24 * d3}px) translateY(${cy * -16 * d3}px)`

      const tagShadow = `${-cx * 6}px ${-cy * 6}px 24px rgba(0,0,0,0.10)`
      if (tag1) tag1.style.boxShadow = tagShadow
      if (tag2) tag2.style.boxShadow = tagShadow
      if (tag3) tag3.style.boxShadow = tagShadow

      if (cx !== 0 || cy !== 0 || mx !== 0 || my !== 0) {
        raf = requestAnimationFrame(animate)
      }
    }

    function onMouseMove(e) {
      cursorGlow.style.left = e.clientX + 'px'
      cursorGlow.style.top  = e.clientY + 'px'

      const rect = hero.getBoundingClientRect()
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        cursorGlow.style.opacity = '1'
        mx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2
        my = ((e.clientY - rect.top)  / rect.height - 0.5) * 2
      } else {
        cursorGlow.style.opacity = '0'
        mx = 0; my = 0
      }
      if (!raf) raf = requestAnimationFrame(animate)
    }

    function onMouseLeave() {
      mx = 0; my = 0
      cursorGlow.style.opacity = '0'
    }

    // Sparkle on click
    function onHeroClick(e) {
      for (let i = 0; i < 8; i++) {
        const sp = document.createElement('div')
        sp.className = 'sparkle'
        const heroRect = hero.getBoundingClientRect()
        sp.style.left = (e.clientX - heroRect.left - 3) + 'px'
        sp.style.top  = (e.clientY - heroRect.top  - 3) + 'px'
        sp.style.animationDelay = (i * 0.08) + 's'
        sp.style.background = i % 2 === 0 ? 'var(--green)' : '#fff'
        sp.style.width = sp.style.height = (4 + Math.random() * 6) + 'px'
        hero.appendChild(sp)
        setTimeout(() => sp.remove(), 1600)
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    hero.addEventListener('click', onHeroClick)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      hero.removeEventListener('click', onHeroClick)
      cursorGlow.remove()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}
