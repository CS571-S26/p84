import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import jsaOnigiri from '../assets/jsa_onigiri.jpg'

function ExchangeResourcesPage() {
  const { t } = useTranslation()

  return (
    <div className="exchange-subpage d-grid gap-4">
      <section className="exchange-subpage-hero">
        <img src={jsaOnigiri} alt="Current Students and Resources" className="exchange-subpage-hero-image" />
        <div className="exchange-subpage-hero-overlay">
          <p className="section-kicker">{t('exchange.resourcesEyebrow')}</p>
          <h2 className="saved-heading">{t('exchange.resourcesTitle')}</h2>
          <p className="section-description">{t('exchange.resourcesDescription')}</p>
        </div>
      </section>

      <section className="exchange-subpage-intro">
        <h3>{t('exchange.resourcesTitle')}</h3>
        <p className="section-description">{t('exchange.resourcesDescription')}</p>
      </section>

      <section className="exchange-resources-grid">
        <Link to="/events" className="exchange-resource-link">{t('exchange.ctaEvents')}</Link>
        <Link to="/faq" className="exchange-resource-link">{t('exchange.ctaFaq')}</Link>
        <Link to="/careers" className="exchange-resource-link">{t('nav.careers')}</Link>
        <Link to="/contact" className="exchange-resource-link">{t('exchange.ctaContact')}</Link>
      </section>
    </div>
  )
}

export default ExchangeResourcesPage
