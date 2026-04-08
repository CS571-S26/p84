import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'

function EventsPage() {
  const { t } = useTranslation()

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('events.eyebrow')}</p>
        <h1 className="section-title">{t('events.title')}</h1>
        <p className="section-description">{t('events.description')}</p>
      </div>
      <Card className="info-card">
        <Card.Body>
          <Card.Title>{t('events.comingSoonTitle')}</Card.Title>
          <Card.Text>{t('events.comingSoonBody')}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default EventsPage
