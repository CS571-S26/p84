import { useLayoutEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import { Outlet, useLocation } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import NewsletterSignup from './NewsletterSignup'
import SiteFooter from './SiteFooter'

function SiteLayout() {
  const location = useLocation()
  const shellRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const shell = shellRef.current

    if (!shell) {
      return
    }

    const revealSelectors = [
      '.home-hero',
      '.page-hero',
      '.section-intro',
      '.section-heading',
      '.filter-bar',
      '.info-card',
      '.event-preview-card',
      '.event-list-card',
      '.saved-events-banner',
      '.saved-event-card',
      '.about-story',
      '.stat-card',
      '.community-table-wrap',
      '.custom-contact-form',
      '.contact-success-alert',
      '.contact-draft-alert',
      '.contact-form-fallback',
      '.exchange-links-row',
      '.considering-hero-banner',
      '.considering-panel',
      '.considering-feature-card',
      '.considering-voices li',
      '.considering-cta',
      '.exchange-subpage-hero',
      '.exchange-subpage-intro',
      '.exchange-resource-link',
      '.newsletter-card',
    ].join(', ')

    const elements = Array.from(new Set(shell.querySelectorAll<HTMLElement>(revealSelectors)))
      .filter((element) => !element.closest('.site-navbar') && element.tagName !== 'SCRIPT')

    elements.forEach((element, index) => {
      element.dataset.scrollReveal = ''
      element.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`)
    })

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      elements.forEach((element) => element.classList.add('is-visible'))

      return () => {
        elements.forEach((element) => {
          delete element.dataset.scrollReveal
          element.classList.remove('is-visible')
          element.style.removeProperty('--reveal-delay')
        })
      }
    }

    const revealTimeouts: number[] = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const element = entry.target as HTMLElement
          const revealDelay = Number.parseFloat(element.style.getPropertyValue('--reveal-delay')) || 0

          element.classList.add('is-visible')
          observer.unobserve(element)

          revealTimeouts.push(
            window.setTimeout(() => {
              delete element.dataset.scrollReveal
              element.style.removeProperty('--reveal-delay')
            }, revealDelay + 760),
          )
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.14,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      revealTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId))
      elements.forEach((element) => {
        delete element.dataset.scrollReveal
        element.classList.remove('is-visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [location.pathname])

  return (
    <div ref={shellRef} className="site-shell">
      <NavigationBar />
      <main>
        <Container className="py-4 py-lg-5">
          <div key={location.pathname} className="route-content">
            <Outlet />
          </div>
        </Container>
      </main>
      <NewsletterSignup />
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
