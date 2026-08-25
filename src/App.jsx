import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px] px-4 sm:px-margin-page mx-auto max-w-7xl">
        <Hero />
        <hr className="brutal-divider" />
        <About />
        <hr className="brutal-divider" />
        <Skills />
        <hr className="brutal-divider" />
        <Experience />
        <hr className="brutal-divider" />
        <Projects />
        <hr className="brutal-divider" />
        <Education />
        <hr className="brutal-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
