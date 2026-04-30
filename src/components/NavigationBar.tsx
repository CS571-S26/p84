import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

function NavigationBar() {
  const { i18n, t } = useTranslation()
  const location = useLocation()
  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/events', label: t('nav.events') },
    { to: '/exchange', label: t('nav.exchange') },
    { to: '/board', label: t('nav.board') },
    { to: '/faq', label: t('nav.faq') },
    { to: '/careers', label: t('nav.careers') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const activeLanguage = i18n.resolvedLanguage === 'ja' ? 'ja' : 'en'

  const handleLanguageChange = (language: 'en' | 'ja') => {
    void i18n.changeLanguage(language)
    window.localStorage.setItem('jsa-language', language)
  }

  return (
    <Navbar
      key={location.pathname}
      expand="lg"
      className="site-navbar"
      sticky="top"
    >
      <Container className="navbar-shell">
        <div className="navbar-brand-row">
          <div className="navbar-side-spacer" aria-hidden="true" />
          <Navbar.Brand as={NavLink} to="/" className="brand-mark">
            <img src={logo} alt="Japanese Student Association logo" className="brand-logo" />
            <span className="brand-title brand-title-desktop">{t('siteTitle')}</span>
            <span className="brand-title brand-title-mobile">
              JSA at
              <br />
              UW-Madison
            </span>
          </Navbar.Brand>
          <div className="navbar-actions">
            <div className="language-toggle" aria-label="Language toggle">
              <Button
                variant={activeLanguage === 'en' ? 'danger' : 'outline-danger'}
                size="sm"
                onClick={() => handleLanguageChange('en')}
              >
                {t('lang.en')}
              </Button>
              <Button
                variant={activeLanguage === 'ja' ? 'danger' : 'outline-danger'}
                size="sm"
                onClick={() => handleLanguageChange('ja')}
              >
                {t('lang.ja')}
              </Button>
            </div>
            <Navbar.Toggle aria-controls="site-nav" />
          </div>
        </div>
        <Navbar.Collapse id="site-nav" className="navbar-menu-row">
          <Nav className="mx-auto align-items-lg-center gap-lg-3 nav-links-wrap">
            {navItems.map((item) => (
              <Nav.Link
                key={item.to}
                as={NavLink}
                to={item.to}
                end={item.to === '/'}
                className="nav-link-custom"
              >
                {item.label}
              </Nav.Link>
            ))}
            <Nav.Link
              href="https://www.instagram.com/jsamadison/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="nav-link-custom"
            >
              Instagram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
