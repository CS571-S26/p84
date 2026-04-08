import Container from 'react-bootstrap/Container'
import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import NewsletterSignup from './NewsletterSignup'
import SiteFooter from './SiteFooter'

function SiteLayout() {
  return (
    <div className="site-shell">
      <NavigationBar />
      <main>
        <Container className="py-4 py-lg-5">
          <Outlet />
        </Container>
      </main>
      <NewsletterSignup />
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
