import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'
import { appConfig, eventCategories, type EventCategory } from '../config/appConfig'
import EventCard from '../components/EventCard'
import EventFilterBar from '../components/EventFilterBar'
import type { EventItem } from '../data/events'
import { fetchGoogleCalendarEvents } from '../utils/googleCalendar'

const savedEventsKey = 'jsa-saved-events'
const calendarApiKey = appConfig.googleCalendarApiKey
type EventFilterCategory = EventCategory | 'all'
type DatePreset = 'all' | 'today' | 'thisWeek' | 'thisMonth' | 'custom'
const getEventKey = (event: EventItem) => `${event.category}:${event.id ?? event.title}`
const sortByStartsAt = (a: EventItem, b: EventItem) => {
  const aTime = a.startsAt ? new Date(a.startsAt).getTime() : Number.POSITIVE_INFINITY
  const bTime = b.startsAt ? new Date(b.startsAt).getTime() : Number.POSITIVE_INFINITY

  if (aTime !== bTime) {
    return aTime - bTime
  }

  return a.title.localeCompare(b.title)
}

const getStartOfToday = () => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

const formatDateInputValue = (date: Date) => {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')

  return `${year}-${month}-${day}`
}

const addDays = (date: Date, days: number) => {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

const getDateRange = (preset: DatePreset, customStartDate: string, customEndDate: string) => {
  if (preset === 'all') {
    return { start: null, end: null }
  }

  const startOfToday = getStartOfToday()

  if (preset === 'today') {
    return { start: startOfToday, end: addDays(startOfToday, 1) }
  }

  if (preset === 'thisWeek') {
    const dayOfWeek = startOfToday.getDay()
    const offsetToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
    const weekStart = addDays(startOfToday, offsetToMonday)
    return { start: weekStart, end: addDays(weekStart, 7) }
  }

  if (preset === 'thisMonth') {
    const monthStart = new Date(startOfToday.getFullYear(), startOfToday.getMonth(), 1)
    const nextMonthStart = new Date(startOfToday.getFullYear(), startOfToday.getMonth() + 1, 1)
    return { start: monthStart, end: nextMonthStart }
  }

  const parsedStart = customStartDate ? new Date(`${customStartDate}T00:00:00`) : null
  const parsedEnd = customEndDate ? new Date(`${customEndDate}T00:00:00`) : null
  const hasInvalidCustomRange =
    parsedStart !== null &&
    parsedEnd !== null &&
    parsedEnd.getTime() < parsedStart.getTime()

  if (hasInvalidCustomRange) {
    return {
      start: parsedStart,
      end: addDays(parsedStart, 1),
    }
  }

  return {
    start: parsedStart,
    end: parsedEnd ? addDays(parsedEnd, 1) : null,
  }
}

function EventsPage() {
  const { i18n, t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<EventFilterCategory>('all')
  const [selectedDatePreset, setSelectedDatePreset] = useState<DatePreset>('all')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [events, setEvents] = useState<EventItem[]>([])
  const hasCalendarConfig = Boolean(
    calendarApiKey && eventCategories.some((category) => appConfig.googleCalendarIds[category]),
  )
  const [isLoading, setIsLoading] = useState(hasCalendarConfig)
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
    if (!hasCalendarConfig) {
      setIsLoading(false)
      setError(t('events.configMissing'))
      return
    }
    const configuredCalendarApiKey = calendarApiKey as string

    const abortController = new AbortController()

    const loadEvents = async () => {
      try {
        setIsLoading(true)
        setError('')
        const eventLists = await Promise.all(
          eventCategories.map(async (category) => {
            const calendarId = appConfig.googleCalendarIds[category]

            if (!calendarId) {
              return []
            }

            const categoryEvents = await fetchGoogleCalendarEvents({
              apiKey: configuredCalendarApiKey,
              calendarId,
              locale: i18n.resolvedLanguage ?? 'en',
              signal: abortController.signal,
            })

            return categoryEvents.map((event) => ({
              ...event,
              category,
            }))
          }),
        )
        setEvents(eventLists.flat())
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
  }, [calendarApiKey, hasCalendarConfig, i18n.resolvedLanguage, t])

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const dateRange = getDateRange(selectedDatePreset, startDate, endDate)
  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    const matchesSearch =
      normalizedSearch.length === 0 ||
      `${event.title} ${event.description} ${event.location}`.toLowerCase().includes(normalizedSearch)
    const eventTime = event.startsAt ? new Date(event.startsAt).getTime() : NaN
    const hasEventTime = Number.isFinite(eventTime)
    const matchesDate =
      selectedDatePreset === 'all' ||
      (hasEventTime &&
        (dateRange.start === null || eventTime >= dateRange.start.getTime()) &&
        (dateRange.end === null || eventTime < dateRange.end.getTime()))

    return matchesCategory && matchesSearch && matchesDate
  }).sort(sortByStartsAt)
  const savedEvents = events
    .filter((event) => savedIds.includes(getEventKey(event)))
    .sort(sortByStartsAt)

  const handleToggleSave = (eventKey: string) => {
    setSavedIds((currentIds) =>
      currentIds.includes(eventKey)
        ? currentIds.filter((currentId) => currentId !== eventKey)
        : [...currentIds, eventKey],
    )
  }

  const handleDatePresetChange = (preset: DatePreset) => {
    setSelectedDatePreset(preset)

    if (preset === 'custom') {
      setStartDate(formatDateInputValue(getStartOfToday()))
    }
  }

  const handleStartDateChange = (value: string) => {
    setStartDate(value)

    if (value && endDate && endDate < value) {
      setEndDate(value)
    }
  }

  const handleEndDateChange = (value: string) => {
    if (value && startDate && value < startDate) {
      setEndDate(startDate)
      return
    }

    setEndDate(value)
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
        selectedCategory={selectedCategory}
        categories={eventCategories}
        selectedDatePreset={selectedDatePreset}
        startDate={startDate}
        endDate={endDate}
        searchTerm={searchTerm}
        onCategoryChange={setSelectedCategory}
        onDatePresetChange={handleDatePresetChange}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
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
            key={getEventKey(event)}
            event={event}
            isSaved={savedIds.includes(getEventKey(event))}
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
              <Col md={6} key={getEventKey(event)}>
                <div className="saved-event-card">
                  <div>
                    <span className="pill-label">{t(`categories.${event.category}`)}</span>
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
                      onClick={() => handleToggleSave(getEventKey(event))}
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
