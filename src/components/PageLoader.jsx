import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'

const INITIAL_DURATION = 1100
const ROUTE_DURATION = 650

function PageLoader() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const [duration, setDuration] = useState(INITIAL_DURATION)
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      const timer = setTimeout(() => setVisible(false), INITIAL_DURATION)
      return () => clearTimeout(timer)
    }

    setDuration(ROUTE_DURATION)
    setVisible(true)
    const timer = setTimeout(() => setVisible(false), ROUTE_DURATION)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink light:bg-paper"
        >
          {/* subtle dotted texture, matching the hero */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] [--dot:rgba(255,255,255,0.14)] light:opacity-70 light:[--dot:rgba(12,12,15,0.1)]"
            style={{
              backgroundImage: 'radial-gradient(var(--dot) 1px, transparent 1px)',
              backgroundSize: '26px 26px',
            }}
          />

          {/* oversized, ultra-faint rotating logo watermark */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute h-[420px] w-[420px] opacity-[0.04] blur-[1px] light:opacity-[0.06]"
          >
            <Logo className="h-full w-full" />
          </motion.div>

          {/* drifting accent particles */}
          {[
            { top: '22%', left: '20%', size: 'h-1.5 w-1.5', duration: 5, delay: 0 },
            { top: '30%', left: '78%', size: 'h-1 w-1', duration: 6.5, delay: 0.6 },
            { top: '68%', left: '24%', size: 'h-1 w-1', duration: 5.5, delay: 1.1 },
            { top: '72%', left: '76%', size: 'h-1.5 w-1.5', duration: 7, delay: 0.3 },
            { top: '14%', left: '50%', size: 'h-1 w-1', duration: 6, delay: 0.9 },
          ].map((dot, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -14, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: dot.duration, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }}
              style={{ top: dot.top, left: dot.left }}
              className={`pointer-events-none absolute rounded-full bg-brand ${dot.size}`}
            />
          ))}

          {/* diagonal accent line extending from the corner brackets */}
          <div className="pointer-events-none absolute left-6 top-6 h-px w-24 origin-left rotate-45 bg-gradient-to-r from-brand/30 to-transparent" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-px w-24 origin-right rotate-45 bg-gradient-to-l from-brand/30 to-transparent" />

          {/* soft pulsing brand glow, plus a smaller offset accent glow for depth */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute h-56 w-56 rounded-full bg-brand/30 blur-[70px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="pointer-events-none absolute h-40 w-40 translate-x-20 translate-y-10 rounded-full bg-accent/25 blur-[60px]"
          />

          {/* corner frame brackets */}
          {[
            'left-6 top-6 border-l border-t',
            'right-6 top-6 border-r border-t',
            'left-6 bottom-6 border-l border-b',
            'right-6 bottom-6 border-r border-b',
          ].map((pos) => (
            <motion.span
              key={pos}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`pointer-events-none absolute h-5 w-5 border-brand/40 ${pos}`}
            />
          ))}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <Logo className="h-10 sm:h-12" />
          </motion.div>

          <div className="relative mt-8 h-1 w-40 overflow-hidden rounded-full bg-white/10 light:bg-ink/10">
            <motion.div
              key={pathname + duration}
              className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-brand via-accent to-brand shadow-[0_0_12px_rgba(110,56,149,0.7)]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: duration / 1000, ease: 'easeInOut' }}
            >
              <motion.span
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
            </motion.div>
          </div>

          <div className="relative mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/40 light:text-ink/40">
            Loading
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
              >
                .
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
