import React, { useEffect, useState } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const heroSteps = [
  {
    number: '01',
    word: 'THOUGHTFUL',
    text: 'Products chosen with a purpose.',
    tag: 'START WITH THE WHY',
  },
  {
    number: '02',
    word: 'USEFUL',
    text: 'Things people actually want to keep.',
    tag: 'MADE TO BE USED',
  },
  {
    number: '03',
    word: 'ON-BRAND',
    text: 'Every detail made to feel like you.',
    tag: 'BUILT AROUND YOUR BRAND',
  },
  {
    number: '04',
    word: 'MEMORABLE',
    text: 'Brand moments people remember.',
    tag: 'MADE TO LAST',
  },
]

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % heroSteps.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  const step = heroSteps[activeStep]

  return (
    <section className="hero" id="home">

      {/* Background decoration */}
      <div className="hero-bg-circle hero-bg-circle-blue" />
      <div className="hero-bg-circle hero-bg-circle-orange" />

      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-copy">

          <div className="hero-kicker">
            <span className="hero-kicker-line" />
            <span>CORPORATE GIFTING & BRANDED MERCHANDISE</span>
          </div>

          <div className="hero-pill">
            <Sparkles size={14} />
            <span>Thoughtful products. Better brand moments.</span>
          </div>

          <h1>
            Good Swag.
            <br />
            <span>Great feeling.</span>
          </h1>

          <p className="hero-lead">
            Make your brand something people can
            <strong> hold, use and remember.</strong>
          </p>

          <p className="hero-description">
            From corporate gifts and employee kits to events and
            branded merchandise, we bring the right products,
            branding and execution together.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-primary-btn">
              Build your swag
              <ArrowUpRight size={17} />
            </a>

            <a href="#services" className="hero-secondary-btn">
              Explore what we do
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

        {/* RIGHT ANIMATION */}
        <div className="hero-visual">

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-card">

            <div className="hero-card-top">
              <span>SWAGARAGE</span>
              <Sparkles size={17} />
            </div>

            <div className="hero-card-content">


              <div
                className="hero-step-word"
                key={step.word}
              >
                {step.word}
              </div>

              <div
                className="hero-step-description"
                key={`${step.word}-description`}
              >
                {step.text}
              </div>

            </div>

            <div className="hero-card-progress">
              {heroSteps.map((item, index) => (
                <span
                  key={item.number}
                  className={
                    index === activeStep
                      ? 'active'
                      : ''
                  }
                />
              ))}
            </div>

          </div>

        </div>
        
      </div>

      {/* Bottom statement */}
      <div className="hero-bottom">

        <div>
          <span>THE SWAG JOURNEY</span>
        </div>

        <div className="hero-bottom-message">
          From first impression to lasting memory.
        </div>

      </div>

    </section>
  )
}