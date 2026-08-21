import { motion } from 'framer-motion'
import { Users, Eye, Clock, Headset } from 'lucide-react'

const REASONS = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Senior engineers and designers who have shipped products across industries, not junior generalists learning on your budget.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'Clear timelines, honest estimates, and regular check-ins so you always know exactly where your project stands.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We plan realistically and communicate early, so deadlines are commitments we keep, not targets we chase.',
  },
  {
    icon: Headset,
    title: 'Ongoing Support',
    description: "Launch day isn't the finish line. We stay on to monitor, maintain, and improve what we build together.",
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

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink text-white light:border-ink/10 light:bg-paper light:text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeUp}
            className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 light:ring-ink/10"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt="Our team collaborating"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <div>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0}
              variants={fadeUp}
              className="text-sm font-semibold text-brand"
            >
              WHY CHOOSE US
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={0.05}
              variants={fadeUp}
              className="mt-3 text-3xl font-extrabold sm:text-4xl"
            >
              Built On Trust, Backed By Results.
            </motion.h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {REASONS.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={0.1 * i}
                  variants={fadeUp}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand/40 light:border-ink/10 light:bg-ink/[0.025]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-base font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55 light:text-ink/60">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
