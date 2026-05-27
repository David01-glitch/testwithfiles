import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center max-w-xl">
        <p className="font-heading text-7xl text-sunset">404</p>
        <h1 className="h-title mt-3">Took a wrong turn?</h1>
        <p className="h-sub">This page seems to have driven off the map. Let's get you back to the main highway.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">Back to the road</Link>
      </div>
    </section>
  )
}
