import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Send, Sun, Moon } from 'lucide-react'
import { isLightMode, setLightMode } from '../lib/theme'
import { useTapEffect } from '../lib/useTapEffect'
import ShareDrawer from './ShareDrawer'
import Logo from './Logo'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Service', scrollTo: 'solutions' },
]

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(!isLightMode())
  }, [])

  const toggle = () => {
    setIsDark((wasDark) => {
      setLightMode(wasDark)
      return !wasDark
    })
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={toggle}
      className="relative flex h-9 w-16 shrink-0 items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-accent/50 light:border-ink/15 light:bg-ink/5"
    >
      <Sun className="absolute left-2 h-3.5 w-3.5 text-white/40 light:text-ink/40" />
      <Moon className="absolute right-2 h-3.5 w-3.5 text-white/40 light:text-ink/40" />
      <motion.span
        animate={{ x: isDark ? 34 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="absolute left-0 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white shadow-[0_2px_10px_rgba(110,56,149,0.55)]"
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </motion.span>
    </button>
  )
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [quoteTapped, triggerQuoteTap] = useTapEffect()

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#solutions') {
      const el = document.getElementById('solutions')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  const scrollToSolutions = () => {
    setMobileOpen(false)
    if (location.pathname === '/') {
      document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#solutions')
    }
  }

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur light:border-ink/10 light:bg-paper/90">
      <div className="pointer-events-none absolute inset-y-0 left-16 hidden w-px bg-white/10 light:bg-ink/10 lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-16 hidden w-px bg-white/10 light:bg-ink/10 lg:block" />

      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10 lg:px-24">
        <a href="/" className="flex items-center">
          <Logo className="h-12 sm:h-14" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.scrollTo ? (
              <button
                key={item.label}
                type="button"
                onClick={scrollToSolutions}
                className="cursor-pointer text-sm font-semibold text-white/85 transition-colors hover:text-accent light:text-ink/80"
              >
                {item.label}
              </button>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-white/85 light:text-ink/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Share"
            onClick={() => setShareOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-accent hover:bg-accent hover:text-white light:border-ink/20 light:text-ink"
          >
            <Send className="h-4 w-4" />
          </button>
          <a
            href="#"
            onClick={triggerQuoteTap}
            className="group relative overflow-hidden rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink"
          >
            <span
              className={`pointer-events-none absolute inset-0 origin-bottom-left bg-black transition-transform duration-500 ease-out group-hover:scale-100 ${quoteTapped ? 'scale-100' : 'scale-0'}`}
            />
            <span
              className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 bg-accent"
              style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            />
            <span
              className={`relative z-10 transition-colors duration-300 group-hover:text-white ${quoteTapped ? 'text-white' : ''}`}
            >
              Get A Quote
            </span>
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Share"
            onClick={() => setShareOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-accent hover:bg-accent hover:text-white light:border-ink/20 light:text-ink"
          >
            <Send className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white light:border-ink/20 light:text-ink"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 light:border-ink/10 lg:hidden"
          >
            <div className="px-6 py-2 sm:px-10">
              {NAV_ITEMS.map((item) =>
                item.scrollTo ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={scrollToSolutions}
                    className="block w-full cursor-pointer border-b border-white/10 light:border-ink/10 py-3.5 text-left text-sm font-semibold text-white/85 light:text-ink/80"
                  >
                    {item.label}
                  </button>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block border-b border-white/10 light:border-ink/10 py-3.5 text-sm font-semibold ${
                        isActive ? 'text-accent' : 'text-white/85 light:text-ink/80'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
              <a
                href="#"
                onClick={triggerQuoteTap}
                className="group relative mt-4 mb-6 block overflow-hidden rounded-md bg-accent px-6 py-3 text-center text-sm font-semibold text-ink"
              >
                <span
                  className={`pointer-events-none absolute inset-0 origin-bottom-left bg-black transition-transform duration-500 ease-out group-hover:scale-100 ${quoteTapped ? 'scale-100' : 'scale-0'}`}
                />
                <span
                  className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 bg-accent"
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                />
                <span
                  className={`relative z-10 transition-colors duration-300 group-hover:text-white ${quoteTapped ? 'text-white' : ''}`}
                >
                  Get A Quote
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

    <ShareDrawer isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </>
  )
}

export default Navbar
