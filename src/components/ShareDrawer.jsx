import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, MapPin, Phone, Mail } from 'lucide-react'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  PinterestIcon,
} from './icons/SocialIcons'
import Logo from './Logo'

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
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: PinterestIcon, label: 'Pinterest' },
]

function ShareDrawer({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.__lenis?.stop()

    return () => {
      document.body.style.overflow = previousOverflow
      window.__lenis?.start()
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-ink/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            data-lenis-prevent
            className="fixed inset-y-0 right-0 z-[95] flex w-[82%] max-w-md flex-col overflow-y-auto border-l border-white/10 bg-ink px-7 py-8 text-white [scrollbar-width:none] sm:w-full sm:px-9 light:border-ink/10 light:bg-paper light:text-ink [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center">
                <Logo className="h-12" />
              </a>

              <button
                type="button"
                aria-label="Close panel"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-brand hover:text-brand light:border-ink/15 light:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-10 text-[15px] font-medium leading-[1.9] text-brand">
              We help ambitious brands grow through digital marketing,
              design, and technology. Reach out anytime — we usually reply
              within a few hours.
            </p>

            <div className="mt-10 flex flex-col gap-7">
              {INFO.map(({ icon: Icon, lines }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-relaxed text-white/80 light:text-ink/75">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white light:border-ink/15 light:text-ink/65"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ShareDrawer
