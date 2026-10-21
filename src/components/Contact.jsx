import React, { useState } from 'react'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  CheckCircle2,
  Loader2,
} from 'lucide-react'

const GOOGLE_WEBHOOK_URL =
  import.meta.env.VITE_GOOGLE_WEBHOOK_URL

const initialForm = {
  name: '',
  email: '',
  company: '',
  need: 'Corporate gifting',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const updateField = (field) => (event) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }))
  }

  const submit = async (e) => {
    e.preventDefault()

    if (status === 'sending') return

    setStatus('sending')

    try {
      const body = new URLSearchParams()

      body.append('name', form.name)
      body.append('email', form.email)
      body.append('company', form.company)
      body.append('lookingFor', form.need)
      body.append('message', form.message)

      await fetch(GOOGLE_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      })

      setStatus('success')

      setForm(initialForm)

    } catch (error) {
      console.error('Form submission error:', error)

      setStatus('error')
    }
  }

  return (
    <section className="contact section-pad" id="contact">

      {/* =========================================
          LEFT CONTENT
      ========================================= */}

      <div className="contact-left">

        <div className="section-kicker section-kicker-light">
          <span>06</span>
          <span>LET'S BUILD YOUR SWAG</span>
        </div>

        <h2>
          Have a brief?
          <br />
          <em>We're all ears.</em>
        </h2>

        <p>
          Tell us what you're planning, who it's for and
          what you have in mind. We'll take it from there.
        </p>

        <div className="contact-details">

          <div>
            <Mail size={17} />
            <span>Start a conversation</span>
          </div>

          <div>
            <MapPin size={17} />
            <span>Bengaluru, India</span>
          </div>

        </div>

        <div className="contact-doodle">
          ✳
        </div>

      </div>


      {/* =========================================
          CONTACT FORM
      ========================================= */}

      <form
        className={`contact-form ${
          status === 'success'
            ? 'contact-form-success'
            : ''
        }`}
        onSubmit={submit}
      >

        {/* FORM HEADER */}

        <div className="form-top">

          <span>
            YOUR PROJECT, IN A FEW WORDS
          </span>
        </div>


        {/* NAME */}

        <label>
          Your name

          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={updateField('name')}
            placeholder="What should we call you?"
          />

        </label>


        {/* EMAIL + COMPANY */}

        <div className="form-row">

          <label>
            Work email

            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={updateField('email')}
              placeholder="you@company.com"
            />

          </label>


          <label>
            Company

            <input
              type="text"
              name="company"
              value={form.company}
              onChange={updateField('company')}
              placeholder="Your organisation"
            />

          </label>

        </div>


        {/* REQUIREMENT */}

        <label>
          What are you looking for?

          <select
            name="need"
            value={form.need}
            onChange={updateField('need')}
          >

            <option value="Corporate gifting">
              Corporate gifting
            </option>

            <option value="Employee welcome kits">
              Employee welcome kits
            </option>

            <option value="Branded merchandise">
              Branded merchandise
            </option>

            <option value="Event & campaign merchandise">
              Event & campaign merchandise
            </option>

            <option value="Custom kits & bundles">
              Custom kits & bundles
            </option>

            <option value="Something else">
              Something else
            </option>

          </select>

        </label>


        {/* MESSAGE */}

        <label>
          Tell us a little more

          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={updateField('message')}
            placeholder="Occasion, quantity, timeline, budget… whatever you know so far."
          />

        </label>


        {/* =========================================
            SUBMIT BUTTON
        ========================================= */}

        <button
          className={`button button-orange contact-submit ${
            status === 'success'
              ? 'submit-success'
              : ''
          }`}
          type="submit"
          disabled={status === 'sending'}
        >

          {status === 'sending' && (
            <>
              <span>Sending your brief...</span>
              <Loader2
                size={17}
                className="button-spinner"
              />
            </>
          )}

          {status === 'idle' && (
            <>
              <span>Send your brief</span>
              <ArrowUpRight size={17} />
            </>
          )}

          {status === 'success' && (
            <>
              <span>Brief sent successfully</span>
              <CheckCircle2 size={17} />
            </>
          )}

          {status === 'error' && (
            <>
              <span>Try again</span>
              <ArrowUpRight size={17} />
            </>
          )}

        </button>


        {/* =========================================
            STATUS MESSAGES
        ========================================= */}

        {status === 'success' && (
          <div className="form-success-message">

            <CheckCircle2 size={16} />

            <span>
              Thanks! We've received your brief.
              We'll get back to you soon.
            </span>

          </div>
        )}

        {status === 'error' && (
          <div className="form-error-message">

            <span>
              Something went wrong while sending your brief.
              Please try again.
            </span>

          </div>
        )}


        <small className="form-note">
          No pressure. No complicated forms.
          Just a good place to start.
        </small>

      </form>

    </section>
  )
}