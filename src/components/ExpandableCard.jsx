import { useState } from 'react'

export default function ExpandableCard({ tag, title, img, excerpt, body, cta = 'Read More' }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="card flex flex-col">
      <img src={img} alt={title} loading="lazy" className="w-full h-52 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        {tag && <span className="tag mb-2">{tag}</span>}
        <h3 className="font-heading text-xl text-ink leading-snug">{title}</h3>
        <p className="text-sm text-brownv/80 mt-2 leading-relaxed">{excerpt}</p>
        <div className={`grid transition-all duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <p className="text-sm text-brownv/90 leading-relaxed border-l-2 border-sunset/50 pl-4">{body}</p>
          </div>
        </div>
        <button onClick={() => setOpen(!open)} className="mt-4 self-start text-sm font-semibold text-sunset hover:text-fadered transition">
          {open ? '— Show less' : `${cta} →`}
        </button>
      </div>
    </article>
  )
}
