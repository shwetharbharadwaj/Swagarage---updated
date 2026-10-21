import React, { useState } from 'react'
import { ArrowUpRight, Box, Gift, Sparkles, Star, Zap } from 'lucide-react'
import { services as serviceItems } from './data.js'

const vectorIcons = [Gift, Box, Sparkles, Zap, Star]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section className="services section-pad services-dynamic" id="what-we-do">
      <div className="section-kicker"><span>WHAT WE DO</span></div>
      <div className="section-heading-row">
        <div>
          <h2>Swag for every<br /><em>kind of moment.</em></h2>
        </div>
        <p>One clear brief. A considered collection. The right details, taken care of.</p>
      </div>

      <div className="service-grid service-vector-grid">
        {serviceItems.map((s, i) => {
          const Icon = vectorIcons[i]
          const isActive = active === i

          return (
            <article
              className={`service-card service-vector-card service-${i + 1} ${isActive ? 'service-card-active' : ''}`}
              key={s.n}
              onMouseEnter={() => setActive(i)}
            >
              <div className="service-image service-vector-image">
                <img src={s.img} alt={s.title} loading="lazy" />

                <div className="service-vector-layer" aria-hidden="true">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M8 20 V8 H20" />
                    <path d="M80 92 H92 V80" />
                    <circle cx="83" cy="18" r="5" />
                    <path d="M18 82 L25 75 L32 82 L25 89 Z" />
                  </svg>
                  <div className="vector-orb vector-orb-a" />
                  <div className="vector-orb vector-orb-b" />
                </div>

                <span className="service-number">{s.n}</span>
                <span className="service-vector-icon"><Icon size={17} /></span>
                <span className="service-arrow"><ArrowUpRight size={19} /></span>
              </div>
              <div className="service-info">
                <span className="service-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          )
        })}
      </div>

      <div className="services-bottom">
        <span>Have something else in mind?</span>
        <a href="#contact">Tell us what you’re imagining <ArrowUpRight size={16} /></a>
      </div>
    </section>
  )
}
