import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function SolutionContent({ icon: Icon, longDescription, highlights, image, title }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white light:bg-paper light:text-ink">
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
              src={image}
              alt={title}
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1}
            variants={fadeUp}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Icon className="h-8 w-8" strokeWidth={1.5} />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-5 text-[15px] leading-[1.9] text-white/55 light:text-ink/60">
              {longDescription}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm font-semibold text-white/85 light:text-ink/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-md bg-brand px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SolutionContent
