import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Community from './pages/Community.jsx'
import Guides from './pages/Guides.jsx'
import Contact from './pages/Contact.jsx'
import Category from './pages/Category.jsx'
import { Privacy, Terms, Refund } from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
