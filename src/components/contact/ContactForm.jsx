import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
} from '../icons/SocialIcons'
import { useTapEffect } from '../../lib/useTapEffect'

const INFO = [
  {
    icon: MapPin,
    lines: ['No.64, Periya Subbannan Street, KK Pudur', 'Saibaba-colony, Coimbatore-641038'],
  },
  {
    icon: Phone,
    lines: ['+91 97909 49020'],
  },
  {
    icon: Mail,
    lines: ['sales@inngress.com'],
  },
]

const SOCIALS = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: PinterestIcon, label: 'Pinterest' },
  { Icon: InstagramIcon, label: 'Instagram' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const inputClass =
  'w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand light:border-ink/10 light:bg-ink/[0.03] light:text-ink light:placeholder:text-ink/35'

function ContactForm() {
  const [submitTapped, triggerSubmitTap] = useTapEffect()

  return (
    <section className="relative overflow-hidden bg-ink text-white light:bg-paper light:text-ink">

      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-2 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold text-brand">CONTACT WITH US</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Let's Work Together?
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-[1.9] text-white/55 light:text-ink/60">
            I have work-rates, flexible support via live chat, and hotline. I
            guarantee that you'll be able to have any issue resolved within
            24 hours.
          </p>

          <div className="mt-9 flex flex-col gap-6">
            {INFO.map(({ icon: Icon, lines }, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-white/70 light:text-ink/70">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <p className="font-bold">Follow Us</p>
            <p className="mt-1 text-sm text-white/50 light:text-ink/50">
              Follow us on Social Network
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-brand hover:bg-brand hover:text-white light:border-ink/10 light:text-ink/55"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.15}
          variants={fadeUp}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 light:border-ink/10 light:bg-ink/[0.025] sm:p-10"
        >
          <h3 className="text-center text-lg font-bold text-brand">
            Make a Free Consulting
          </h3>

          <form
            className="mt-7 flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-white/50 light:text-ink/50">
                  First Name
                </label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-white/50 light:text-ink/50">
                  Last Name
                </label>
                <input type="text" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-white/50 light:text-ink/50">
                Company/Organization
              </label>
              <input type="text" className={inputClass} />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-white/50 light:text-ink/50">
                Email
              </label>
              <input type="email" className={inputClass} />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-white/50 light:text-ink/50">
                Phone
              </label>
              <input type="tel" className={inputClass} />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-white/50 light:text-ink/50">
                Message
              </label>
              <textarea rows={4} className={`${inputClass} resize-none`} />
            </div>

            <button
              type="submit"
              onClick={triggerSubmitTap}
              className="group relative mt-2 self-start overflow-hidden rounded-md bg-brand px-8 py-3.5 text-sm font-semibold text-ink"
            >
              <span
                className={`pointer-events-none absolute inset-0 origin-bottom-left bg-black transition-transform duration-500 ease-out group-hover:scale-100 ${submitTapped ? 'scale-100' : 'scale-0'}`}
              />
              <span
                className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 bg-brand"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
              />
              <span
                className={`relative z-10 transition-colors duration-300 group-hover:text-white ${submitTapped ? 'text-white' : ''}`}
              >
                Submit
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
