import Card from 'react-bootstrap/Card'

type SectionCardProps = {
  title: string
  body: string
}

function SectionCard({ title, body }: SectionCardProps) {
  return (
    <Card className="info-card h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SectionCard
