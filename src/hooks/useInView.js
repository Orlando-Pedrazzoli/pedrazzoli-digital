import { useEffect, useRef, useState } from 'react'

/**
 * Hook que detecta quando um elemento entra no viewport
 * @param {number} threshold - Percentual de visibilidade para trigger (0-1)
 * @returns {[React.RefObject, boolean]} Ref e estado de visibilidade
 */
export function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
