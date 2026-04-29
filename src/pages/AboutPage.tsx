import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import { useTranslation } from 'react-i18next'
import SectionCard from '../components/SectionCard'

function AboutPage() {
  const { t } = useTranslation()
  const stats = [
    {
      value: '61',
      label: t('about.communityTotalLabel'),
      context: t('about.communityTotalContext'),
    },
    {
      value: '17',
      label: t('about.undergraduateLabel'),
      context: t('about.undergraduateContext'),
    },
    {
      value: '34',
      label: t('about.graduateLabel'),
      context: t('about.graduateContext'),
    },
  ]
  const registrarRows = [
    [t('about.academicLevels.freshman'), 3],
    [t('about.academicLevels.sophomore'), 4],
    [t('about.academicLevels.junior'), 8],
    [t('about.academicLevels.senior'), 2],
    [t('about.academicLevels.masters'), 9],
    [t('about.academicLevels.phd'), 25],
    [t('about.academicLevels.specialStudent'), 10],
  ]

  return (
    <div className="d-grid gap-4">
      <div className="section-intro">
        <p className="section-kicker">{t('about.eyebrow')}</p>
        <h1 className="section-title">{t('about.title')}</h1>
        <p className="section-description">{t('about.description')}</p>
      </div>

      <section className="about-story">
        <h2 className="saved-heading">{t('about.storyTitle')}</h2>
        <p className="section-description">{t('about.storyP1')}</p>
        <p className="section-description">{t('about.storyP2')}</p>
        <p className="section-description">{t('about.storyP3')}</p>
        <p className="section-description">{t('about.storyP4')}</p>
        <p className="section-description">{t('about.storyP5')}</p>
      </section>

      <Row className="g-4">
        <Col md={6}>
          <SectionCard
            title={t('about.missionTitle')}
            body={t('about.missionBody')}
          />
        </Col>
        <Col md={6}>
          <SectionCard
            title={t('about.hostTitle')}
            body={t('about.hostBody')}
          />
        </Col>
      </Row>
      <section className="about-stats">
        <div className="section-intro">
          <p className="section-kicker">{t('about.communityEyebrow')}</p>
          <h2 className="saved-heading">{t('about.communityTitle')}</h2>
          <p className="section-description">{t('about.communityDescription')}</p>
        </div>
        <div className="community-layout">
          <div className="community-stats-column">
            {stats.map((stat) => (
              <div className="stat-card">
                <p className="stat-value">{stat.value}</p>
                <h3 className="stat-label">{stat.label}</h3>
                <p className="stat-context">{stat.context}</p>
              </div>
            ))}
          </div>
          <div className="community-table-wrap">
            <div className="community-source">
              <h3 className="board-nav-label">{t('about.sourceLabel')}</h3>
              <p className="stat-context">{t('about.sourceValue')}</p>
            </div>
            <Table responsive className="community-table">
              <thead>
                <tr>
                  <th>{t('about.table.academicLevel')}</th>
                  <th>{t('about.table.count')}</th>
                </tr>
              </thead>
              <tbody>
                {registrarRows.map(([academicLevel, count]) => (
                  <tr key={`${academicLevel}`}>
                    <td>{academicLevel}</td>
                    <td>{count}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
