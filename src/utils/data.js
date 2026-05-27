import h1 from '../assets/images/highways/h1.jpg'
import h2 from '../assets/images/highways/h2.jpg'
import h3 from '../assets/images/highways/h3.jpg'
import d1 from '../assets/images/diners/d1.jpg'
import d2 from '../assets/images/diners/d2.jpg'
import d3 from '../assets/images/diners/d3.jpg'
import m1 from '../assets/images/motels/m1.jpg'
import m2 from '../assets/images/motels/m2.jpg'
import m3 from '../assets/images/motels/m3.jpg'
import s1 from '../assets/images/smalltowns/s1.jpg'
import s2 from '../assets/images/smalltowns/s2.jpg'
import s3 from '../assets/images/smalltowns/s3.jpg'
import b1 from '../assets/images/blog/b1.jpg'
import b2 from '../assets/images/blog/b2.jpg'
import b3 from '../assets/images/blog/b3.jpg'
import b4 from '../assets/images/blog/b4.jpg'
import c1 from '../assets/images/community/c1.jpg'
import c2 from '../assets/images/community/c2.jpg'
import c3 from '../assets/images/community/c3.jpg'

export const images = { h1,h2,h3,d1,d2,d3,m1,m2,m3,s1,s2,s3,b1,b2,b3,b4,c1,c2,c3 }

export const categories = [
  { slug: 'scenic-highways', title: 'Scenic Highways', img: h1, blurb: 'Sun-drenched two-lane blacktops winding through the American heartland.' },
  { slug: 'small-town-stories', title: 'Small Town Stories', img: s1, blurb: 'Front porches, county fairs, and the soul of America found mile by mile.' },
  { slug: 'vintage-diners', title: 'Vintage Diners', img: d1, blurb: 'Chrome counters, blue-plate specials, and a slice of pie that tastes like 1962.' },
  { slug: 'classic-motels', title: 'Classic Motels', img: m1, blurb: 'Neon vacancy signs and mid-century roadside hospitality, beautifully preserved.' },
  { slug: 'route-66-adventures', title: 'Route 66 Adventures', img: h2, blurb: 'The Mother Road from Chicago to Santa Monica — one nostalgic mile at a time.' },
  { slug: 'americana-photography', title: 'Americana Photography', img: b1, blurb: 'Field notes and photographs that capture the quiet beauty of the open road.' }
]

export const stories = [
  { id: 1, tag: 'Diners', title: 'Best Small Town Diners in America', img: d2,
    excerpt: 'From the hand-cut fries of an Iowa truck stop to a Tennessee biscuit-and-gravy temple, we map the ten counter-stools that still feel like home.',
    body: 'Diners are America’s living rooms. We tracked down ten that still pour bottomless coffee at sunrise, still hand-letter the daily blue-plate on a chalkboard, and still know your name by the second visit. Pack an appetite — and bring cash.'
  },
  { id: 2, tag: 'Highways', title: 'Scenic Highways Worth Driving After Retirement', img: h3,
    excerpt: 'No deadlines, no traffic, no rush — just twelve relaxed routes built for the second act of life.',
    body: 'These roads were chosen for gentle curves, frequent overlooks, and small towns spaced like rest stops. Each route includes our favorite lunch stop, a quiet motel for the night, and a sunset pull-off you’ll never forget.'
  },
  { id: 3, tag: 'Motels', title: 'Vintage Motel Stops Along Route 66', img: m2,
    excerpt: 'Wagon Wheel, Blue Swallow, Munger Moss — the neon is still burning bright on the Mother Road.',
    body: 'We stayed at fifteen restored motor courts across eight states. The mattresses are new, the signs are original, and the owners will share stories until midnight if you let them. Reservations recommended in summer.'
  },
  { id: 4, tag: 'Stories', title: 'Peaceful Americana Road Trips', img: s2,
    excerpt: 'Slow itineraries for travelers who measure trips in moments, not miles.',
    body: 'A four-day loop through the Blue Ridge, a weekend along the Mississippi River Road, and a quiet meander up the California coast. Each comes with hand-drawn maps and a curated playlist of road songs.'
  }
]

export const showcase = [
  { title: 'Blue Ridge Parkway', img: h1, miles: '469 mi', state: 'NC → VA' },
  { title: 'Pacific Coast Highway', img: h2, miles: '655 mi', state: 'CA' },
  { title: 'Great River Road', img: h3, miles: '3,000 mi', state: 'MN → LA' }
]

export const community = [
  { name: 'Margaret — Asheville, NC', img: c1, quote: 'Found my favorite diner through their guide. The owner still hugs me when I visit.' },
  { name: 'Frank & Doris — Tulsa, OK', img: c2, quote: 'We renewed our vows under a neon vacancy sign in New Mexico. Pure magic.' },
  { name: 'Walter — Nashville, TN', img: c3, quote: 'Their Route 66 itinerary turned a bucket-list trip into the best month of our retirement.' }
]

export const testimonials = [
  { name: 'Helen Whitcomb', role: 'Retired teacher, 67', quote: 'Reading this site feels like flipping through my father’s old road atlas. Beautifully done.' },
  { name: 'Raymond Hollis', role: 'Photographer', quote: 'The small-town stories are the kind I wish someone had written thirty years ago. Now they exist.' },
  { name: 'Joanne Carver', role: 'Snowbird traveler', quote: 'Every itinerary they publish has earned a place in our glovebox. Thank you for the slow lane.' }
]

export const faqs = [
  { q: 'What are the best scenic road trips in America?', a: 'Our top picks are the Blue Ridge Parkway, Pacific Coast Highway, Great River Road, and a slow drive along Route 66. Each one balances scenery, small-town charm, and easy lodging.' },
  { q: 'Is Route 66 still worth visiting?', a: 'Absolutely. While I-40 replaced much of the original alignment, hundreds of miles remain drivable — and the motels, diners, and roadside attractions are arguably better preserved today than they were a decade ago.' },
  { q: 'What are the best small towns for retirees?', a: 'We love Bardstown KY, Galena IL, Beaufort SC, Sedona AZ, and Stowe VT — each offers walkable downtowns, friendly locals, and easy access to scenic drives.' },
  { q: 'How do I plan a relaxing road trip?', a: 'Drive no more than 4–5 hours a day, book lodging two nights in advance, leave one afternoon completely unscheduled, and always say yes when a local recommends a diner.' }
]
