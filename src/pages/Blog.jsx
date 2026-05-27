import { stories } from '../utils/data.js'
import ExpandableCard from '../components/ExpandableCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const extras = [
  { id: 11, tag: 'Tennessee', title: 'Hidden Highway Gems Across Tennessee', img: stories[0].img,
    excerpt: 'From the Natchez Trace to the Cherohala Skyway — backroads that turn a four-hour drive into a four-day memory.',
    body: 'We mapped six lesser-known Tennessee detours, each pairing a scenic stretch with a hand-picked diner and a motor court worth a night. Pack a thermos and head south at sunrise.' },
  { id: 12, tag: 'History', title: 'Nostalgic Travel Stories from Old America', img: stories[3].img,
    excerpt: 'Postcards, motel matchbooks, and the photographs that kept a generation dreaming of the next exit.',
    body: 'A reader-submitted archive of road trip memorabilia from 1955–1979 — annotated with the highways, hotels, and small-town stops behind each artifact.' }
]

export default function Blog() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader kicker="The Glovebox Journal" title="Stories, dispatches & field notes" subtitle="Every article expands inline — no extra pages, no detours." />
        <div className="grid md:grid-cols-2 gap-6">
          {[...stories, ...extras].map(s => <ExpandableCard key={s.id} {...s} />)}
        </div>
      </div>
    </section>
  )
}
