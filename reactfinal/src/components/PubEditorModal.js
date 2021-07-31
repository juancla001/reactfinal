import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function PubEditorModal(props) {
    const [categorias, setCategorias] = useState([]) ;
    useEffect(() => {
        const url = 'http://localhost:8000/categorias';

        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                setCategorias(data);
            });
        }, []);

    function getCategoriasOptions(){
        return categorias.map((categoria)=> (
            <option value={categoria.id}>{categoria.nombre}</option>
            ));

        const url = 'http://localhost:8000/categorias'
        fetch(url)
        .then((response)=>response.json())
        .then((categorias)=>{
        });
    }

    return (
        <Modal show={props.show} onHide={props.handleHide}>
            <Modal.Header closeButton>
                Publicacion
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center">
                        <img style={{ height:'30vh'}}
                            src="http://localhost:8000/images/branca1.jpg" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select">
                            {getCategoriasOptions()}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" ></Form.Control>
                    </Form.Group>
                </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secundary" onHide={props.handleHide}>
                    Cancelar
                </Button>
                <Button>Guardar</Button>
            </Modal.Footer>

        </Modal>
    )
}

