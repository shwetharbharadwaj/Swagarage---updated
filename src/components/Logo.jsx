import React from 'react'

export default function Logo({ light = false }) {
  return (
    <a href="#home" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Swagarage home">
      <span className="brand-mark"><span>S</span><span>G</span></span>
      <span className="brand-type"><b>SWAGARAGE</b><i>Build Your Swag!</i></span>
    </a>
  )
}
