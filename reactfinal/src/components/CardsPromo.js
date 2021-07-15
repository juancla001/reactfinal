import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';

export default function CardsPromo(props){
    const promoImageURL = `http://localhost:8000/images/${props.images}`;
    
    const cardPromoImageStyle={
        height: '50vh',
        objectFit:'contain',
    };
    return(
        <Col className="my-2">
        <Card className="h-100">
            <Card.Img style={cardPromoImageStyle} variant="top" src={promoImageURL} />
            <Card.Body>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Text>
                promociones destacadas del mes
            </Card.Text>
            </Card.Body>

            <Card.Footer className="text-muted">${props.precio}</Card.Footer>
        </Card> 
    </Col>
    )}