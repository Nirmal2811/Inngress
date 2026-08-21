import { Link } from 'react-router-dom'
import { MapPin, Phone, Send } from 'lucide-react'
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
} from './icons/SocialIcons'
import Logo from './Logo'
import { SOLUTIONS } from '../data/solutions'

const LINK_COLUMNS = [
  {
    title: 'Our Solutions',
    links: SOLUTIONS.map(({ slug, title }) => ({ label: title, to: `/solutions/${slug}` })),
  },
  {
    title: 'Company',
    links: ['About Us', 'Case Study', 'News & Article', 'Our Team', 'All Portfolio', 'Pricing Plan'],
  },
  {
    title: 'Resources',
    links: ['Support Area', 'Support Policy', 'Terms & Conditions', 'Privacy Policy', 'Career', 'Pricing Plan'],
  },
]

const SOCIALS = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: PinterestIcon, label: 'Pinterest' },
  { Icon: InstagramIcon, label: 'Instagram' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white light:bg-paper-dim light:text-ink">

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-24">
        <div className="flex flex-col items-start gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="flex items-center">
            <Logo className="h-12 sm:h-14" />
          </a>

          <a
            href="tel:+919790949020"
            className="flex items-center gap-3 text-brand transition-colors hover:text-brand-dark"
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span>
              <span className="block text-xs font-medium text-white/50 light:text-ink/50">
                Call Any Time
              </span>
              <span className="text-base font-bold">+91 97909 49020</span>
            </span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 light:border-ink/10" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-24">
        <div className="grid gap-x-10 gap-y-12 py-16 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-x-0">
          <div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="font-bold">Address</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55 light:text-ink/60">
                  No.64, Periya Subbannan Street,
                  <br />
                  KK Pudur, Saibaba-colony,
                  <br />
                  Coimbatore-641038
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3">
              <Send className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="font-bold">Say Hello</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55 light:text-ink/60">
                  sales@inngress.com
                </p>
              </div>
            </div>

            <a
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-dark"
            >
              See Our New updates
            </a>
          </div>

          {LINK_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="font-bold">{column.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => {
                  const label = typeof link === 'string' ? link : link.label
                  const linkClass =
                    'text-sm text-white/55 transition-colors hover:text-brand light:text-ink/60'
                  return (
                    <li key={label}>
                      {typeof link === 'string' ? (
                        <a href="#" className={linkClass}>
                          {label}
                        </a>
                      ) : (
                        <Link to={link.to} className={linkClass}>
                          {label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 light:border-ink/10" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-24">
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-white/50 light:text-ink/50">
          <p>
            © Copyright 2026{' '}
            <span className="font-semibold text-white light:text-ink">Inngress</span> | Design By{' '}
            <span className="font-semibold text-brand">Inngress Techsolutions-LLP</span>
          </p>

          <div className="flex items-center gap-3">
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
      </div>
    </footer>
  )
}

export default Footer
