import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import { trackEvent } from '../utils/analytics.js'

export default function Contact() {
  const [done, setDone] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    trackEvent('contact_form_submit')
    setDone(true)
  }
  return (
    <section className="section">
      <div className="container-x grid md:grid-cols-2 gap-10">
        <div>
          <SectionHeader kicker="Get in touch" title="Drop us a postcard" subtitle="Tip on a hidden diner? Question about a guide? We read every note." center={false} />
          <div className="space-y-4 text-brownv mt-4">
            <p><strong className="text-ink">Email</strong><br/>classicamericanroads@gmail.com</p>
            <p><strong className="text-ink">Phone</strong><br/>+1 (704) 684-9215</p>
            <p><strong className="text-ink">Mailing Address</strong><br/>455 Country Route Blvd<br/>Nashville, TN 37203</p>
            <p><strong className="text-ink">Hours</strong><br/>Mon–Fri · 9am to 5pm CT</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-soft p-8">
          {done ? (
            <div className="text-center py-10">
              <div className="text-5xl">✉️</div>
              <h3 className="font-heading text-2xl mt-3 text-ink">Postcard received</h3>
              <p className="text-brownv/80 mt-2">We'll write back within two business days.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h3 className="font-heading text-2xl text-ink">Send a message</h3>
              <input required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-brownv/20 focus:outline-none focus:ring-2 focus:ring-sunset" />
              <input required type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-brownv/20 focus:outline-none focus:ring-2 focus:ring-sunset" />
              <input placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-brownv/20 focus:outline-none focus:ring-2 focus:ring-sunset" />
              <textarea required rows="5" placeholder="Tell us about your road…" className="w-full px-4 py-3 rounded-xl border border-brownv/20 focus:outline-none focus:ring-2 focus:ring-sunset" />
              <button className="btn-primary w-full justify-center">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
