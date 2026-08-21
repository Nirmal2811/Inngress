import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const MARQUEE_TEXT = 'FOCUS ON YOUR BUSINESS • FOCUS ON YOUR BUSINESS • '

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
}

const fillVariants = {
  rest: { scale: 0 },
  hover: { scale: 1 },
}

function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">

      <div className="relative h-[420px] overflow-hidden sm:h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1600&auto=format&fit=crop"
          alt="Team collaborating in an open office"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />

        <div className="absolute inset-0 flex items-center overflow-hidden">
          <motion.div
            className="flex shrink-0 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          >
            {[0, 1].map((i) => (
              <span
                key={i}
                className="px-6 text-[90px] font-black uppercase leading-none text-transparent sm:text-[130px]"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.18)' }}
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <span className="absolute h-56 w-56 rounded-full bg-brand/30 blur-3xl sm:h-72 sm:w-72" />

          <Link to="/contact" className="relative z-10">
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={buttonVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative flex h-56 w-56 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-brand/25 via-ink/70 to-ink/70 backdrop-blur-md transition-colors duration-700 ease-in-out hover:border-brand sm:h-72 sm:w-72"
            >
              <motion.span
                variants={fillVariants}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-full bg-brand"
              />
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-xl font-bold leading-snug sm:text-2xl">
                  Contact
                  <br />
                  With US.
                </span>
                <ArrowUpRight className="h-7 w-7 shrink-0 transition-transform duration-700 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
