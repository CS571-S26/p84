import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SectionCard from '../components/SectionCard'

function ExchangeOverviewPage() {
  const { t } = useTranslation()

  const cards = [
    {
      title: t('exchange.beforeArrivalTitle'),
      body: t('exchange.beforeArrivalBody'),
    },
    {
      title: t('exchange.firstWeeksTitle'),
      body: t('exchange.firstWeeksBody'),
    },
    {
      title: t('exchange.communityTitle'),
      body: t('exchange.communityBody'),
    },
    {
      title: t('exchange.campusLifeTitle'),
      body: t('exchange.campusLifeBody'),
    },
    {
      title: t('exchange.languageTitle'),
      body: t('exchange.languageBody'),
    },
    {
      title: t('exchange.supportTitle'),
      body: t('exchange.supportBody'),
    },
  ]

  return (
    <>
      <Row className="g-4">
        {cards.map((card) => (
          <Col md={6} key={card.title}>
            <SectionCard title={card.title} body={card.body} />
          </Col>
        ))}
      </Row>

      <section className="exchange-links-card">
        <p className="section-kicker">{t('exchange.nextStepsEyebrow')}</p>
        <h2 className="saved-heading">{t('exchange.nextStepsTitle')}</h2>
        <p className="section-description">{t('exchange.nextStepsBody')}</p>
        <div className="exchange-links-row">
          <Link to="/events" className="cta-link cta-outline">
            {t('exchange.ctaEvents')}
          </Link>
          <Link to="/faq" className="cta-link cta-outline">
            {t('exchange.ctaFaq')}
          </Link>
          <Link to="/contact" className="cta-link cta-outline">
            {t('exchange.ctaContact')}
          </Link>
        </div>
      </section>
    </>
  )
}

export default ExchangeOverviewPage
