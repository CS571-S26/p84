import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import SectionCard from '../components/SectionCard'

function ExchangePreparingPage() {
  const { t } = useTranslation()

  const cards = [
    {
      title: t('exchange.beforeArrivalTitle'),
      body: t('exchange.beforeArrivalBody'),
    },
    {
      title: t('exchange.supportTitle'),
      body: t('exchange.supportBody'),
    },
  ]

  return (
    <div className="d-grid gap-4">
      <section className="exchange-links-card">
        <p className="section-kicker">{t('exchange.preparingEyebrow')}</p>
        <h2 className="saved-heading">{t('exchange.preparingTitle')}</h2>
        <p className="section-description">{t('exchange.preparingDescription')}</p>
      </section>
      <Row className="g-4">
        {cards.map((card) => (
          <Col md={6} key={card.title}>
            <SectionCard title={card.title} body={card.body} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ExchangePreparingPage
