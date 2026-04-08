import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'

function ContactPage() {
  const { t } = useTranslation()

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('contact.eyebrow')}</p>
        <h1 className="section-title">{t('contact.title')}</h1>
        <p className="section-description">{t('contact.description')}</p>
      </div>
      <Card className="info-card">
        <Card.Body>
          <Card.Title>{t('contact.comingSoonTitle')}</Card.Title>
          <Card.Text>{t('contact.comingSoonBody')}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ContactPage
