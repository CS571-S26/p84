import Accordion from 'react-bootstrap/Accordion'
import { useTranslation } from 'react-i18next'

function FaqPage() {
  const { t } = useTranslation()

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('faq.eyebrow')}</p>
        <h1 className="section-title">{t('faq.title')}</h1>
        <p className="section-description">{t('faq.description')}</p>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{t('faq.q1')}</Accordion.Header>
          <Accordion.Body>{t('faq.a1')}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{t('faq.q2')}</Accordion.Header>
          <Accordion.Body>{t('faq.a2')}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>{t('faq.q3')}</Accordion.Header>
          <Accordion.Body>{t('faq.a3')}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>{t('faq.q4')}</Accordion.Header>
          <Accordion.Body>{t('faq.a4')}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>{t('faq.q5')}</Accordion.Header>
          <Accordion.Body>{t('faq.a5')}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>{t('faq.q6')}</Accordion.Header>
          <Accordion.Body>{t('faq.a6')}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>{t('faq.q7')}</Accordion.Header>
          <Accordion.Body>{t('faq.a7')}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default FaqPage
