import React from 'react'
import {
  Box,
  BriefcaseBusiness,
  Gift,
  Layers3,
  PackageCheck,
} from 'lucide-react'

import { services as serviceItems } from './data.js'

const vectorIcons = [
  Gift,
  BriefcaseBusiness,
  Box,
  Layers3,
  PackageCheck,
]

export default function Services() {
  const openService = (link) => {
    if (!link) return

    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      className="services section-pad services-vector"
      id="what-we-do"
    >
      <div className="section-kicker">
        <span className="process-kicker-dot" />
        <span>WHAT WE DO</span>
      </div>

      <div className="process-header-left">
        <h2>Swag for every kind of moment.</h2>
      </div>

      <div className="section-heading-row services-vector-heading">
        <p className="section-heading-row-copy">
          From the first idea to the final delivery, we bring the right
          products, branding and execution together.
        </p>
      </div>

      <div className="service-vector-layout">
        <div className="service-vector-grid" role="list">
          {serviceItems.map((item, index) => {
            const Icon = vectorIcons[index] || PackageCheck

            return (
              <button
                type="button"
                className="service-vector-card"
                key={item.title}
                onClick={() => openService(item.link)}
                aria-label={`Open ${item.title}`}
              >
                <span
                  className="service-vector-icon"
                  aria-hidden="true"
                >
                  <Icon size={25} strokeWidth={1.7} />
                </span>

                <span className="service-vector-copy">
                  <span className="service-vector-tag">
                    {item.tag}
                  </span>

                  <strong>{item.title}</strong>

                  <span>{item.text}</span>
                </span>

                <span
                  className="service-vector-line"
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>
      </div>

      <div className="services-bottom services-vector-bottom">
        <span>One partner. All the moving parts.</span>
      </div>
    </section>
  )
}