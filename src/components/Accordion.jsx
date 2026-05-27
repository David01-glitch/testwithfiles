import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-brownv/15 bg-white rounded-2xl shadow-soft">
      {items.map((it, i) => (
        <div key={i}>
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between items-center text-left px-5 sm:px-7 py-5 hover:bg-cream/60 transition">
            <span className="font-heading text-lg text-ink">{it.q}</span>
            <span className={`text-sunset text-2xl transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <div className={`grid transition-all duration-500 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <p className="px-5 sm:px-7 pb-5 text-brownv/80 leading-relaxed">{it.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
