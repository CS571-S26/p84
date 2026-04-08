import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function SiteFooter() {
  const { t } = useTranslation()
  const footerItems = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/events', label: t('nav.events') },
    { to: '/board', label: t('nav.board') },
    { to: '/faq', label: t('nav.faq') },
    { to: '/careers', label: t('nav.careers') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="site-footer">
      <Container className="footer-bar">
        <p className="footer-copyright">
          ©2026 Japanese Student Association at University of Wisconsin-Madison
        </p>
        <div className="footer-nav">
          {footerItems.map((item) => (
            <Link key={item.to} to={item.to} className="footer-link">
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/jsamadison/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default SiteFooter
