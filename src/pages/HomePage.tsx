import { useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import homeBackground from '../assets/home_background.jpg'
import SectionCard from '../components/SectionCard'

const elfsightScriptId = 'elfsight-platform-script'

function HomePage() {
  const { i18n, t } = useTranslation()
  const isJapanese = i18n.resolvedLanguage === 'ja'

  useEffect(() => {
    if (document.getElementById(elfsightScriptId)) {
      return
    }

    const script = document.createElement('script')
    script.id = elfsightScriptId
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="d-grid gap-5">
      <section
        className="home-hero home-hero-photo"
        style={{ backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.45), rgba(18, 18, 18, 0.62)), url(${homeBackground})` }}
      >
        <div className="home-hero-content">
          <p className="eyebrow">{t('home.eyebrow')}</p>
          <h1 className={isJapanese ? 'home-hero-title home-hero-title-ja' : 'home-hero-title'}>
            {t('home.title')}
          </h1>
          <p className="hero-copy">{t('home.description')}</p>
          <div className="d-flex flex-wrap gap-3">
            <Link to="/events" className="cta-link cta-primary">
              {t('home.ctaEvents')}
            </Link>
            <Link to="/about" className="cta-link cta-secondary">
              {t('home.ctaAbout')}
            </Link>
          </div>
        </div>
      </section>

      <section>
        <Row className="g-4">
          <Col md={4}>
            <SectionCard
              title={t('home.culturalTitle')}
              body={t('home.culturalBody')}
            />
          </Col>
          <Col md={4}>
            <SectionCard
              title={t('home.languageTitle')}
              body={t('home.languageBody')}
            />
          </Col>
          <Col md={4}>
            <SectionCard
              title={t('home.careerTitle')}
              body={t('home.careerBody')}
            />
          </Col>
        </Row>
      </section>

      <section className="instagram-section" aria-label="Instagram">
        <div className="instagram-card">
          <div className="instagram-feed-frame">
            <div
              className="elfsight-app-2e2ea4a1-8e3f-4680-9b96-6e9bb86fd82f instagram-feed"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
