import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

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
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
        >
          <motion.img
            src="/logo-dark.png"
            alt="Inngress Techsolutions LLP"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-10 w-auto object-contain sm:h-12"
          />

          <div className="mt-8 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              key={pathname + duration}
              className="h-full bg-brand"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: duration / 1000, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
