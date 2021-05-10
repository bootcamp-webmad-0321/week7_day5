import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CoasterCard = ({ title, imageUrl, _id }) => {

    return (
        <Col md={3}>
            <Card className="coaster-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Link to={`/montañas-rusas/detalles/${_id}`} className="btn btn-dark btn-sm" style={{ width: '100%' }}>Detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CoasterCard