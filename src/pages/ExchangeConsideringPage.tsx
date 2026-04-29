import Alert from 'react-bootstrap/Alert'
import { useTranslation } from 'react-i18next'
import bascomHill from '../assets/bascom_hill.jpg'

function ExchangeConsideringPage() {
  const { t } = useTranslation()

  return (
    <article className="considering-page">
      <section className="considering-hero-banner">
        <img src={bascomHill} alt="Bascom Hill at UW-Madison" className="considering-hero-image" />
        <div className="considering-hero-overlay">
          <p className="section-kicker">{t('exchange.considering.eyebrow')}</p>
          <h2 className="considering-hero-title">{t('exchange.considering.heroHeadline')}</h2>
          <p className="section-description">{t('exchange.considering.whyBody')}</p>
          <a href="#next-step" className="cta-link cta-primary considering-hero-cta">
            {t('exchange.considering.ctaTitle')}
          </a>
        </div>
      </section>

      <section className="considering-panel">
        <h3 className="considering-title">{t('exchange.considering.whyTitle')}</h3>
        <div className="considering-why-layout">
          <p className="section-description">{t('exchange.considering.whyBody')}</p>
          <div className="considering-pillars">
            <article>
              <span>🏛️</span>
              <h4>{t('exchange.considering.pillar1Title')}</h4>
              <p>{t('exchange.considering.pillar1Body')}</p>
            </article>
            <article>
              <span>🎓</span>
              <h4>{t('exchange.considering.pillar2Title')}</h4>
              <p>{t('exchange.considering.pillar2Body')}</p>
            </article>
            <article>
              <span>👥</span>
              <h4>{t('exchange.considering.pillar3Title')}</h4>
              <p>{t('exchange.considering.pillar3Body')}</p>
            </article>
            <article>
              <span>🌿</span>
              <h4>{t('exchange.considering.pillar4Title')}</h4>
              <p>{t('exchange.considering.pillar4Body')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="considering-panel considering-facts">
        <h3 className="considering-title">{t('exchange.considering.quickFactsTitle')}</h3>
        <div className="considering-facts-grid">
          <article><h4>#36</h4><p>{t('exchange.considering.quickFact1')}</p></article>
          <article><h4>#12</h4><p>{t('exchange.considering.quickFact1b')}</p></article>
          <article><h4>#9</h4><p>{t('exchange.considering.quickFact2')}</p></article>
          <article><h4>48,000+</h4><p>{t('exchange.considering.quickFact4')}</p></article>
          <article><h4>Madison, WI</h4><p>{t('exchange.considering.quickFact5')}</p></article>
        </div>
      </section>

      <section className="considering-feature-grid">
        <article className="considering-feature-card">
          <div className="considering-feature-image considering-feature-image-academics" />
          <h3 className="considering-title">{t('exchange.considering.academicsTitle')}</h3>
          <p className="section-description">{t('exchange.considering.academicsBody')}</p>
        </article>
        <article className="considering-feature-card">
          <div className="considering-feature-image considering-feature-image-life" />
          <h3 className="considering-title">{t('exchange.considering.studentLifeTitle')}</h3>
          <p className="section-description">{t('exchange.considering.studentLifeBody')}</p>
        </article>
        <article className="considering-feature-card">
          <div className="considering-feature-image considering-feature-image-jsa" />
          <h3 className="considering-title">{t('exchange.considering.whyJsaTitle')}</h3>
          <p className="section-description">{t('exchange.considering.whyJsaBody')}</p>
        </article>
      </section>

      <section className="considering-panel">
        <h3 className="considering-title">{t('exchange.considering.voicesTitle')}</h3>
        <ul className="considering-voices">
          <li>{t('exchange.considering.voice1')}</li>
          <li>{t('exchange.considering.voice2')}</li>
          <li>{t('exchange.considering.voice3')}</li>
        </ul>
      </section>

      <section id="next-step" className="considering-cta">
        <p className="section-kicker">{t('exchange.considering.ctaEyebrow')}</p>
        <h2 className="saved-heading">{t('exchange.considering.ctaTitle')}</h2>
        <p className="section-description">{t('exchange.considering.ctaBody')}</p>
        <Alert variant="light" className="mb-0">
          {t('exchange.considering.ctaTip')}
        </Alert>
        <div className="considering-cta-actions">
          <span>{t('exchange.ctaContact')}</span>
          <span>{t('exchange.ctaEvents')}</span>
          <span>{t('exchange.ctaFaq')}</span>
        </div>
      </section>
    </article>
  )
}

export default ExchangeConsideringPage
