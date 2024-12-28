import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

