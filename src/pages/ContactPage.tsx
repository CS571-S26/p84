import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'react-i18next'

const contactFormAction =
  'https://docs.google.com/forms/d/e/1FAIpQLSfZ-ohbcTZAk-puoAIa4Q19Vv1ILCe6PHhzgnT26BxhCi4h0Q/formResponse'
const googleFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfZ-ohbcTZAk-puoAIa4Q19Vv1ILCe6PHhzgnT26BxhCi4h0Q/viewform'

const inquiryOptions = [
  { value: 'General Inquiry（一般的な質問）', labelKey: 'general' },
  { value: 'Event Participation（イベント参加）', labelKey: 'eventParticipation' },
  { value: 'Collaboration / Sponsorship（企業・団体連携）', labelKey: 'collaboration' },
  { value: 'Membership（入会について）', labelKey: 'membership' },
  { value: 'Other（その他）', labelKey: 'other' },
] as const

const contactDraftKey = 'jsa-contact-draft'

type ContactDraft = {
  name: string
  email: string
  affiliation: string
  inquiryType: string
  subject: string
  message: string
}

const emptyDraft: ContactDraft = {
  name: '',
  email: '',
  affiliation: '',
  inquiryType: '',
  subject: '',
  message: '',
}

function ContactPage() {
  const { t } = useTranslation()
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [formValues, setFormValues] = useState<ContactDraft>(() => {
    const savedDraft = window.localStorage.getItem(contactDraftKey)

    if (!savedDraft) {
      return emptyDraft
    }

    try {
      return { ...emptyDraft, ...(JSON.parse(savedDraft) as Partial<ContactDraft>) }
    } catch {
      window.localStorage.removeItem(contactDraftKey)
      return emptyDraft
    }
  })

  useEffect(() => {
    window.localStorage.setItem(contactDraftKey, JSON.stringify(formValues))
  }, [formValues])

  const handleFieldChange =
    (field: keyof ContactDraft) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormValues((currentValues) => ({
        ...currentValues,
        [field]: event.target.value,
      }))
    }

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('contact.eyebrow')}</p>
        <h1 className="section-title">{t('contact.title')}</h1>
        <p className="section-description">{t('contact.description')}</p>
      </div>

      {hasSubmitted ? (
        <Alert variant="success" className="contact-success-alert">
          <strong>{t('contact.successTitle')}</strong>
          <span>{t('contact.successBody')}</span>
        </Alert>
      ) : null}

      <Alert variant="light" className="contact-draft-alert">
        {t('contact.draft')}
      </Alert>

      <form
        className="custom-contact-form"
        action={contactFormAction}
        method="post"
        target="contact-form-submit-frame"
        onSubmit={() => {
          setHasSubmitted(true)
          window.localStorage.removeItem(contactDraftKey)
          setFormValues(emptyDraft)
        }}
      >
        <div className="contact-form-grid">
          <div className="contact-field">
            <label htmlFor="contact-name">{t('contact.name')}</label>
            <input
              id="contact-name"
              type="text"
              name="entry.1884252496"
              placeholder={t('contact.placeholderName')}
              value={formValues.name}
              onChange={handleFieldChange('name')}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">{t('contact.email')}</label>
            <input
              id="contact-email"
              type="email"
              name="entry.1014913984"
              placeholder={t('contact.placeholderEmail')}
              value={formValues.email}
              onChange={handleFieldChange('email')}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-affiliation">{t('contact.affiliation')}</label>
            <input
              id="contact-affiliation"
              type="text"
              name="entry.1500648834"
              placeholder={t('contact.placeholderAffiliation')}
              value={formValues.affiliation}
              onChange={handleFieldChange('affiliation')}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-inquiry-type">{t('contact.inquiryType')}</label>
            <select
              id="contact-inquiry-type"
              name="entry.515563274"
              value={formValues.inquiryType}
              onChange={handleFieldChange('inquiryType')}
              required
            >
              <option value="">{t('contact.selectPlaceholder')}</option>
              {inquiryOptions.map((option) => (
                <option value={option.value} key={option.value}>
                  {t(`contact.inquiryOptions.${option.labelKey}`)}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="contact-subject">{t('contact.subject')}</label>
            <input
              id="contact-subject"
              type="text"
              name="entry.169347121"
              placeholder={t('contact.placeholderSubject')}
              value={formValues.subject}
              onChange={handleFieldChange('subject')}
              required
            />
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="contact-message">{t('contact.message')}</label>
            <textarea
              id="contact-message"
              name="entry.494316112"
              placeholder={t('contact.placeholderMessage')}
              rows={6}
              value={formValues.message}
              onChange={handleFieldChange('message')}
              required
            />
          </div>
        </div>

        <input type="hidden" name="fvv" value="1" />
        <input type="hidden" name="pageHistory" value="0" />
        <input type="hidden" name="fbzx" value="1877467855525775527" />

        <div className="contact-form-actions">
          <p>{t('contact.googleNotice')}</p>
          <Button variant="danger" type="submit">
            {t('contact.submit')}
          </Button>
        </div>
      </form>

      <iframe
        className="contact-submit-frame"
        name="contact-form-submit-frame"
        title={t('contact.submitFrameTitle')}
      />

      <div className="contact-form-fallback">
        <p>{t('contact.formFallback')}</p>
        <Button
          variant="outline-danger"
          as="a"
          href={googleFormUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t('contact.openForm')}
        </Button>
      </div>
    </div>
  )
}

export default ContactPage
