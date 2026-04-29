import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import SectionCard from '../components/SectionCard'
import capitol from '../assets/capitol.jpg'

function ExchangeArrivingPage() {
  const { t } = useTranslation()

  const cards = [
    {
      title: t('exchange.firstWeeksTitle'),
      body: t('exchange.firstWeeksBody'),
    },
    {
      title: t('exchange.campusLifeTitle'),
      body: t('exchange.campusLifeBody'),
    },
    {
      title: t('exchange.communityTitle'),
      body: t('exchange.communityBody'),
    },
    {
      title: t('exchange.languageTitle'),
      body: t('exchange.languageBody'),
    },
  ]

  return (
    <div className="exchange-subpage d-grid gap-4">
      <section className="exchange-subpage-hero">
        <img src={capitol} alt="Arriving in Madison" className="exchange-subpage-hero-image" />
        <div className="exchange-subpage-hero-overlay">
          <p className="section-kicker">{t('exchange.arrivingEyebrow')}</p>
          <h2 className="saved-heading">{t('exchange.arrivingTitle')}</h2>
          <p className="section-description">{t('exchange.arrivingDescription')}</p>
        </div>
      </section>

      <section className="exchange-subpage-intro">
        <h3>{t('exchange.arrivingTitle')}</h3>
        <p className="section-description">{t('exchange.firstWeeksBody')}</p>
      </section>

      <Row className="g-4">
        {cards.map((card) => (
          <Col md={6} key={card.title}>
            <div className="exchange-subpage-card">
              <SectionCard title={card.title} body={card.body} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ExchangeArrivingPage
