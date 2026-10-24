import React from 'react'

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="about-image">
        <img src="/assets/Goldwrap.png" alt="Thoughtfully wrapped gifts with ribbon"/>
        <div className="about-stamp">MADE WITH<br/><b>INTENTION</b><span>✳</span></div>
      </div>
      <div className="about-copy">
        <div className="section-kicker"><span>A LITTLE ABOUT US</span></div>
        <h2>We care about<br/><em>the little things.</em></h2>
        <p>Swagarage is a Bengaluru-based corporate gifting and branded merchandise partner built around a simple belief: your brand should make the right impression wherever it goes.</p>
        <p>With over four years of hands-on industry experience behind the business, we understand that finding a product is only one part of the job. The right branding, realistic pricing, quality checks and a delivery plan matter just as much.</p>
        <blockquote>“We’re here to build something clients come back to — because the experience is worth it.”</blockquote>
        <span className="founder-sign">THE SWAGARAGE PROMISE</span>
      </div>
    </section>
  )
}
