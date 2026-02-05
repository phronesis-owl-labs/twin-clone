import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import IndustryGrid from './components/IndustryGrid'
import ToolsGrid from './components/ToolsGrid'
import Discover from './components/Discover'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Header scrollY={scrollY} />
      <main>
        <Hero scrollY={scrollY} />
        <Features scrollY={scrollY} />
        <IndustryGrid />
        <ToolsGrid />
        <Discover />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
