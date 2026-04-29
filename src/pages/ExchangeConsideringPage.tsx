import Alert from 'react-bootstrap/Alert'
import { useTranslation } from 'react-i18next'
import bascomHill from '../img/bascom_hill.jpg'

function ExchangeConsideringPage() {
  const { t } = useTranslation()

  return (
    <article className="d-grid gap-4">
      <section>
        <p className="section-kicker">{t('exchange.considering.eyebrow')}</p>
        <h2 className="saved-heading">{t('exchange.considering.heroHeadline')}</h2>
        <img src={bascomHill} alt="Bascom Hill at UW-Madison" className="img-fluid rounded-4 mt-3" />
      </section>

      <section>
        <h3>{t('exchange.considering.whyTitle')}</h3>
        <p className="section-description">{t('exchange.considering.whyBody')}</p>
      </section>

      <section>
        <h3>{t('exchange.considering.quickFactsTitle')}</h3>
        <ul>
          <li>{t('exchange.considering.quickFact1')}</li>
          <li>{t('exchange.considering.quickFact2')}</li>
          <li>{t('exchange.considering.quickFact3')}</li>
          <li>{t('exchange.considering.quickFact4')}</li>
        </ul>
      </section>

      <section>
        <h3>{t('exchange.considering.academicsTitle')}</h3>
        <p className="section-description">{t('exchange.considering.academicsBody')}</p>
      </section>

      <section>
        <h3>{t('exchange.considering.studentLifeTitle')}</h3>
        <p className="section-description">{t('exchange.considering.studentLifeBody')}</p>
      </section>

      <section>
        <h3>{t('exchange.considering.whyJsaTitle')}</h3>
        <p className="section-description">{t('exchange.considering.whyJsaBody')}</p>
      </section>

      <section>
        <h3>{t('exchange.considering.voicesTitle')}</h3>
        <ul>
          <li>{t('exchange.considering.voice1')}</li>
          <li>{t('exchange.considering.voice2')}</li>
          <li>{t('exchange.considering.voice3')}</li>
        </ul>
      </section>

      <section>
        <p className="section-kicker">{t('exchange.considering.ctaEyebrow')}</p>
        <h2 className="saved-heading">{t('exchange.considering.ctaTitle')}</h2>
        <p className="section-description">{t('exchange.considering.ctaBody')}</p>
        <Alert variant="light" className="mb-0">
          {t('exchange.considering.ctaTip')}
        </Alert>
      </section>
    </article>
  )
}

export default ExchangeConsideringPage
