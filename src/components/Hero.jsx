import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight, ArrowDown, Play } from 'lucide-react'
import {
  LinkedinIcon,
  PinterestIcon,
  InstagramIcon,
  FacebookIcon,
} from './icons/SocialIcons'
import { useTapEffect } from '../lib/useTapEffect'

const SLIDES = [
  {
    title: ['Application', 'Modernization.'],
    description:
      'We help you move beyond outdated, hard-to-maintain systems by re-platforming and re-architecting applications for the cloud.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    thumb:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: ['Cloud Advisory', 'You Can Trust.'],
    description:
      'We guide your organization through cloud strategy, governance, and adoption decisions, so you build with confidence from day one.',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop',
    thumb:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: ['Cybersecurity', 'That Never Sleeps.'],
    description:
      'End-to-end protection for your systems, data, and people, from risk assessment and hardening to managed detection and response.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    thumb:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: ['AI Solutions,', 'Built For Impact.'],
    description:
      'We design and deploy AI-driven solutions tailored to your business, from intelligent automation to custom machine learning models.',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
    thumb:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
  },
]

const AUTOPLAY_INTERVAL = 5500

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Hero() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)
  const [ctaTapped, triggerCtaTap] = useTapEffect()

  useEffect(() => {
    if (isPaused) return

    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, AUTOPLAY_INTERVAL)

    return () => clearInterval(timerRef.current)
  }, [isPaused])

  const slide = SLIDES[active]

  // Mouse-following parallax: track cursor position across the section
  // (normalized to -1..1) and let the hero image drift toward it, with
  // the video-thumbnail bubble drifting further for a layered depth feel.
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 })
  const imageX = useTransform(springX, [-1, 1], [-14, 14])
  const imageY = useTransform(springY, [-1, 1], [-14, 14])
  const thumbX = useTransform(springX, [-1, 1], [-26, 26])
  const thumbY = useTransform(springY, [-1, 1], [-26, 26])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const scrollToPartners = () => {
    const target = document.getElementById('partners')
    if (!target) return

    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -80 })
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-ink text-white light:bg-paper light:text-ink"
    >
      {/* mobile-only hero glow (desktop gets visual interest from the parallax image) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden sm:hidden">
        {/* dark theme: animated aurora blobs */}
        <div className="absolute inset-0 light:hidden">
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -16, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-16 left-1/2 h-80 w-80 -translate-x-[35%] rounded-full bg-brand/25 blur-[80px]"
          />
          <motion.div
            animate={{ x: [0, -16, 0], y: [0, 14, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-10 left-1/2 h-64 w-64 -translate-x-[60%] rounded-full bg-accent/20 blur-[70px]"
          />
        </div>

        {/* light theme: smooth, low-opacity wash instead of a hard blurred blob */}
        <div
          className="absolute inset-0 hidden light:block"
          style={{
            backgroundImage:
              'radial-gradient(60% 40% at 50% 0%, rgba(110,56,149,0.12), transparent 70%)',
          }}
        />
      </div>

      {/* decorative dotted texture, layered above the glow so it stays crisp */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [--dot:rgba(255,255,255,0.14)] light:opacity-70 light:[--dot:rgba(12,12,15,0.1)] max-sm:light:[--dot:rgba(0,0,0,0.18)]"
        style={{
          backgroundImage: 'radial-gradient(var(--dot) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="pointer-events-none absolute inset-y-0 left-16 hidden w-px bg-white/10 light:bg-ink/10 lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-16 hidden w-px bg-white/10 light:bg-ink/10 lg:block" />

      {/* left slider dots */}
      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-10 lg:flex">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2.5 w-2.5 rounded-full border transition-colors ${
              i === active
                ? 'border-brand bg-brand'
                : 'border-white/30 bg-transparent hover:border-white/60 light:border-ink/25'
            }`}
          />
        ))}
      </div>

      {/* right rail: social icons (inside the border strip) */}
      <div className="absolute right-6 top-40 z-10 hidden flex-col items-center gap-5 text-white/60 light:text-ink/55 lg:flex">
        <a href="#" aria-label="LinkedIn" className="hover:text-brand transition-colors">
          <LinkedinIcon className="h-4 w-4" />
        </a>
        <span className="h-6 w-px bg-white/20 light:bg-ink/15" />
        <a href="#" aria-label="Pinterest" className="hover:text-brand transition-colors">
          <PinterestIcon className="h-4 w-4" />
        </a>
        <span className="h-6 w-px bg-white/20 light:bg-ink/15" />
        <a href="#" aria-label="Instagram" className="hover:text-brand transition-colors">
          <InstagramIcon className="h-4 w-4" />
        </a>
        <span className="h-6 w-px bg-white/20 light:bg-ink/15" />
        <a href="#" aria-label="Facebook" className="hover:text-brand transition-colors">
          <FacebookIcon className="h-4 w-4" />
        </a>
      </div>

      {/* scroll indicator: sits left of the border rail, not boxed inside it */}
      <div className="absolute bottom-14 right-24 z-10 hidden flex-col items-center gap-4 lg:flex">
        <span
          className="text-[11px] font-semibold tracking-[0.3em] text-white/60 light:text-ink/55"
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL DOWN
        </span>
        <button
          type="button"
          aria-label="Scroll down to Our Partners"
          onClick={scrollToPartners}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-ink"
        >
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* left: copy */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial="hidden" animate="show" exit="hidden">
                <motion.h1
                  custom={0}
                  variants={fadeUp}
                  className="min-h-[137px] text-[42px] font-black leading-[1.08] tracking-tight sm:min-h-[156px] sm:text-5xl lg:min-h-[188px] lg:text-[58px]"
                >
                  {slide.title[0]}
                  <br />
                  {slide.title[1]}
                </motion.h1>

                <motion.p
                  custom={0.15}
                  variants={fadeUp}
                  className="mt-6 max-w-md text-[15px] leading-[2] tracking-wide text-white/55 light:text-ink/60 sm:text-base"
                >
                  {slide.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-7"
            >
              <button
                type="button"
                onClick={triggerCtaTap}
                className="group relative overflow-hidden rounded-md bg-brand px-8 py-4 text-sm font-semibold text-ink"
              >
                <span
                  className={`pointer-events-none absolute inset-0 origin-bottom-left bg-black transition-transform duration-500 ease-out group-hover:scale-100 ${ctaTapped ? 'scale-100' : 'scale-0'}`}
                />
                <span
                  className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 bg-brand"
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                />
                <span
                  className={`relative z-10 transition-colors duration-300 group-hover:text-white ${ctaTapped ? 'text-white' : ''}`}
                >
                  Start a Project
                </span>
              </button>
              <a
                href="#"
                className="group flex items-center gap-3 text-sm font-semibold"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors group-hover:bg-white group-hover:text-ink light:border-ink/20 light:group-hover:bg-ink light:group-hover:text-white">
                  <ArrowUpRight className="h-[18px] w-[18px]" />
                </span>
                Explore More
              </a>
            </motion.div>
          </div>

          {/* right: image (hidden on mobile) */}
          <div className="relative hidden justify-center sm:flex lg:justify-end lg:pr-24">
            <motion.div
              style={{ x: imageX, y: imageY }}
              className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[430px] lg:w-[430px]"
            >
              <div className="absolute inset-0 rounded-full bg-brand/20 blur-3xl" />

              <div className="absolute inset-0 overflow-hidden rounded-full ring-1 ring-white/10 light:ring-ink/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active}
                    src={slide.image}
                    alt={slide.title.join(' ')}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>

              <motion.div
                style={{ x: thumbX, y: thumbY }}
                className="absolute -right-2 -top-4 h-24 w-24 overflow-hidden rounded-full border-4 border-ink shadow-xl light:border-paper sm:-right-6 sm:h-32 sm:w-32"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active}
                    src={slide.thumb}
                    alt="Watch our story"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors hover:bg-black/50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white sm:h-10 sm:w-10">
                    <Play className="ml-0.5 h-4 w-4 fill-ink text-ink" />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
