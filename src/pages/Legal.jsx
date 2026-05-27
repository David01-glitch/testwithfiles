import SectionHeader from '../components/SectionHeader.jsx'

function Wrap({ title, kicker, children }) {
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <SectionHeader kicker={kicker} title={title} center={false} />
        <div className="prose prose-stone mt-6 space-y-5 text-brownv/85 leading-relaxed">{children}</div>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <Wrap kicker="Legal" title="Privacy Policy">
      <p>Classic American Roads respects your privacy. This policy explains what data we collect, how we use it, and the choices you have.</p>
      <h3 className="font-heading text-xl text-ink">Information we collect</h3>
      <p>We collect your email address when you subscribe to our newsletter, and any details you voluntarily share through our contact form. We also use Google Analytics to understand traffic patterns — this includes anonymized device and location data.</p>
      <h3 className="font-heading text-xl text-ink">How we use it</h3>
      <p>To send the Sunday newsletter, respond to your questions, and improve the site. We never sell your data to third parties.</p>
      <h3 className="font-heading text-xl text-ink">Cookies</h3>
      <p>We use minimal cookies for site functionality and analytics. You can decline cookies via your browser settings.</p>
      <h3 className="font-heading text-xl text-ink">Your rights</h3>
      <p>You may request a copy of your data, ask us to correct or delete it, or unsubscribe at any time. Email classicamericanroads@gmail.com.</p>
      <p className="text-sm text-brownv/60">Last updated: May 2026</p>
    </Wrap>
  )
}

export function Terms() {
  return (
    <Wrap kicker="Legal" title="Terms & Conditions">
      <p>By using classicamericanroads.com you agree to these terms.</p>
      <h3 className="font-heading text-xl text-ink">Content</h3>
      <p>All articles, photographs, and itineraries are © Classic American Roads. Personal-use sharing is welcome with attribution; commercial reuse requires written permission.</p>
      <h3 className="font-heading text-xl text-ink">Use of the site</h3>
      <p>You agree not to misuse the site, attempt to access restricted areas, or submit unlawful content via our forms.</p>
      <h3 className="font-heading text-xl text-ink">Third-party links</h3>
      <p>We sometimes link to motels, diners, and tourism boards. We don't control those sites and aren't responsible for their content.</p>
      <h3 className="font-heading text-xl text-ink">Disclaimer</h3>
      <p>Road conditions, business hours, and lodging availability change. Always confirm details directly before traveling.</p>
      <p className="text-sm text-brownv/60">Last updated: May 2026</p>
    </Wrap>
  )
}

export function Refund() {
  return (
    <Wrap kicker="Legal" title="Refund Policy">
      <p>Most of Classic American Roads is free to read. For any paid products (downloadable guides, printed maps, merchandise) the following policy applies:</p>
      <h3 className="font-heading text-xl text-ink">Digital downloads</h3>
      <p>Refunds are available within 7 days of purchase if the file has not been downloaded. Email classicamericanroads@gmail.com with your order number.</p>
      <h3 className="font-heading text-xl text-ink">Physical goods</h3>
      <p>We accept returns of unused printed maps and merchandise within 30 days. Buyer covers return shipping; refund is issued upon receipt.</p>
      <h3 className="font-heading text-xl text-ink">Subscriptions</h3>
      <p>Newsletter subscriptions are free — you can unsubscribe at any time using the link at the bottom of any email.</p>
      <p className="text-sm text-brownv/60">Last updated: May 2026</p>
    </Wrap>
  )
}
