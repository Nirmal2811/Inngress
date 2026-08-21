import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SolutionDetail from './pages/SolutionDetail'
import { getSolutionBySlug } from './data/solutions'

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      document.title = 'Inngress TechSolutions-LLP'
    } else if (pathname === '/about') {
      document.title = 'About - Inngress TechSolutions-LLP'
    } else if (pathname === '/contact') {
      document.title = 'Contact - Inngress TechSolutions-LLP'
    } else if (pathname.startsWith('/solutions/')) {
      const slug = pathname.split('/solutions/')[1]
      const solution = getSolutionBySlug(slug)
      document.title = solution
        ? `${solution.title} - Inngress TechSolutions-LLP`
        : 'Inngress TechSolutions-LLP'
    } else {
      document.title = 'Inngress TechSolutions-LLP'
    }
  }, [pathname])

  return null
}

function App() {
  return (
    <SmoothScroll>
      <PageLoader />
      <PageTitle />
      <ScrollToTopOnNavigate />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions/:slug" element={<SolutionDetail />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </SmoothScroll>
  )
}

export default App
