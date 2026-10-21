import React from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement">
        <span className="announce-dot"></span>
        Thoughtful gifting. Seamless execution.
        <span className="announce-end">Made for brands that care <ArrowUpRight size={13}/></span>
      </div>
      <header className="header">
        <Logo />
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#what-we-do" onClick={closeMenu}>What we do</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#about" onClick={closeMenu}>About us</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <a className="mobile-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={16}/></a>
        </nav>
        <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>
    </>
  )
}
