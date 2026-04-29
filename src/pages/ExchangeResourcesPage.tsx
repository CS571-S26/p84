import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function ExchangeResourcesPage() {
  const { t } = useTranslation()

  return (
    <section className="exchange-links-card">
      <p className="section-kicker">{t('exchange.resourcesEyebrow')}</p>
      <h2 className="saved-heading">{t('exchange.resourcesTitle')}</h2>
      <p className="section-description">{t('exchange.resourcesDescription')}</p>
      <div className="exchange-links-row">
        <Link to="/events" className="cta-link cta-outline">
          {t('exchange.ctaEvents')}
        </Link>
        <Link to="/faq" className="cta-link cta-outline">
          {t('exchange.ctaFaq')}
        </Link>
        <Link to="/careers" className="cta-link cta-outline">
          {t('nav.careers')}
        </Link>
        <Link to="/contact" className="cta-link cta-outline">
          {t('exchange.ctaContact')}
        </Link>
      </div>
    </section>
  )
}

export default ExchangeResourcesPage
