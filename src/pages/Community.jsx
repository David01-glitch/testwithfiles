import { community } from '../utils/data.js'
import SectionHeader from '../components/SectionHeader.jsx'
import ExpandableCard from '../components/ExpandableCard.jsx'
import { images } from '../utils/data.js'

const memories = [
  { id: 21, tag: 'Reader Story', title: 'A Honeymoon Re-Run, Forty Years Later', img: images.s3,
    excerpt: 'Frank & Doris retraced their 1984 honeymoon down Highway 1 — same convertible, same motel, new memories.',
    body: 'They booked the same room at the Madonna Inn, ate at the same San Luis Obispo diner, and pulled over at every single Big Sur overlook. The pictures will make you call your spouse.' },
  { id: 22, tag: 'Postcard', title: 'The Diner That Saved Our Trip', img: images.d3,
    excerpt: 'Margaret writes about the rainstorm that stranded her family — and the Iowa diner that adopted them for an evening.',
    body: 'Hot coffee, vinyl booths, and a jukebox that still took quarters. Three hours later, the rain stopped and they had a new annual tradition.' }
]

export default function Community() {
  return (
    <>
      <section className="section">
        <div className="container-x">
          <SectionHeader kicker="Our Community" title="Travelers, retirees & road-romantics" subtitle="The Classic American Roads community is a porch full of storytellers — pull up a rocking chair." />
          <div className="grid md:grid-cols-3 gap-6">
            {community.map((c, i) => (
              <div key={i} className="card p-6 text-center">
                <img src={c.img} alt={c.name} loading="lazy" className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-cream" />
                <p className="mt-4 italic text-brownv/85">"{c.quote}"</p>
                <p className="mt-3 font-semibold text-ink">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeader kicker="Reader Stories" title="Postcards from your travels" />
          <div className="grid md:grid-cols-2 gap-6">
            {memories.map(m => <ExpandableCard key={m.id} {...m} cta="View Story" />)}
          </div>
        </div>
      </section>
    </>
  )
}
