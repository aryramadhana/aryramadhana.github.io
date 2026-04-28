import { useEffect } from 'react'
import Navbar          from '@/components/Navbar'
import HeroSection     from '@/components/HeroSection'
import AboutSection    from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection  from '@/components/ContactSection'
import Footer          from '@/components/Footer'

/**
 * App
 *
 * Root component. Assembles all sections in page order.
 * Also initialises IntersectionObserver for .fade-up scroll reveals.
 */
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

    // Trigger hero fade-ups immediately
    setTimeout(() => {
      document.querySelectorAll('.hero .fade-up').forEach(el => el.classList.add('vis'))
    }, 120)

    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
