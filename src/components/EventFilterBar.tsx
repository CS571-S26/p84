import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

type EventFilterBarProps = {
  searchTerm: string
  onSearchChange: (value: string) => void
}

function EventFilterBar({
  searchTerm,
  onSearchChange,
}: EventFilterBarProps) {
  const { t } = useTranslation()

  return (
    <div className="filter-bar">
      <Form.Group controlId="eventSearch">
        <Form.Label>{t('events.search')}</Form.Label>
        <Form.Control
          type="search"
          placeholder={t('events.searchPlaceholder')}
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </Form.Group>
    </div>
  )
}

export default EventFilterBar
