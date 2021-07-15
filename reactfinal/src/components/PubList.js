import React, {useEffect, useState} from 'react';
import Cards from './Cards';
import CardsPromo from './CardsPromo';
import Row from 'react-bootstrap/Row';


export default function PubList(){
    const [publicaciones, setPublicaciones]= useState([]);
    useEffect(getPubs, [])   //el array vacio para que solo lo actualiza una vez, pero puedo usar variables de estado consultar de nuevo

    async function getPubs (){
        const url = 'http://localhost:8000/publicaciones';
        const response = await fetch(url);
        const data = await response.json();
        setPublicaciones(data);
        };

        function getCards(){
        const cards = publicaciones.map((publicacion)=>{
            return(
            <Cards titulo={publicacion.titulo}
            precio={publicacion.precio}
            imagen={publicacion.imagen} />
            )
        });
        return cards;
        }

    return (
        <>
        <Row className="row-cols-1 row-cols-sm-2">
            <CardsPromo titulo="promocion de la semana" />
            <CardsPromo titulo="promocion de la semana" />
        </Row>
        <p>PRODUCTOS DESTACADOS</p>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {getCards()}
        </Row>
        </>
    );
}