import React, { useState } from 'react'
import {
  ArrowUpRight,
  BadgeCheck,
  Box,
  BriefcaseBusiness,
  Gift,
  Layers3,
  PackageCheck,
} from 'lucide-react'
import { services as serviceItems } from './data.js'

const vectorIcons = [Gift, BriefcaseBusiness, Box, Layers3, PackageCheck]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section className="services section-pad services-vector" id="what-we-do">
      <div className="section-kicker">
        <span>02</span>
        <span>WHAT WE DO</span>
      </div>

      <div className="section-heading-row services-vector-heading">
        <div>
          <h2>Swag for every<br /><em>kind of moment.</em></h2>
        </div>
        <p>
          From the first idea to the final delivery, we bring the right products,
          branding and execution together.
        </p>
      </div>

      <div className="service-vector-layout">
        <div className="service-vector-grid" role="list">
          {serviceItems.map((item, index) => {
            const Icon = vectorIcons[index] || BadgeCheck
            const isActive = active === index

            return (
              <button
                type="button"
                className={`service-vector-card ${isActive ? 'is-active' : ''}`}
                key={item.n}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-pressed={isActive}
              >
                <span className="service-vector-number">{item.n}</span>

                <span className="service-vector-icon" aria-hidden="true">
                  <Icon size={25} strokeWidth={1.7} />
                </span>

                <span className="service-vector-copy">
                  <span className="service-vector-tag">{item.tag}</span>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </span>

                <span className="service-vector-arrow" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>

                <span className="service-vector-line" aria-hidden="true" />
              </button>
            )
          })}
        </div>

        <aside className="service-brochure-card">
          <div className="service-brochure-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <span className="service-brochure-kicker">THE SWAGARAGE PLAYBOOK</span>
          <h3>See how we turn a brief into something worth keeping.</h3>
          <p>
            Explore the kinds of gifting, welcome kits, merchandise and campaign
            ideas we can bring together for your brand.
          </p>

          <a className="service-brochure-link" href="#contact">
            Request the brochure
            <ArrowUpRight size={17} />
          </a>
        </aside>
      </div>

      <div className="services-bottom services-vector-bottom">
        <span>One partner. All the moving parts.</span>
        <a href="#contact">
          Tell us what you’re imagining
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
