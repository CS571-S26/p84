import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import SectionCard from '../components/SectionCard'

function CareersPage() {
  const { t } = useTranslation()

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('careers.eyebrow')}</p>
        <h1 className="section-title">{t('careers.title')}</h1>
        <p className="section-description">{t('careers.description')}</p>
      </div>
      <Row className="g-4">
        <Col md={4}>
          <SectionCard
            title={t('careers.jelperClubTitle')}
            body={t('careers.jelperClubBody')}
          />
        </Col>
        <Col md={4}>
          <SectionCard
            title={t('careers.tkfTitle')}
            body={t('careers.tkfBody')}
          />
        </Col>
        <Col md={4}>
          <SectionCard
            title={t('careers.jetTitle')}
            body={t('careers.jetBody')}
          />
        </Col>
		<Col md={4}>
          <SectionCard
            title={t('careers.careerForumTitle')}
            body={t('careers.careerForumBody')}
          />
        </Col>
		<Col md={4}>
          <SectionCard
            title={t('careers.jrCentralTitle')}
            body={t('careers.jrCentralBody')}
          />
        </Col>
		<Col md={4}>
          <SectionCard
            title={t('careers.jFindTitle')}
            body={t('careers.jFindBody')}
          />
        </Col>
      </Row>
    </div>
  )
}

export default CareersPage
