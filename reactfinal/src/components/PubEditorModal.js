import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



export default function PubEditorModal(props) {

    return (
        <Modal show={props.show}>
            <Modal.Header>
                Publicacion
            </Modal.Header>
            <Modal.Body>
            <div>aca va el form</div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="segundaty">Cancelar</Button>
                <Button>Guardar</Button>
            </Modal.Footer>

        </Modal>
    )
}

