import { Card } from 'react-bootstrap'

export function MyCard({ cardData }){
    return (
        <Card key={cardData.id} className="mb-4 shadow-sm">
            <Card.Body>
            <Card.Title>{cardData.title}</Card.Title>
            <Card.Text>{cardData.body}</Card.Text>
            </Card.Body>
        </Card>
    )
}