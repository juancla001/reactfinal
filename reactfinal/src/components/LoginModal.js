import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginModal(props) {
    const [email, setEmail] = useState('');  {/*seteo lo que pone el usuario en el form*/}
    const [password, setPassword] = useState(''); 
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event)=>{
        setPassword(event.target.value);
    };

    const handleAceptarClick = () =>{
        console.log(email, password)
    };

    return(
    <Modal show={props.show} 
    onHide={props.handleCloseLoginModal} >        {/*funcion para que oculte el modal cunado aprieto fuera del modal o esc o x*/}

    <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <Form>
            <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" value={email}
                onChange={handleEmailChange} />  {/*CONTROL DE FORMULARIO EMAIL*/}
            </Form.Group>

                <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="entre 8 y 15 caracteres" 
                    value={password}
                    onChange={handlePasswordChange}/> {/*CONTROL DE FORMULARIO PASSWORD*/}
            </Form.Group>
        </Form>
    </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" 
            onClick={props.handleCloseLoginModal}>  {/*funcion para cerrar el modal al hacef click en cancelar*/}
            Cancelar
            </Button>
            <Button variant="primary" onClick={handleAceptarClick}
            >
            Aceptar
            </Button>
        </Modal.Footer>
    </Modal>
    );
}
