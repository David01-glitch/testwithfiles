import hero2 from '../assets/images/hero/hero2.jpg'
import SectionHeader from '../components/SectionHeader.jsx'

export default function About() {
  return (
    <>
      <section className="relative">
        <img src={hero2} alt="Classic car on highway" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative container-x py-24 text-cream">
          <span className="tag text-cream/80">About Us</span>
          <h1 className="font-heading text-4xl sm:text-5xl mt-2 max-w-3xl">A love letter to the American road.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="h-title">Where this journey began</h2>
            <p className="mt-4 text-brownv/85 leading-relaxed">Classic American Roads started as a glovebox notebook — diner receipts, motel matchbooks, scribbled directions to overlooks only locals knew. After ten years of drives between Nashville and Santa Monica, we decided the notebook deserved a wider audience.</p>
            <p className="mt-4 text-brownv/85 leading-relaxed">Today, we document the slower side of American travel: the chrome diners that still hand-press their burgers, the family-owned motels that hand you a real key, and the back-road towns that didn't get the memo to hurry up.</p>
          </div>
          <div className="bg-cream rounded-2xl p-8 shadow-soft">
            <h3 className="font-heading text-2xl text-ink">What we believe</h3>
            <ul className="mt-4 space-y-3 text-brownv/85">
              <li>• The journey matters more than the mile marker.</li>
              <li>• A handwritten "Vacancy" sign is still the best welcome in America.</li>
              <li>• Pie is a road-trip food group.</li>
              <li>• Slow travel is the most honest kind.</li>
              <li>• Every small town has a story worth pulling over for.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeader kicker="Team" title="The drivers behind the dispatches" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: 'Eleanor M.', r: 'Editor & Long-Hauler', b: 'Forty-eight states by Buick, two by Greyhound.' },
              { n: 'Walter J.', r: 'Photographer', b: 'Shoots on film when the diner light demands it.' },
              { n: 'Doris K.', r: 'Itinerary Architect', b: 'Will reroute six hours for a good slice of pie.' }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-soft p-6 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-sunset/20 grid place-content-center text-3xl font-heading text-sunset">{p.n[0]}</div>
                <h3 className="font-heading text-xl mt-4 text-ink">{p.n}</h3>
                <p className="text-sm text-sunset font-semibold">{p.r}</p>
                <p className="text-sm text-brownv/80 mt-2">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
