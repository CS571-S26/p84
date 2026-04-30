import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

const newsletterUrl = 'https://mailchi.mp/6df4c9853b22/uwjsa-newsletter-sign-up'

function NewsletterSignup() {
  const { t } = useTranslation()

  return (
    <section className="newsletter-band">
      <Container>
        <div className="newsletter-card">
          <div className="newsletter-copy">
            <p className="section-kicker">{t('newsletter.eyebrow')}</p>
            <h2 className="newsletter-title">{t('newsletter.title')}</h2>
            <p className="newsletter-description">{t('newsletter.description')}</p>
          </div>
          <Button
            as="a"
            href={newsletterUrl}
            target="_blank"
            rel="noreferrer"
            variant="danger"
          >
            {t('newsletter.button')}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default NewsletterSignup
