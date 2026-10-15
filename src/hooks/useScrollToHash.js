import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If no hash, scroll to top on route change
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Wait a tick for the target section to render
    const id = hash.replace('#', '')
    const timer = setTimeout(() => {
      const target = document.getElementById(id)
      if (target) {
        const headerOffset = 96
        const offsetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname, hash])
}