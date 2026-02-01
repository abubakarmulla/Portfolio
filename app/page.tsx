import About from '../components/About'
import ContactCTA from '../components/Contact'
import Experience from '../components/ExperienceTimeline'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <ContactCTA />
      <Footer />
    </main>
  )
}
