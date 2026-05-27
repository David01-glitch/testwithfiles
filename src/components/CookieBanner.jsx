import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!localStorage.getItem('car_cookies')) setShow(true)
  }, [])
  if (!show) return null
  const accept = () => { localStorage.setItem('car_cookies', '1'); setShow(false) }
  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:max-w-md z-50 bg-ink text-cream rounded-2xl shadow-soft p-4 text-sm flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <p className="flex-1">We use cookies to improve your experience and analyze site traffic. By browsing, you agree to our use of cookies.</p>
      <button onClick={accept} className="bg-sunset hover:bg-fadered text-white rounded-full px-4 py-2 transition">Accept</button>
    </div>
  )
}
