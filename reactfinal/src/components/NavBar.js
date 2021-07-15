import React, {useState} from 'react';

//REACT-BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//IMAGES
import logoloco from '../assets/images/logoloco.png';

import LoginModal from './LoginModal';


export default function NavBar(props){
//cambiar el estado del moda
    const [showLoginModal, setShowLoginModal] = useState(false)

    const handleLoginClick= ()=>{
        setShowLoginModal(true)
    };
    const handleCloseLoginModal= ()=>{
        setShowLoginModal(false);
    };

    return (
    <>
        <Navbar style={{backgroundColor:'#61dafb'}} expand="lg">
            <Navbar.Brand href="#home">
            <img  top width="70px" height="70px" src={logoloco}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">

{/* iniciar secion props.user, renderizado condicional */}
            <Nav className="ml-auto">
                { props.user
                    ?
                    <>
                    <Nav.Link href="#home">Mis Publicaciones</Nav.Link>
                    <Nav.Link href="#link">Favoritos</Nav.Link>

                <NavDropdown 
                        alignRight
                        title={props.user.name} 
                        id="basic-nav-dropdown">
                    
                    <NavDropdown.Item href="#action/3.1">Mi Cuenta</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Mis Compras</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.4">Cerrar sesión</NavDropdown.Item>
                </NavDropdown>
                </>
            :
                    <Button onClick={handleLoginClick}>Iniciar Sesion</Button>
                }
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        <LoginModal show={showLoginModal} 
        handleCloseLoginModal={handleCloseLoginModal} />
    </>
    );
}