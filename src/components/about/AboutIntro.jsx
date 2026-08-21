import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'

const STATS = [
  { target: 10, suffix: '+', label: 'Years Experience' },
  { target: 200, suffix: '+', label: 'Projects Delivered' },
  { target: 50, suffix: '+', label: 'Happy Clients' },
  { value: '24/7', label: 'Support Available' },
]

function CountUpNumber({ target, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (value) => setDisplay(Math.round(value)),
    })
    return () => controls.stop()
  }, [isInView, target])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function AboutIntro() {
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
          >
            <p className="text-sm font-semibold text-brand">WHO WE ARE</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              A Software Team That Ships.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.9] text-white/55 light:text-ink/60">
              Inngress TechSolutions-LLP is a software engineering studio helping ambitious
              teams design, build, and scale digital products. We pair
              senior engineers with founders and product teams to turn
              ideas into software that actually ships, and keeps working
              long after launch.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1}
            variants={fadeUp}
            className="grid grid-cols-2 gap-6"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 light:border-ink/10 light:bg-ink/[0.025]"
              >
                <p className="text-3xl font-extrabold text-brand sm:text-4xl">
                  {stat.target !== undefined ? (
                    <CountUpNumber target={stat.target} suffix={stat.suffix} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-2 text-sm font-semibold text-white/70 light:text-ink/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
