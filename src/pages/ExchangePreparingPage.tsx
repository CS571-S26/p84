import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import SectionCard from '../components/SectionCard'
import humanities from '../assets/humanities.jpg'

function ExchangePreparingPage() {
  const { t } = useTranslation()

  const cards = [
    {
      title: t('exchange.preparingHousingTitle'),
      body: t('exchange.preparingHousingBody'),
    },
    {
      title: t('exchange.preparingCoursesTitle'),
      body: t('exchange.preparingCoursesBody'),
    },
    {
      title: t('exchange.preparingVisaTitle'),
      body: t('exchange.preparingVisaBody'),
    },
    {
      title: t('exchange.preparingFinanceTitle'),
      body: t('exchange.preparingFinanceBody'),
    },
    {
      title: t('exchange.preparingEssentialsTitle'),
      body: t('exchange.preparingEssentialsBody'),
    },
  ]

  return (
    <div className="exchange-subpage d-grid gap-4">
      <section className="exchange-subpage-hero">
        <img src={humanities} alt="Preparing for UW-Madison" className="exchange-subpage-hero-image" />
        <div className="exchange-subpage-hero-overlay">
          <p className="section-kicker">{t('exchange.preparingEyebrow')}</p>
          <h2 className="saved-heading">{t('exchange.preparingTitle')}</h2>
          <p className="section-description">{t('exchange.preparingDescription')}</p>
        </div>
      </section>

      <section className="exchange-subpage-intro">
        <h3>{t('exchange.preparingTitle')}</h3>
        <p className="section-description">{t('exchange.beforeArrivalBody')}</p>
      </section>

      <Row className="g-4">
        {cards.map((card) => (
          <Col md={6} lg={4} key={card.title}>
            <div className="exchange-subpage-card">
              <SectionCard title={card.title} body={card.body} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ExchangePreparingPage
