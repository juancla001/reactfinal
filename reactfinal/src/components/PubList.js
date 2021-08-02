import React, {useEffect, useState} from 'react';
import Cards from './Cards';
import CardsPromo from './CardsPromo';
import Row from 'react-bootstrap/Row';
import NavBarMisPubs from './NavBarMisPubs';
import PubEditorModal from './PubEditorModal';
import Swal from 'sweetalert2';

export default function PubList(props){
    const [publicaciones, setPublicaciones]= useState([]);
    const [showPubEditorModal, setShowEditorModal] = useState(false)
    const [selectedPub, setSelectedPub] = useState(null);


    useEffect(getPubs, [props.type])   //el array vacio para que solo lo actualiza una vez, pero puedo usar variables de estado consultar de nuevo

    async function getPubs (){
        let url = 'http://localhost:8000/publicaciones';

        if(props.type === 'mispublicaciones'){
            url += 'usrpubs';
        }else if(props.type == 'favoritos'){
            url += '/favoritos';
        }

        const response = await fetch(url, { credentials: 'include' });
        const data = await response.json();

        setPublicaciones(data);
        };

    function getCards(){
        const cards = publicaciones.map((publicacion)=>{
            return(
                <Cards 
                titulo={publicacion.titulo}
                precio={publicacion.precio}
                imagen={publicacion.imagen} 
                id={publicacion.id}
                type={props.type}
                onEditClick={handleEditeClick}
                //onDeleteClick={handleDeleteClick}
                />
            )
        });
    return cards;
};

const handleShowPubEditorModal = ()=>{
    setSelectedPub(null);
    setShowEditorModal(true);
    };

const handleHidePubEditorModal = () =>{
    setShowEditorModal(false);
};

const handlePubSaved = (message)=>{
    getPubs();
    handleHidePubEditorModal();

    Swal.fire({
        text: message,
        icon: 'success',
    });
};

const handleEditeClick = (idPub)=>{
    selectedPub(idPub);
    handleShowPubEditorModal();
};


    return (
        <>
        <Row className="row-cols-1 row-cols-sm-2">
            <CardsPromo titulo="promocion de la semana" />
            <CardsPromo titulo="promocion de la semana" />
        </Row>

        {props.type === 'mispublicaciones' && (
            <NavBarMisPubs onNewPubClick={handleShowPubEditorModal} 
            />
        )}
        
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {getCards()}
        </Row>

            <PubEditorModal 
                show={showPubEditorModal}
                handleHide={handleHidePubEditorModal}
                onPubSaved={handlePubSaved}
                idPubP={selectedPub}
            />
        </>
    );
};