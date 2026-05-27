import { useParams, Link } from 'react-router-dom'
import { categories, stories } from '../utils/data.js'
import ExpandableCard from '../components/ExpandableCard.jsx'

export default function Category() {
  const { slug } = useParams()
  const cat = categories.find(c => c.slug === slug)
  if (!cat) {
    return (
      <section className="section container-x text-center">
        <h1 className="h-title">Category not found</h1>
        <Link to="/" className="btn-primary mt-6">Back home</Link>
      </section>
    )
  }
  return (
    <>
      <section className="relative">
        <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative container-x py-24 text-cream">
          <span className="tag text-cream/80">Category</span>
          <h1 className="font-heading text-4xl sm:text-5xl mt-2">{cat.title}</h1>
          <p className="mt-3 max-w-2xl text-cream/85">{cat.blurb}</p>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            {stories.map(s => <ExpandableCard key={s.id} {...s} />)}
          </div>
        </div>
      </section>
    </>
  )
}
