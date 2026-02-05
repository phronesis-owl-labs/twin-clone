import { useEffect, useState } from 'react'
import './Header.css'

interface HeaderProps {
  scrollY: number
}

// Nexus logo as text with serif font
const NexusLogo = () => (
  <span className="header__logo-text">nexus</span>
)

export default function Header({ scrollY }: HeaderProps) {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const isScrolled = scrollY > 10

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${visible ? 'header--visible' : ''}`}>
      <div className="header__banner">
        <a href="#">
          <span className="header__banner-desktop">Announcing our public launch and $10M seed round led by LocalGlobe →</span>
          <span className="header__banner-mobile">$10M seed round led by LocalGlobe →</span>
        </a>
      </div>
      <div className="header__inner">
        <a href="/" className="header__logo">
          <NexusLogo />
        </a>
        <nav className="header__nav">
          <a href="/discover" className="btn btn-secondary">Discover</a>
          <a href="#" className="btn btn-primary">Try now</a>
        </nav>
      </div>
    </header>
  )
}
