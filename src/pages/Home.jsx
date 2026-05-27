import { Link } from 'react-router-dom'
import { useState } from 'react'
import hero1 from '../assets/images/hero/hero1.jpg'
import { categories, stories, showcase, community, testimonials, faqs } from '../utils/data.js'
import ExpandableCard from '../components/ExpandableCard.jsx'
import Accordion from '../components/Accordion.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { trackEvent } from '../utils/analytics.js'

export default function Home() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const subscribe = (e) => {
    e.preventDefault()
    trackEvent('newsletter_signup', { email })
    setSent(true); setEmail('')
  }

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <img src={hero1} alt="Open American highway at sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70" />
        <div className="relative container-x py-28 sm:py-40 text-cream">
          <span className="tag text-cream/80">A Travel Journal of the Open Road</span>
          <h1 className="font-heading font-bold text-4xl sm:text-6xl leading-tight mt-3 max-w-3xl">Slow miles, neon nights, and the America that still feels like home.</h1>
          <p className="mt-5 max-w-xl text-cream/85 text-lg">Hand-curated road trip guides, vintage diner reviews, and small-town stories — gathered one peaceful mile at a time.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/guides" className="btn-primary">Plan a Road Trip</Link>
            <Link to="/blog" className="btn-ghost border-cream/40 text-cream hover:bg-cream hover:text-ink">Read the Stories</Link>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="section">
        <div className="container-x">
          <SectionHeader kicker="Travel Categories" title="Stories from every stretch of road" subtitle="Six worlds along the American highway — choose your detour." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(c => (
              <Link to={`/category/${c.slug}`} key={c.slug} className="card group">
                <div className="relative h-44 overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl text-ink">{c.title}</h3>
                  <p className="text-sm text-brownv/80 mt-1">{c.blurb}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-sunset">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING STORIES */}
      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeader kicker="Trending Now" title="Americana stories worth a long drive" subtitle="Tap any card to expand the full story right here on the page." />
          <div className="grid md:grid-cols-2 gap-6">
            {stories.map(s => (
              <ExpandableCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* SCENIC ROUTE SHOWCASE */}
      <section className="section">
        <div className="container-x">
          <SectionHeader kicker="Featured Routes" title="Scenic drives we keep returning to" />
          <div className="grid md:grid-cols-3 gap-6">
            {showcase.map((r, i) => (
              <div key={i} className="card relative">
                <img src={r.img} alt={r.title} loading="lazy" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-0 p-5 text-cream">
                  <span className="tag text-cream/80">{r.state} · {r.miles}</span>
                  <h3 className="font-heading text-xl mt-1">{r.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY MEMORIES */}
      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeader kicker="From Our Readers" title="Community memories from the road" subtitle="Stories shared by travelers who write us postcards from every corner of America." />
          <div className="grid md:grid-cols-3 gap-6">
            {community.map((c, i) => (
              <div key={i} className="card p-6 flex flex-col items-center text-center">
                <img src={c.img} alt={c.name} loading="lazy" className="w-20 h-20 rounded-full object-cover ring-4 ring-cream" />
                <p className="mt-4 text-brownv/80 italic leading-relaxed">"{c.quote}"</p>
                <p className="mt-3 text-sm font-semibold text-ink">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader kicker="Kind Words" title="Loved by readers across America" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-soft p-6">
                <div className="text-sunset text-2xl">★★★★★</div>
                <p className="mt-3 text-brownv/85 leading-relaxed">"{t.quote}"</p>
                <p className="mt-4 font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-brownv/60">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section bg-ink text-cream">
        <div className="container-x text-center max-w-2xl">
          <span className="tag text-sunset">The Glovebox Letter</span>
          <h2 className="font-heading text-3xl sm:text-4xl mt-2">A new road trip in your inbox each Sunday</h2>
          <p className="mt-3 text-cream/75">One handwritten itinerary, one diner worth driving to, one photo we couldn't stop staring at. No spam — promise.</p>
          {sent ? (
            <p className="mt-6 text-sunset font-semibold">Welcome aboard! See you Sunday.</p>
          ) : (
            <form onSubmit={subscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full text-ink focus:outline-none focus:ring-2 focus:ring-sunset" />
              <button className="btn-primary">Subscribe</button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <SectionHeader kicker="Frequently Asked" title="Questions from the highway" />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CONTACT */}
      <section className="section bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="tag">Say hello</span>
            <h2 className="h-title mt-2">Got a back-road tip? We'd love to hear it.</h2>
            <p className="h-sub">Tell us about the diner you can't stop thinking about, the motel sign that made you pull over, or the highway you wish more people knew.</p>
            <div className="mt-6 space-y-2 text-brownv">
              <p><strong className="text-ink">Email:</strong> classicamericanroads@gmail.com</p>
              <p><strong className="text-ink">Phone:</strong> (615) 555-8240</p>
              <p><strong className="text-ink">Mail:</strong> 455 Country Route Blvd, Nashville, TN 37203</p>
            </div>
            <Link to="/contact" className="btn-primary mt-6">Open the Mailbox</Link>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="font-heading text-xl text-ink">Send a quick postcard</h3>
            <form onSubmit={(e)=>{e.preventDefault(); trackEvent('contact_form_home'); alert('Thanks — we\'ll be in touch soon.')}} className="mt-4 space-y-3">
              <input required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-brownv/20 focus:outline-none focus:ring-2 focus:ring-sunset" />
              <input required type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl border border-brownv/20 focus:outline-none focus:ring-2 focus:ring-sunset" />
              <textarea required rows="4" placeholder="Tell us about your favorite road…" className="w-full px-4 py-3 rounded-xl border border-brownv/20 focus:outline-none focus:ring-2 focus:ring-sunset" />
              <button className="btn-primary w-full justify-center">Send Postcard</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
