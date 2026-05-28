import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/90 mt-16">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-heading font-bold text-lg">
            <span className="w-8 h-8 rounded-full bg-sunset text-cream grid place-content-center text-sm">CR</span>
            Classic American Roads
          </div>
          <p className="mt-4 text-sm text-cream/70 leading-relaxed">Nostalgic travel stories from the highways, diners, and small towns that still make America feel like home.</p>
        </div>
        <div>
          <h4 className="text-cream font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link to="/category/scenic-highways" className="hover:text-sunset">Scenic Highways</Link></li>
            <li><Link to="/category/small-town-stories" className="hover:text-sunset">Small Town Stories</Link></li>
            <li><Link to="/category/vintage-diners" className="hover:text-sunset">Vintage Diners</Link></li>
            <li><Link to="/category/classic-motels" className="hover:text-sunset">Classic Motels</Link></li>
            <li><Link to="/category/route-66-adventures" className="hover:text-sunset">Route 66 Adventures</Link></li>
            <li><Link to="/category/americana-photography" className="hover:text-sunset">Americana Photography</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-cream font-semibold mb-3">Visit</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link to="/about" className="hover:text-sunset">About</Link></li>
            <li><Link to="/blog" className="hover:text-sunset">Blog</Link></li>
            <li><Link to="/guides" className="hover:text-sunset">Road Trip Guides</Link></li>
            <li><Link to="/community" className="hover:text-sunset">Community</Link></li>
            <li><Link to="/contact" className="hover:text-sunset">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-cream font-semibold mb-3">Get in touch</h4>
          <p className="text-sm text-cream/70">455 Country Route Blvd<br/>Nashville, TN 37203</p>
          <p className="text-sm text-cream/70 mt-2">classicamericanroads@gmail.com</p>
          <p className="text-sm text-cream/70">+1 (704) 684-9215</p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Classic American Roads. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-sunset">Privacy</Link>
            <Link to="/terms" className="hover:text-sunset">Terms</Link>
            <Link to="/refund" className="hover:text-sunset">Refund</Link>
            <Link to="/about" className="hover:text-sunset">About</Link>
            <Link to="/contact" className="hover:text-sunset">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
