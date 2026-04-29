import { NavLink, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ExchangePage() {
  const { t } = useTranslation()

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('exchange.eyebrow')}</p>
        <h1 className="section-title">{t('exchange.title')}</h1>
        <p className="section-description">{t('exchange.description')}</p>
      </div>

      <div className="exchange-links-row">
        <NavLink to="/exchange/considering-uw-madison" className="cta-link cta-outline">
          {t('exchange.subnavConsidering')}
        </NavLink>
        <NavLink to="/exchange/preparing-for-uw-madison" className="cta-link cta-outline">
          {t('exchange.subnavPreparing')}
        </NavLink>
        <NavLink to="/exchange/arriving-in-madison" className="cta-link cta-outline">
          {t('exchange.subnavArriving')}
        </NavLink>
        <NavLink to="/exchange/resources" className="cta-link cta-outline">
          {t('exchange.subnavResources')}
        </NavLink>
      </div>

      <Outlet />
    </div>
  )
}

export default ExchangePage
