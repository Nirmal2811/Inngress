import { useId } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, BadgeCheck } from 'lucide-react'

const STATS = [
  {
    icon: SlidersHorizontal,
    title: 'Customized Solutions',
    description: 'Tailored to your unique requirements and goals.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Reliability',
    description: 'Consistent results you can count on, every time.',
  },
]

const BADGE_TEXT = 'WE ARE PROVIDED IT SERVICES • WE ARE PROVIDED IT SERVICES • '

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function YearsBadge({ className = '' }) {
  const pathId = useId()

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      className={`flex h-32 w-32 shrink-0 items-center justify-center drop-shadow-[0_8px_30px_rgba(110,56,149,0.45)] sm:h-36 sm:w-36 ${className}`}
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        <circle cx="100" cy="100" r="96" className="fill-brand" />
        <path
          id={pathId}
          d="M 100,100 m -68,0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"
          fill="none"
        />
        <text fontSize="10.5" fontWeight="700" letterSpacing="1.5" className="fill-ink">
          <textPath href={`#${pathId}`} startOffset="0%">
            {BADGE_TEXT}
          </textPath>
        </text>
      </motion.svg>
      <div className="relative z-10 flex flex-col items-center justify-center text-ink">
        <span className="text-3xl font-extrabold leading-none">10</span>
        <span className="mt-1 text-sm font-semibold">Years</span>
      </div>
    </motion.div>
  )
}

function Approach() {
  return (
    <section className="relative overflow-hidden bg-ink text-white light:bg-paper light:text-ink">

      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-24">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          variants={fadeUp}
          className="text-3xl font-extrabold sm:text-4xl"
        >
          Our Approach
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.1}
          variants={fadeUp}
          className="mt-4 max-w-xl text-[15px] leading-[2] tracking-wide text-white/55 light:text-ink/60 sm:text-base"
        >
          Services are professional offerings provided by businesses to meet
          specific needs or solve problems for their customers. Services can
          range from your budget.
        </motion.p>

        <div className="mt-20 grid gap-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* image collage */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
            variants={fadeUp}
            className="relative mx-auto w-full max-w-md"
          >
            <span className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-brand/20 blur-[100px]" />

            <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 light:ring-ink/10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Team brainstorming with sticky notes"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -right-2 w-[45%] overflow-hidden rounded-2xl border-4 border-ink light:border-paper shadow-2xl">
              <div className="aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
                  alt="Colleagues reviewing work on a laptop"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <YearsBadge className="absolute -bottom-8 -left-6 sm:-left-10" />
          </motion.div>

          {/* copy + stats */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.2}
            variants={fadeUp}
          >
            <h3 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
              Unlock The Potential
              <br />
              Of Your Business.
            </h3>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.9] text-white/55 light:text-ink/60">
              We believe in delivering tailored solutions that are designed
              to address your unique requirements. We take the time to
              understand your business and provide personalized services
              that align with your goals.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {STATS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand/40 light:border-ink/10 light:bg-ink/[0.025]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <p className="mt-4 text-base font-bold">{title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50 light:text-ink/55">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Approach
