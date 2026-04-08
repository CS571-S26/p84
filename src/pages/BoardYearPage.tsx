import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

const boardMembers = [
  { name: 'Julie Walsh', role: 'Co-President' },
  { name: 'Max Maejima', role: 'Co-President & Finance Officer' },
  { name: 'Naomi Morioka', role: 'Social Media Coordinator' },
  { name: 'Hiroaki Taniyama', role: 'Event Coordinator' },
  { name: 'Akesh Mallia', role: 'Event Coordinator' },
  { name: 'Yuuta Tomooka', role: 'Global Relations Coordinator' },
  { name: 'Kazumi Choi', role: 'Global Relations Intern' },
  { name: 'Jolyne Chen', role: 'Communications Coordinator' },
]

function BoardYearPage() {
  const { t } = useTranslation()
  const roleMap = {
    'Co-President': t('roles.coPresident'),
    'Co-President & Finance Officer': t('roles.coPresidentFinance'),
    'Social Media Coordinator': t('roles.socialMediaCoordinator'),
    'Event Coordinator': t('roles.eventCoordinator'),
    'Global Relations Coordinator': t('roles.globalRelationsCoordinator'),
    'Global Relations Intern': t('roles.globalRelationsIntern'),
    'Communications Coordinator': t('roles.communicationsCoordinator'),
  }

  return (
    <div className="d-grid gap-3">
      <div className="board-year-header">
        <h2 className="saved-heading">2025-2026</h2>
        <p className="section-description">{t('board.yearDescription')}</p>
      </div>
      <Row className="g-4">
        {boardMembers.map((member) => (
          <Col md={4} key={member.name}>
            <Card className="info-card h-100">
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{roleMap[member.role as keyof typeof roleMap]}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default BoardYearPage
