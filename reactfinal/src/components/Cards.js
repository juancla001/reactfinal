import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

export default function Cards(props){
    const imageURL = `http://localhost:8000/images/${props.images}`;
    
    const cardImageStyle={
        height: '35vh',
        objectFit:'contain',
    };

    return(
        <Col className="my-4" >
        <Link to={'/detail/${props.id}'} className="nav-link">
                <Card className="h-100">
                    <Card.Img style={cardImageStyle} variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">${props.precio}</Card.Footer>
            </Card>
        </Link>

        </Col>
    )}