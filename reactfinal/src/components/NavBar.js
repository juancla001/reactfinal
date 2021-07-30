import React, {useState} from 'react';

//REACT-BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
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
    const handleLogin = async (email, password) =>{
        console.log(email, password);
        const url = 'http://localhost:8000/auth';
        const params = {
            email,
            password,
        };
//este metodo post para obtener los datos siempre es el mismo en cuanto a la ruta, solo cambiara lo que se quiera obtener, en este caso params
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',  //agregar este parametro credentials para incluir las cookies
        });
        const data = await response.json();
        if(response.status === 200){
            props.changeUser({name: data.data}) 
            handleCloseLoginModal();
        } else{ alert(data.message);
        };
        console.log(data);
    };

    const handleCloseSesion = async()=>{
        const url = 'http://localhost:8000/auth';
        const response = await fetch(url, {
            method:'DELETE',
            credentials: 'include',
        });
        const data = response.json();
        if(response.status === 200){
            props.changeUser(null);
        }else{ 
            alert(data.message);
        }
    };

    return (
    <>
        <Navbar style={{backgroundColor:'#61dafb'}} expand="lg">
            <Link to="/">
                <Navbar.Brand href="#home">
                    <img  top width="70px" height="70px" src={logoloco}></img>
                </Navbar.Brand>
            </Link> 

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="basic-navbar-nav">

{/* iniciar secion props.user, renderizado condicional */}
            <Nav className="ml-auto">
                { props.user ? (
                    <>
                    <Link to="/mispublicaciones" className="nav-link">Mis Publicaciones</Link>
                    <Link to="/favoritos" className="nav-link">Mis Favoritos</Link>

                <NavDropdown 
                        alignRight
                        title={props.user.name} 
                        id="basic-nav-dropdown">
                    
                    <NavDropdown.Item href="#action/3.1">Mi Cuenta</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Mis Compras</NavDropdown.Item>
                    <NavDropdown.Divider/>

                    <NavDropdown.Item onClick={handleCloseSesion}>
                    Cerrar sesión
                    </NavDropdown.Item>

                </NavDropdown>
                </>
            ):(
                    <Button onClick={handleLoginClick}>Iniciar Sesion</Button>
                )}
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        <LoginModal show={showLoginModal} 
        handleCloseLoginModal={handleCloseLoginModal}
        handleLogin={handleLogin}
        />
    </>
    );
}