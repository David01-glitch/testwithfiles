import ExpandableCard from '../components/ExpandableCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { images } from '../utils/data.js'

const guides = [
  { id: 31, tag: '7 Days', title: 'The Mother Road: Chicago to Santa Monica', img: images.h2,
    excerpt: 'A week-long Route 66 itinerary covering the original alignments, must-stop motels, and the diners that still feel like 1959.',
    body: 'Day 1 — Chicago to Springfield. Day 2 — Springfield to Tulsa. Day 3 — Tulsa to Amarillo. Day 4 — Amarillo to Santa Fe. Day 5 — Santa Fe to Holbrook. Day 6 — Holbrook to Kingman. Day 7 — Kingman to Santa Monica Pier. Includes lodging picks for every night.' },
  { id: 32, tag: '5 Days', title: 'Blue Ridge Parkway: A Slow Mountain Drift', img: images.h1,
    excerpt: 'Five unhurried days from Cherokee to Waynesboro with overlooks, mountain inns, and small-town suppers.',
    body: 'We cap each driving day at 90 miles to leave room for hiking spurs, antique-store stops, and porch coffee. Best in early October when the leaves run gold and the crowds run thin.' },
  { id: 33, tag: '4 Days', title: 'Pacific Coast Highway: SF to LA', img: images.h3,
    excerpt: 'A four-day coastal classic — Big Sur, Hearst Castle, Cambria, and a sunset martini in Santa Barbara.',
    body: 'Reserve Big Sur lodging six months out. Drive northbound for the inside lane and the better photo pull-offs. The Madonna Inn is mandatory for one night.' },
  { id: 34, tag: '3 Days', title: 'Great River Road: Iowa to Memphis', img: images.s1,
    excerpt: 'Three Mississippi-hugging days of catfish lunches, blues jukeboxes, and river-town front porches.',
    body: 'Sleep in Hannibal MO, eat lunch in Cairo IL, finish on Beale Street. The Crown Plaza diner in Vicksburg is worth the 20-minute detour.' }
]

export default function Guides() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader kicker="Road Trip Guides" title="Hand-drawn itineraries for the unhurried" subtitle="Every guide includes drive times, lodging picks, and a diner for each meal." />
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map(g => <ExpandableCard key={g.id} {...g} cta="Open the Guide" />)}
        </div>
      </div>
    </section>
  )
}
