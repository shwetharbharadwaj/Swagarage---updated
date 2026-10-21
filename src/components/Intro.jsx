import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Sparkles,
  Palette,
  Handshake,
  BadgeCheck,
  MousePointer2,
} from 'lucide-react'

const stats = [
  {
    icon: Sparkles,
    title: 'Thoughtful',
    short: 'Product choices with a purpose',
    description:
      'Every product starts with a reason. We choose pieces that are useful, desirable and worth keeping.',
    number: '',
  },
  {
    icon: Palette,
    title: 'On-brand',
    short: 'Customisation that feels like you',
    description:
      'Your merchandise should feel like an extension of your brand — not something with a logo randomly printed on it.',
    number: '',
  },
  {
    icon: Handshake,
    title: 'One partner',
    short: 'Less chasing, fewer loose ends',
    description:
      'From sourcing and customisation to quality checks and delivery, we bring the entire process together.',
    number: '',
  },
  {
    icon: BadgeCheck,
    title: 'Quality-conscious',
    short: 'Care in the details, end to end',
    description:
      'We care about the details people notice — materials, finishing, packaging, consistency and the final experience.',
    number: '',
  },
]

export default function Intro() {
  const sectionRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  })

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const x =
      ((event.clientX - rect.left) / rect.width) * 100

    const y =
      ((event.clientY - rect.top) / rect.height) * 100

    setMousePosition({
      x,
      y,
    })
  }

  const active = stats[activeCard]

  const ActiveIcon = active.icon

  return (
    <section
      ref={sectionRef}
      className={`intro-new ${
        isVisible ? 'intro-new-visible' : ''
      }`}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      }}
    >

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="intro-new-background">
        <div className="intro-grid-lines" />
        <div className="intro-glow intro-glow-one" />
        <div className="intro-glow intro-glow-two" />
      </div>


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="intro-new-container">


        {/* =========================================
            HEADER
        ========================================= */}

        <div className="intro-new-header">

          <div className="intro-new-label">

            <span className="intro-label-dot" />

            <span>
              MORE THAN MERCHANDISE
            </span>

          </div>


          <div className="intro-header-counter">

            <span className="counter-active">
              0{activeCard + 1}
            </span>

            <span className="counter-line" />

          </div>

        </div>


        {/* =========================================
            HERO CONTENT
        ========================================= */}

        <div className="intro-new-hero">


          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="intro-new-copy">

            <div className="intro-copy-overline">
              THE SWAGARAGE APPROACH
            </div>


            <h2>

              Not just a gift.

            </h2>


            <div className="intro-copy-statement">

              <span>
                A brand
              </span>

              <strong>
                moment.
              </strong>

            </div>


            <div className="intro-copy-decoration">

              <span />
              <span />
              <span />

            </div>


            <p className="intro-new-lead">

              Great swag doesn't just carry a logo.
              It carries a feeling, an identity and
              a story worth remembering.

            </p>


            <p className="intro-new-body">

              We help businesses turn ideas into
              well-made merchandise people genuinely
              want to receive, use and keep.

              <br />

              You bring the brief.
              <strong>
                We bring the pieces together.
              </strong>

            </p>


            <a
              href="#about"
              className="intro-new-link"
            >

              <span>
                Get to know Swagarage
              </span>

              <span className="intro-new-link-arrow">
                <ArrowUpRight size={18} />
              </span>

            </a>

          </div>


          {/* =====================================
              RIGHT VISUAL
          ===================================== */}

          <div className="intro-new-visual">


            {/* Background circle */}

            <div className="intro-visual-circle">
              <span>
                SWAGARAGE
              </span>
            </div>


            {/* Main visual */}

            <div
              className="intro-visual-card"
              style={{
                transform: `
                  translate(
                    ${(mousePosition.x - 50) * 0.05}px,
                    ${(mousePosition.y - 50) * 0.05}px
                  )
                  rotate(
                    ${(mousePosition.x - 50) * 0.008}deg
                  )
                `,
              }}
            >

              <div className="visual-card-top">

                <span>
                  SWAGARAGE
                </span>

                <span>
                  2026
                </span>

              </div>


              <div className="visual-card-center">

                <div className="visual-star">
                  ✦
                </div>

                <h3>
                  MAKE IT
                  <br />
                  <em>MEMORABLE.</em>
                </h3>

              </div>


              <div className="visual-card-bottom">

                <span>
                  GOOD SWAG
                </span>

                <span>
                  GOOD STORIES
                </span>

              </div>

            </div>


            {/* Floating card */}

            <div className="intro-floating-card floating-top">

              <div className="floating-icon">
                <ActiveIcon
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

              <div>

                <span>
                  CURRENTLY
                </span>

                <strong>
                  {active.title}
                </strong>

              </div>

            </div>


           

            {/* Orbit */}

            <div className="intro-orbit orbit-one" />
            <div className="intro-orbit orbit-two" />

          </div>

        </div>


        {/* =========================================
            ACTIVE FEATURE
        ========================================= */}

        <div className="intro-feature-panel">


          <div className="intro-feature-left">

            <span className="feature-label">
              WHY SWAGARAGE
            </span>

            <span className="feature-big-number">
              {active.number}
            </span>

          </div>


          <div className="intro-feature-icon">

            <ActiveIcon
              size={26}
              strokeWidth={1.4}
            />

          </div>


          <div className="intro-feature-content">

            <h3>
              {active.title}
            </h3>

            <p>
              {active.description}
            </p>

          </div>


          <div className="intro-feature-arrow">

            <ArrowUpRight size={24} />

          </div>

        </div>


        {/* =========================================
            VALUE NAVIGATION
        ========================================= */}

        <div className="intro-values">

          {stats.map((stat, index) => {

            const Icon = stat.icon

            const isActive =
              activeCard === index

            return (
              <button
                key={stat.title}
                className={`intro-value ${
                  isActive
                    ? 'intro-value-active'
                    : ''
                }`}
                onMouseEnter={() =>
                  setActiveCard(index)
                }
                onClick={() =>
                  setActiveCard(index)
                }
              >

                <div className="value-top">

                  <span>
                    {stat.number}
                  </span>

                  <Icon
                    size={18}
                    strokeWidth={1.5}
                  />

                </div>


                <div className="value-title">
                  {stat.title}
                </div>


                <div className="value-description">
                  {stat.short}
                </div>


                <div className="value-bottom">

                  <span>
                    {isActive
                      ? 'SELECTED'
                      : 'EXPLORE'}
                  </span>

                  <ArrowUpRight size={15} />

                </div>


                <div className="value-progress">

                  <span />

                </div>

              </button>
            )

          })}

        </div>


        {/* =========================================
            INTERACTION HINT
        ========================================= */}

        <div className="intro-interaction">

          <MousePointer2 size={14} />

          <span>
            Hover to explore what makes great swag
          </span>

        </div>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <div className="intro-bottom-line">

          <span>
            GOOD SWAG
          </span>

          <div />

          <span>
            GOOD STORIES
          </span>

          <div />

          <span>
            GOOD BUSINESS
          </span>

        </div>

      </div>

    </section>
  )
}