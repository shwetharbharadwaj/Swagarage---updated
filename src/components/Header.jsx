import React from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement">
        <span className="announce-dot" aria-hidden="true"></span>
        <span>Thoughtful gifting. Seamless execution.</span>
        <span className="announce-dot"aria-hidden="true"></span>
           <span>Made for brands that care.
        </span>
      </div>

      <header className="header">

        <div className="swagarage-logo">
          <Logo />
        </div>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#what-we-do" onClick={closeMenu}>What we do</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#about" onClick={closeMenu}>About us</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <a className="mobile-cta" href="#contact" onClick={closeMenu}>
            Let's talk
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </nav>

        <a className="header-cta" href="#contact">
          Let's talk
          <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} strokeWidth={2} aria-hidden="true" /> : <Menu size={24} strokeWidth={2} aria-hidden="true" />}
        </button>
      </header>
    </>
  )
}
