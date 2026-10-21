import React from 'react'
import { Instagram, Linkedin } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Logo light/>
        <p>Great products. Great branding.<br/>A whole lot less hassle.</p>
        <a className="footer-top-link" href="#home">Back to top ↑</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Swagarage. Build your Swag!</span>
        <span>Bengaluru, India</span>
        <div className="socials">
          <a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={16}/></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={16}/></a>
        </div>
        <span className="footer-made">MADE TO MAKE AN IMPRESSION ✳</span>
      </div>
    </footer>
  )
}
