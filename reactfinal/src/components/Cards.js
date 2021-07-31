import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';



export default function Cards(props){
    const imageURL = `http://localhost:8000/images/${props.images}`;
    
    const cardImageStyle={
        height: '35vh',
        objectFit:'contain',
    };

    return(
        <Col className="my-4 text-center" >
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

                {props.type === 'mispublicaciones' &&(
                    <Row className="my-2">
                        <Col>
                        <Button 
                            variant="light" 
                                onClick={(event)=>{
                                    event.preventDefault();
                                    alert("editar");
                                }}
                        >
                            <FontAwesomeIcon color="green" icon={faEdit}/>
                        </Button>
                        <Button variant="light"
                                    onClick={(event)=>{
                                        event.preventDefault();  //con esto hago que no sevalla de la pag
                                        alert("editar");
                                }}
                        >
                            <FontAwesomeIcon color="red" icon={faTrash}/>
                        </Button>
                        </Col>
                    </Row>
                    )}
            </Card>
        </Link>

        </Col>
    )}