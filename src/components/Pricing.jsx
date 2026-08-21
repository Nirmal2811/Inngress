import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Settings, Gem } from 'lucide-react'

const FEATURES = [
  'Email & Communication Services',
  'Basic Data Backup And Storage',
  'Standard Security Measuring',
  'Limited Software Support',
  'Suitable For Small Businesses',
]

const PLANS = [
  {
    name: 'Basic Plan',
    icon: Settings,
    monthly: 29,
    yearly: 290,
    features: FEATURES,
    highlighted: false,
  },
  {
    name: 'Professional Plan',
    icon: null,
    monthly: 49,
    monthlyOriginal: 68,
    yearly: 490,
    yearlyOriginal: 680,
    discount: '30% Off',
    features: FEATURES,
    highlighted: true,
  },
  {
    name: 'Enterprise Plan',
    icon: Gem,
    monthly: 75,
    yearly: 750,
    features: FEATURES,
    highlighted: false,
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

function DiscountBadge({ label }) {
  const [amount, unit] = label.split(' ')

  return (
    <div className="absolute right-6 top-6 flex h-20 w-20 items-center justify-center">
      <motion.span
        animate={{ scale: [1, 1.7], opacity: [0.45, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
        className="absolute inset-2 rounded-full bg-white"
      />
      <motion.div
        initial={{ rotate: -8 }}
        animate={{ rotate: [-8, 4, -8] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gradient-to-br from-ink to-[#241533] text-white shadow-[0_10px_28px_rgba(0,0,0,0.5)] ring-2 ring-white/25"
      >
        <span className="absolute inset-1 rounded-full border border-dashed border-white/15" />
        <span className="text-base font-extrabold leading-none tracking-tight">
          {amount}
        </span>
        <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
          {unit}
        </span>
      </motion.div>
    </div>
  )
}

function PlanCard({ plan, cycle, index }) {
  const price = cycle === 'monthly' ? plan.monthly : plan.yearly
  const originalPrice =
    cycle === 'monthly' ? plan.monthlyOriginal : plan.yearlyOriginal
  const Icon = plan.icon

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      custom={0.1 * index}
      variants={fadeUp}
      className={`relative flex flex-col p-8 ${
        plan.highlighted
          ? 'bg-brand text-ink'
          : 'text-white light:text-ink'
      }`}
    >
      {plan.discount && <DiscountBadge label={plan.discount} />}

      <p
        className={`text-sm font-semibold ${
          plan.highlighted ? 'text-ink/70' : 'text-brand'
        }`}
      >
        {plan.name}
      </p>

      <div className="mt-4 flex items-start justify-between">
        <div className="flex items-baseline gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${plan.name}-${cycle}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex items-baseline gap-1.5"
            >
              <span className="text-4xl font-extrabold">
                <span className="align-top text-xl">$</span>
                {price}
              </span>
              {originalPrice && (
                <span
                  className={`text-sm line-through ${
                    plan.highlighted ? 'text-ink/50' : 'text-white/40 light:text-ink/40'
                  }`}
                >
                  ${originalPrice}
                </span>
              )}
              <span
                className={`text-sm ${
                  plan.highlighted ? 'text-ink/60' : 'text-white/50 light:text-ink/50'
                }`}
              >
                /{cycle === 'monthly' ? 'Monthly' : 'Yearly'}
              </span>
            </motion.span>
          </AnimatePresence>
        </div>

        {Icon && (
          <Icon
            className={`h-10 w-10 shrink-0 ${
              plan.highlighted ? 'text-ink/15' : 'text-white/10 light:text-ink/10'
            }`}
            strokeWidth={1.25}
          />
        )}
      </div>

      <div
        className={`mt-6 border-t pt-6 ${
          plan.highlighted ? 'border-ink/15' : 'border-white/10 light:border-ink/10'
        }`}
      >
        <ul className="flex flex-col gap-3.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm">
              <CheckCircle2
                className={`h-4 w-4 shrink-0 ${
                  plan.highlighted ? 'text-ink/70' : 'text-brand'
                }`}
              />
              <span
                className={
                  plan.highlighted ? 'text-ink/80' : 'text-white/70 light:text-ink/70'
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {plan.highlighted ? (
        <button
          type="button"
          className="group relative mt-8 w-full overflow-hidden rounded-md bg-ink py-3.5 text-sm font-semibold text-white"
        >
          <span className="pointer-events-none absolute inset-0 origin-bottom-left scale-0 bg-white transition-transform duration-500 ease-out group-hover:scale-100 max-lg:group-focus:scale-100" />
          <span
            className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 bg-black"
            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
          />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-ink max-lg:group-focus:text-ink">
            Pay Now
          </span>
        </button>
      ) : (
        <button
          type="button"
          className="group relative mt-8 w-full overflow-hidden rounded-md bg-brand py-3.5 text-sm font-semibold text-ink"
        >
          <span className="pointer-events-none absolute inset-0 origin-bottom-left scale-0 bg-black transition-transform duration-500 ease-out group-hover:scale-100 max-lg:group-focus:scale-100" />
          <span
            className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 bg-brand"
            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
          />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white max-lg:group-focus:text-white">
            Pay Now
          </span>
        </button>
      )}
    </motion.div>
  )
}

function Pricing() {
  const [cycle, setCycle] = useState('monthly')

  return (
    <section className="relative overflow-hidden bg-ink text-white light:bg-paper light:text-ink">

      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-24">
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
              Choose Your Plan
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

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.15}
            variants={fadeUp}
            className="flex shrink-0 items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1 light:border-ink/10 light:bg-ink/[0.03]"
          >
            {['monthly', 'yearly'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCycle(option)}
                className={`relative rounded-md px-5 py-2.5 text-sm font-semibold capitalize transition-colors ${
                  cycle === option
                    ? 'text-ink'
                    : 'text-white/60 hover:text-white light:text-ink/55 light:hover:text-ink'
                }`}
              >
                {cycle === option && (
                  <motion.span
                    layoutId="billing-toggle"
                    transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                    className="absolute inset-0 rounded-md bg-white light:bg-white"
                  />
                )}
                <span className="relative z-10">Billed {option}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 light:border-ink/10 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={
                i > 0
                  ? 'border-t border-white/10 light:border-ink/10 md:border-t-0 md:border-l'
                  : ''
              }
            >
              <PlanCard plan={plan} cycle={cycle} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
