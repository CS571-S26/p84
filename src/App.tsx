import { HashRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import BoardPage from './pages/BoardPage'
import BoardYearPage from './pages/BoardYearPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import ExchangePage from './pages/ExchangePage'
import ExchangeArrivingPage from './pages/ExchangeArrivingPage'
import ExchangeConsideringPage from './pages/ExchangeConsideringPage'
import ExchangePreparingPage from './pages/ExchangePreparingPage'
import ExchangeResourcesPage from './pages/ExchangeResourcesPage'
import EventsPage from './pages/EventsPage'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="exchange" element={<ExchangePage />}>
            <Route index element={<ExchangeConsideringPage />} />
            <Route path="considering-uw-madison" element={<ExchangeConsideringPage />} />
            <Route path="preparing-for-uw-madison" element={<ExchangePreparingPage />} />
            <Route path="arriving-in-madison" element={<ExchangeArrivingPage />} />
            <Route path="resources" element={<ExchangeResourcesPage />} />
          </Route>
          <Route path="board" element={<BoardPage />}>
            <Route path="2025-2026" element={<BoardYearPage />} />
          </Route>
          <Route path="faq" element={<FaqPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
