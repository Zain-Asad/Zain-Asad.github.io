import { useEffect, useRef, useState } from 'react'

/**
 * Reveals children with a fade + slide-up when the element enters the viewport.
 * Optional delay (ms) for staggered animations.
 */
export default function AnimateIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeoutId
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) timeoutId = setTimeout(() => setVisible(true), delay)
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`reveal-in ${visible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
