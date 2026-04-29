import type { EventCategory } from '../config/appConfig'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

type EventFilterCategory = EventCategory | 'all'
type DatePreset = 'all' | 'today' | 'thisWeek' | 'thisMonth' | 'custom'

type EventFilterBarProps = {
  searchTerm: string
  selectedCategory: EventFilterCategory
  selectedDatePreset: DatePreset
  startDate: string
  endDate: string
  categories: EventCategory[]
  onSearchChange: (value: string) => void
  onCategoryChange: (value: EventFilterCategory) => void
  onDatePresetChange: (value: DatePreset) => void
  onStartDateChange: (value: string) => void
  onEndDateChange: (value: string) => void
}

function EventFilterBar({
  searchTerm,
  selectedCategory,
  selectedDatePreset,
  startDate,
  endDate,
  categories,
  onSearchChange,
  onCategoryChange,
  onDatePresetChange,
  onStartDateChange,
  onEndDateChange,
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

      <Form.Group controlId="eventCategory">
        <Form.Label>{t('events.category')}</Form.Label>
        <Form.Select
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value as EventFilterCategory)}
        >
          <option value="all">{t('events.all')}</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {t(`categories.${category}`)}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="eventDatePreset">
        <Form.Label>{t('events.dateFilter')}</Form.Label>
        <Form.Select
          value={selectedDatePreset}
          onChange={(event) => onDatePresetChange(event.target.value as DatePreset)}
        >
          <option value="all">{t('events.allDates')}</option>
          <option value="today">{t('events.today')}</option>
          <option value="thisWeek">{t('events.thisWeek')}</option>
          <option value="thisMonth">{t('events.thisMonth')}</option>
          <option value="custom">{t('events.customRange')}</option>
        </Form.Select>
      </Form.Group>

      {selectedDatePreset === 'custom' ? (
        <>
          <Form.Group controlId="eventStartDate">
            <Form.Label>{t('events.startDate')}</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(event) => onStartDateChange(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="eventEndDate">
            <Form.Label>{t('events.endDate')}</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(event) => onEndDateChange(event.target.value)}
            />
          </Form.Group>
        </>
      ) : null}
    </div>
  )
}

export default EventFilterBar
