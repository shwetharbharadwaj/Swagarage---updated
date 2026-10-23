import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Sparkles,
  PackageCheck,
  Palette,
  Check,
  Truck,
  MousePointer2,
} from 'lucide-react'

import { steps, stepLabels } from './data.js'

const icons = [
  Sparkles,
  PackageCheck,
  Palette,
  Check,
  Truck,
]

const processDetails = [
  {
    eyebrow: 'START WITH CONTEXT',
    description:
      'We get clear on who the swag is for, why you are giving it, what it needs to achieve and what the project needs to stay within.',
    tags: ['Audience', 'Occasion', 'Budget'],
  },
  {
    eyebrow: 'FIND THE RIGHT PIECES',
    description:
      'We explore products through our partner network and narrow the options down to pieces that actually make sense for your brief.',
    tags: ['Products', 'Materials', 'Options'],
  },
  {
    eyebrow: 'MAKE IT YOURS',
    description:
      'Branding, colours, printing, packaging and finishing come together to make the final collection unmistakably yours.',
    tags: ['Branding', 'Printing', 'Packaging'],
  },
  {
    eyebrow: 'NOTHING GOES OUT HALF-FINISHED',
    description:
      'Before anything leaves, we pay attention to the details — branding, finish, quantities and the overall presentation.',
    tags: ['Finishing', 'Branding', 'Checks'],
  },
  {
    eyebrow: 'FROM OUR HANDS TO THEIRS',
    description:
      'We coordinate packaging, dispatch and delivery around the agreed plan so the experience stays smooth right through the finish.',
    tags: ['Packing', 'Coordination', 'Delivery'],
  },
]

export default function Process() {
  const sectionRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

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
        threshold: 0.12,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const activeData = processDetails[activeStep]
  const ActiveIcon = icons[activeStep]

  return (
    <section
      ref={sectionRef}
      className={`process-roadmap ${
        isVisible ? 'process-roadmap-visible' : ''
      }`}
      id="approach"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="process-roadmap-bg">
        <div className="process-grid-pattern" />
        <div className="process-glow process-glow-one" />
        <div className="process-glow process-glow-two" />
      </div>


      <div className="process-roadmap-container">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="process-roadmap-header">

          <div className="process-header-left">

            <div className="process-kicker">

              <span className="process-kicker-dot" />

              <span>
              OUR APPROACH
              </span>

            </div>


            <h2>
              A smoother way
             to do swag
            </h2>

          </div>


          <div className="process-header-right">

            <span className="process-header-label">
              FROM BRIEF
            </span>

            <div className="process-header-arrow">
              <ArrowUpRight size={20} />
            </div>

            <span className="process-header-label">
              TO DELIVERY
            </span>

          </div>

        </div>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="process-intro">

          <p>
            Great merchandise is not just about finding a product.
            It is about getting every moving part to work together.
          </p>

          <div className="process-intro-meta">

            <span>
              05 STEPS
            </span>

            <span className="process-meta-line" />

            <span>
              ONE CLEAR JOURNEY
            </span>

          </div>

        </div>


        {/* =====================================================
            ACTIVE DETAIL PANEL
        ===================================================== */}

        <div className="process-active-panel">

          <div className="process-active-number">
            0{activeStep + 1}
          </div>


          <div className="process-active-icon">
            <ActiveIcon
              size={27}
              strokeWidth={1.5}
            />
          </div>


          <div className="process-active-content">

            <span className="process-active-eyebrow">
              {activeData.eyebrow}
            </span>

            <h3>
              {steps[activeStep][1]}
            </h3>

            <p>
              {activeData.description}
            </p>

            <div className="process-active-tags">

              {activeData.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>

          </div>


          <div className="process-active-side">

            <span>
              CURRENT STEP
            </span>

            <strong>
              {stepLabels[activeStep]}
            </strong>

          </div>

        </div>


        {/* =====================================================
            ROADMAP
        ===================================================== */}

        <div className="roadmap">

          {/* Main road */}

          <div className="roadmap-track">

            <div className="roadmap-track-base" />

            <div
              className="roadmap-track-progress"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />

          </div>


          {/* Roadmap steps */}

          <div className="roadmap-steps">

            {steps.map(([number, title, text], index) => {

              const Icon = icons[index]

              const isActive =
                index === activeStep

              const isCompleted =
                index < activeStep

              const isTop =
                index % 2 === 0

              return (
                <button
                  key={number}
                  className={`
                    roadmap-step
                    ${isActive ? 'roadmap-step-active' : ''}
                    ${isCompleted ? 'roadmap-step-completed' : ''}
                    ${isTop ? 'roadmap-step-top' : 'roadmap-step-bottom'}
                  `}
                  onMouseEnter={() =>
                    setActiveStep(index)
                  }
                  onFocus={() =>
                    setActiveStep(index)
                  }
                  onClick={() =>
                    setActiveStep(index)
                  }
                >

                  {/* Card */}

                  <div className="roadmap-card">

                    <div className="roadmap-card-top">

                      <span className="roadmap-number">
                        {number}
                      </span>

                      <Icon
                        size={19}
                        strokeWidth={1.5}
                      />

                    </div>


                    <span className="roadmap-card-label">
                      {stepLabels[index]}
                    </span>


                    <h3>
                      {title}
                    </h3>


                    <p>
                      {text}
                    </p>


                    <div className="roadmap-card-bottom">

                      <span>
                        {isActive
                          ? 'YOU ARE HERE'
                          : 'EXPLORE STEP'}
                      </span>

                      <ArrowUpRight
                        size={15}
                      />

                    </div>

                  </div>


                  {/* Connector */}

                  <div className="roadmap-connector">
                    <span className="roadmap-node">

                      {isCompleted ? (
                        <Check size={13} />
                      ) : (
                        <span />
                      )}

                    </span>

                  </div>

                </button>
              )
            })}

          </div>

        </div>


        {/* =====================================================
            MOBILE STEP NAVIGATION
        ===================================================== */}

        <div className="process-mobile-navigation">

          {steps.map(([number, title], index) => (

            <button
              key={number}
              className={
                activeStep === index
                  ? 'mobile-step-active'
                  : ''
              }
              onClick={() =>
                setActiveStep(index)
              }
            >

              <span>
                {number}
              </span>

              <strong>
                {title}
              </strong>

            </button>

          ))}

        </div>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="process-roadmap-footer">

          <div className="process-footer-message">

            <span className="footer-star">
              ✦
            </span>

            <span>
              GOOD EXECUTION ISN'T AN EXTRA.
              IT'S THE WHOLE POINT.
            </span>

          </div>


          <a
            href="#contact"
            className="process-start-link"
          >

            <span>
              Start with a brief
            </span>

            <span className="process-start-arrow">
              <ArrowUpRight size={18} />
            </span>

          </a>

        </div>


        {/* =====================================================
            INTERACTION HINT
        ===================================================== */}

        <div className="process-interaction">

          <MousePointer2 size={14} />

          <span>
            Hover over the journey
          </span>

        </div>

      </div>

    </section>
  )
}