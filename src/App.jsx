import { useState, useCallback } from 'react'
import Cursor        from './components/Cursor'
import Loader        from './components/Loader'
import Navbar        from './components/Navbar'
import Ticker        from './components/Ticker'
import Telemetry     from './components/Telemetry'
import Hero          from './pages/Hero'
import Experience    from './pages/Experience'
import Skills        from './pages/Skills'
import Projects      from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact       from './pages/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoaderDone = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Cursor />

      {!loaded && <Loader onDone={handleLoaderDone} />}

      {/* Main content — always mounted so sections exist for scroll targets */}
      <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <Navbar />
        <Hero started={loaded} />
        <Ticker />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Telemetry show={loaded} />
      </div>
    </>
  )
}
