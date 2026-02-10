import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Global effects */}
      <div className="noise-overlay" />
      <div className="scanline" />

      {/* Layout */}
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Marquee />
      <Contact />
      <Footer />
    </>
  )
}

export default App
