import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SOLUTIONS } from '../data/solutions'

const LOOPED_SOLUTIONS = [...SOLUTIONS, ...SOLUTIONS, ...SOLUTIONS]

const AUTO_SLIDE_INTERVAL = 3500
const SETTLE_DELAY = 500

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Solutions() {
  const trackRef = useRef(null)
  const settleTimer = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Measure real card positions instead of dividing scrollWidth by 3 -
  // percentage-based card widths don't always divide evenly, and a
  // fractional mismatch there lands the scroll mid-card instead of
  // exactly on a snap point.
  const getSetWidth = () => {
    const el = trackRef.current
    if (!el) return 0
    const first = el.children[0]
    const middleFirst = el.children[SOLUTIONS.length]
    if (!first || !middleFirst) return 0
    return middleFirst.offsetLeft - first.offsetLeft
  }

  const getCardStep = () => {
    const el = trackRef.current
    if (!el) return 0
    const first = el.children[0]
    const second = el.children[1]
    if (!first || !second) return 0
    return second.offsetLeft - first.offsetLeft
  }

  // Start exactly at the middle copy's first card so there's a full set
  // of cards to scroll through in either direction before a loop-point
  // is reached.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const middleFirst = el.children[SOLUTIONS.length]
    if (middleFirst) el.scrollLeft = middleFirst.offsetLeft
  }, [])

  // Once a scroll settles, if it drifted into the outer copies, jump
  // (instantly, no animation) back into the equivalent spot in the middle
  // copy. The copies are identical, so the jump is invisible - this is
  // what makes the loop feel infinite instead of snapping back to start.
  const recenter = () => {
    const el = trackRef.current
    if (!el) return
    const setWidth = getSetWidth()
    if (!setWidth) return
    if (el.scrollLeft <= 4) {
      el.scrollLeft += setWidth
    } else if (el.scrollLeft >= setWidth * 2 - 4) {
      el.scrollLeft -= setWidth
    }
  }

  const slide = (direction) => {
    const el = trackRef.current
    if (!el) return

    const step = getCardStep() || 380
    el.scrollBy({ left: direction * step, behavior: 'smooth' })

    clearTimeout(settleTimer.current)
    settleTimer.current = setTimeout(recenter, SETTLE_DELAY)
  }

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused) slide(1)
    }, AUTO_SLIDE_INTERVAL)

    return () => {
      clearInterval(id)
      clearTimeout(settleTimer.current)
    }
  }, [isPaused])

  return (
    <section id="solutions" className="relative overflow-hidden bg-ink text-white light:bg-paper light:text-ink">

      <div className="mx-auto max-w-[1440px] px-6 pt-20 pb-10 sm:px-10 sm:pt-24 sm:pb-12 lg:px-24">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0}
              variants={fadeUp}
              className="text-3xl font-extrabold sm:text-4xl"
            >
              Our Solutions
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.1}
              variants={fadeUp}
              className="mt-4 max-w-xl text-[15px] leading-[2] tracking-wide text-white/55 light:text-ink/60 sm:text-base"
            >
              Services are professional offerings provided by businesses to
              meet specific needs or solve problems for their customers.
              Services can range from your budget.
            </motion.p>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <button
              type="button"
              aria-label="Previous solution"
              onClick={() => slide(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next solution"
              onClick={() => slide(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-ink"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {LOOPED_SOLUTIONS.map(({ slug, icon: Icon, title, description, features }, i) => (
            <Link
              key={`${title}-${i}`}
              to={`/solutions/${slug}`}
              className="w-full shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.1 * (i % SOLUTIONS.length)}
                variants={fadeUp}
                className="group relative h-full cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-brand/40 light:border-ink/10 light:bg-ink/[0.025]"
              >
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-brand/10 blur-xl transition-opacity group-hover:opacity-80" />
                  <Icon className="relative h-9 w-9 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="w-fit text-2xl font-bold transition-colors group-hover:text-brand">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.9] text-white/55 light:text-ink/60">
                  {description}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-white/10 pt-5 light:border-ink/10">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="text-sm font-semibold text-white/85 light:text-ink/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
