import { useRef, useState } from 'react'

export function useTapEffect(duration = 650) {
  const [tapped, setTapped] = useState(false)
  const timer = useRef(null)

  const triggerTap = () => {
    setTapped(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setTapped(false), duration)
  }

  return [tapped, triggerTap]
}
