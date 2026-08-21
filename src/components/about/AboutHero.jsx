import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 text-white light:border-ink/10">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
        alt="Our team working together"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/90" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-24">
        <h1 className="text-5xl font-black leading-none sm:text-6xl">About</h1>
        <div className="mt-5 flex items-center gap-2.5 text-sm font-semibold">
          <Link to="/" className="text-brand transition-colors hover:text-brand-dark">
            Home
          </Link>
          <ArrowRight className="h-3.5 w-3.5 text-white/40" />
          <span className="text-white/60">About</span>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
