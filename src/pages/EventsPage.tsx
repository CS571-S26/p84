import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import { appConfig } from '../config/appConfig'
import EventCard from '../components/EventCard'
import EventFilterBar from '../components/EventFilterBar'
import type { EventItem } from '../data/events'
import { fetchGoogleCalendarEvents } from '../utils/googleCalendar'

const savedEventsKey = 'jsa-saved-events'
const calendarId = appConfig.googleCalendarId
const calendarApiKey = appConfig.googleCalendarApiKey

function EventsPage() {
  const { i18n, t } = useTranslation()
  const [events, setEvents] = useState<EventItem[]>([])
  const [isLoading, setIsLoading] = useState(Boolean(calendarApiKey))
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    const storedEvents = window.localStorage.getItem(savedEventsKey)

    if (!storedEvents) {
      return []
    }

    try {
      return JSON.parse(storedEvents) as string[]
    } catch {
      window.localStorage.removeItem(savedEventsKey)
      return []
    }
  })

  useEffect(() => {
    window.localStorage.setItem(savedEventsKey, JSON.stringify(savedIds))
  }, [savedIds])

  useEffect(() => {
    if (!calendarApiKey) {
      setIsLoading(false)
      setError(t('events.configMissing'))
      return
    }

    const abortController = new AbortController()

    const loadEvents = async () => {
      try {
        setIsLoading(true)
        setError('')
        setEvents(
          await fetchGoogleCalendarEvents({
            apiKey: calendarApiKey,
            calendarId,
            locale: i18n.resolvedLanguage ?? 'en',
            signal: abortController.signal,
          }),
        )
      } catch (caughtError) {
        if (caughtError instanceof DOMException && caughtError.name === 'AbortError') {
          return
        }

        const errorDetail = caughtError instanceof Error ? ` (${caughtError.message})` : ''
        setError(`${t('events.fetchError')}${errorDetail}`)
      } finally {
        setIsLoading(false)
      }
    }

    void loadEvents()

    return () => abortController.abort()
  }, [i18n.resolvedLanguage, t])

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      `${event.title} ${event.description} ${event.location}`.toLowerCase().includes(normalizedSearch)

    return matchesSearch
  })
  const savedEvents = events.filter((event) => savedIds.includes(event.id ?? event.title))

  const handleToggleSave = (eventId: string) => {
    setSavedIds((currentIds) =>
      currentIds.includes(eventId)
        ? currentIds.filter((currentId) => currentId !== eventId)
        : [...currentIds, eventId],
    )
  }

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('events.eyebrow')}</p>
        <h1 className="section-title">{t('events.title')}</h1>
        <p className="section-description">{t('events.description')}</p>
      </div>

      {error ? <Alert variant="warning">{error}</Alert> : null}

      <EventFilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {savedEvents.length > 0 ? (
        <Alert variant="light" className="saved-events-banner">
          {t('events.savedCount', { count: savedEvents.length })}
        </Alert>
      ) : null}

      {isLoading ? <Alert variant="light">{t('events.loading')}</Alert> : null}

      {!isLoading && filteredEvents.length === 0 ? (
        <div className="saved-event-card">
          <h3>{t('events.emptyTitle')}</h3>
          <p>{t('events.emptyBody')}</p>
        </div>
      ) : null}

      <div className="event-list-scroll d-grid gap-3">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id ?? event.title}
            event={event}
            isSaved={savedIds.includes(event.id ?? event.title)}
            onToggleSave={handleToggleSave}
          />
        ))}
      </div>

      <section>
        <p className="eyebrow dark-eyebrow">{t('common.savedSnapshot')}</p>
        <h2 className="saved-heading">{t('common.savedEventsPreview')}</h2>
        <Row className="g-4">
          {savedEvents.length > 0 ? (
            savedEvents.map((event) => (
              <Col md={6} key={event.id ?? event.title}>
                <div className="saved-event-card">
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.date}</p>
                    {event.location ? <p>{event.location}</p> : null}
                  </div>
                  <div className="saved-event-actions">
                    <Button
                      variant="outline-dark"
                      size="sm"
                      as="a"
                      href={event.calendarUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('events.addToCalendar')}
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleToggleSave(event.id ?? event.title)}
                    >
                      {t('events.removeSaved')}
                    </Button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <Col>
              <div className="saved-event-card saved-event-card-empty">
                <h3>{t('common.noSavedEvents')}</h3>
                <p>{t('events.noSavedBody')}</p>
              </div>
            </Col>
          )}
        </Row>
      </section>
    </div>
  )
}

export default EventsPage
