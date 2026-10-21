import React, { useState } from 'react'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import { faqs } from './data.js'

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <section className="faq section-pad" id="faq">
      <div className="section-kicker"><span>GOOD TO KNOW</span></div>
      <div className="faq-grid">
        <div>
          <h2>Questions?<br/><em>We’re listening.</em></h2>
          <p>A good project starts with a good conversation. Here are a few things people often ask us.</p>
          <a href="#contact" className="underlined-link">Ask us something else <ArrowUpRight size={16}/></a>
        </div>
        <div className="faq-list">
          {faqs.map(([q,a], i) => (
            <div className={`faq-item ${activeFaq === i ? 'faq-active' : ''}`} key={q}>
              <button onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}>
                <span>{q}</span>{activeFaq === i ? <Minus size={18}/> : <Plus size={18}/>}
              </button>
              {activeFaq === i && <p>{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
