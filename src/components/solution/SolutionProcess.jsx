import { motion } from 'framer-motion'
import { Search, Compass, Hammer, Rocket, ArrowRight } from 'lucide-react'

const STEPS = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We learn your goals, constraints, and users before touching a single line of a plan.',
  },
  {
    icon: Compass,
    title: 'Plan',
    description: 'We map the approach, timeline, and success metrics so everyone knows what "done" looks like.',
  },
  {
    icon: Hammer,
    title: 'Build',
    description: 'We design and implement in short, reviewable cycles, keeping you in the loop the whole way.',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We ship, monitor, and stay on for support so the work keeps performing after go-live.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function SolutionProcess() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink text-white light:border-ink/10 light:bg-paper light:text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-24">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          variants={fadeUp}
          className="text-3xl font-extrabold sm:text-4xl"
        >
          How We Work
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.1}
          variants={fadeUp}
          className="mt-4 max-w-xl text-[15px] leading-[2] tracking-wide text-white/55 light:text-ink/60 sm:text-base"
        >
          A straightforward process, repeated on every engagement so you
          always know what's happening and what comes next.
        </motion.p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="relative">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.1 * i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-brand/40 light:border-ink/10 light:bg-ink/[0.025]"
              >
                <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[84px] font-black leading-none text-white/[0.04] light:text-ink/[0.05]">
                  0{i + 1}
                </span>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <h3 className="relative mt-6 text-lg font-bold">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/55 light:text-ink/60">
                  {description}
                </p>
              </motion.div>

              {i < STEPS.length - 1 && (
                <span className="pointer-events-none absolute -right-4 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white lg:flex">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionProcess
