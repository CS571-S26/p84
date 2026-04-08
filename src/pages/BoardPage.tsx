import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet } from 'react-router-dom'

function BoardPage() {
  const { t } = useTranslation()

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('board.eyebrow')}</p>
        <h1 className="section-title">{t('board.title')}</h1>
        <p className="section-description">{t('board.description')}</p>
      </div>
      <Card className="info-card">
        <Card.Body className="board-nav-card">
          <p className="board-nav-label">{t('board.yearLabel')}</p>
          <NavLink to="/board/2025-2026" className="board-year-link">
            2025-2026
          </NavLink>
        </Card.Body>
      </Card>
      <Outlet />
    </div>
  )
}

export default BoardPage
