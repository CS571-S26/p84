import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import SectionCard from '../components/SectionCard'

function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('about.eyebrow')}</p>
        <h1 className="section-title">{t('about.title')}</h1>
        <p className="section-description">{t('about.description')}</p>
      </div>
      <Row className="g-4">
        <Col md={6}>
          <SectionCard
            title={t('about.missionTitle')}
            body={t('about.missionBody')}
          />
        </Col>
        <Col md={6}>
          <SectionCard
            title={t('about.hostTitle')}
            body={t('about.hostBody')}
          />
        </Col>
      </Row>
    </div>
  )
}

export default AboutPage
