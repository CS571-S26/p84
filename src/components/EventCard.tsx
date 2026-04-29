import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'
import type { EventItem } from '../data/events'

type EventCardProps = {
  event: EventItem
  eventKey: string
  isSaved: boolean
  onToggleSave: (eventId: string) => void
}

function EventCard({ event, eventKey, isSaved, onToggleSave }: EventCardProps) {
  const { t } = useTranslation()

  return (
    <Card className="event-list-card">
      <Card.Body>
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3">
          <div className="flex-grow-1">
            <div className="d-flex flex-wrap gap-2 align-items-center">
              {event.location ? <span className="event-location">{event.location}</span> : null}
            </div>
            <Card.Title className="mt-3">{event.title}</Card.Title>
            <Card.Text className="mb-2">{event.description}</Card.Text>
          </div>
          <div className="event-actions">
            <div className="event-date">{event.date}</div>
            <Button
              variant={isSaved ? 'danger' : 'outline-danger'}
              onClick={() => onToggleSave(eventKey)}
            >
              {isSaved ? t('events.saved') : t('events.save')}
            </Button>
            <Button
              variant="outline-dark"
              as="a"
              href={event.calendarUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('events.addToCalendar')}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default EventCard
