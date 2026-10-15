import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const observed = new WeakSet()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const observeAll = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el)
          observer.observe(el)
        }
      })
    }

    observeAll()

    const mutation = new MutationObserver(() => observeAll())
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])
}