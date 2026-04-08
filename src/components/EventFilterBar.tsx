import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'

type EventFilterBarProps = {
  categories: string[]
  selectedCategory: string
  searchTerm: string
  onCategoryChange: (value: string) => void
  onSearchChange: (value: string) => void
}

function EventFilterBar({
  categories,
  selectedCategory,
  searchTerm,
  onCategoryChange,
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
      <Form.Group controlId="eventCategory">
        <Form.Label>{t('events.category')}</Form.Label>
        <Form.Select
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="All">{t('events.all')}</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {t(`categories.${category.toLowerCase()}`)}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  )
}

export default EventFilterBar
