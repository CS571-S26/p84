import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import SectionCard from '../components/SectionCard'

function ExchangeUWMadisonPage() {
  const { t } = useTranslation()

  const highlights = [
    {
      title: t('exchange.uwAcademicsTitle'),
      body: t('exchange.uwAcademicsBody'),
    },
    {
      title: t('exchange.uwCampusTitle'),
      body: t('exchange.uwCampusBody'),
    },
    {
      title: t('exchange.uwSupportTitle'),
      body: t('exchange.uwSupportBody'),
    },
    {
      title: t('exchange.uwLocationTitle'),
      body: t('exchange.uwLocationBody'),
    },
  ]

  return (
    <div className="d-grid gap-4">
      <section className="exchange-links-card">
        <p className="section-kicker">{t('exchange.uwEyebrow')}</p>
        <h2 className="saved-heading">{t('exchange.uwTitle')}</h2>
        <p className="section-description">{t('exchange.uwDescription')}</p>
      </section>

      <Row className="g-4">
        {highlights.map((item) => (
          <Col md={6} key={item.title}>
            <SectionCard title={item.title} body={item.body} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ExchangeUWMadisonPage
