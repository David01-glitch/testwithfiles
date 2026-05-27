import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/guides', label: 'Road Trip Guides' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-cream/85 border-b border-brownv/10">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg text-ink">
          <span className="w-8 h-8 rounded-full bg-sunset text-cream grid place-content-center text-sm">CR</span>
          Classic American Roads
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({isActive}) => `transition hover:text-sunset ${isActive ? 'text-sunset font-semibold' : 'text-brownv'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button aria-label="Menu" onClick={()=>setOpen(!open)} className="md:hidden text-brownv text-2xl">{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-brownv/10 bg-cream">
          <div className="container-x py-3 flex flex-col gap-3 text-sm">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={()=>setOpen(false)}
                className={({isActive}) => `py-1 ${isActive ? 'text-sunset font-semibold' : 'text-brownv'}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
