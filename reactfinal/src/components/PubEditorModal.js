import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function PubEditorModal(props) {
    const [categorias, setCategorias] = useState([]);

    const [pubTitulo, setPubTitulo] = useState('');
    const [pubPrice, setPubPrice] = useState('');

    const [pubImage, setPubImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    const [pubCategory, setPubCategory] = useState('');

    const [pubDescription, setPubDescription] = useState('');

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
    };

    const handletPutTituloChange = (event)=>{
        setPubTitulo(event.target.value)
    };

    const handletPutPriceChange = (event)=>{
        setPubPrice(event.target.value)
    };

    const handleCategoryChange = (event)=>{
        setPubCategory(event.target.value)
    };

    const handletPutDescriptionChange = (event)=>{
        setPubDescription(event.target.value)
    };

    const handlePubImageChange = (event)=>{
        setPubImage(event.target.files[0]);

    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    };

const handleSave = () =>{
    const formData = new FormData();
    formData.append('pubTitulo', pubTitulo);
    formData.append('pubPrice', pubPrice);
    formData.append('pubImage', pubImage);
    formData.append('pubCategory', pubCategory);
    formData.append('pubDescription', pubDescription);

    const url = 'http://localhost:8000/publicaciones'
    fetch(url,{
        method: 'POST',
        body: formData,
        credentials: 'include'
    })
    .then((response) => response.json())
    .then((data) =>{
        props.onPubSaved(data.message);
    });
};

useEffect( ()=>{
    if (props.idPub){
        console.log("modo editor")
    }else{
        console.log("modo nuevo")
        }
    }
)

    return (
        <Modal show={props.show} onHide={props.handleHide}>
            <Modal.Header closeButton>
                Publicacion
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" 
                                    value={pubTitulo} 
                                    onChange={handletPutTituloChange} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="text"
                                    value={pubPrice} 
                                    onChange={handletPutPriceChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center">
                        {previewImage &&(
                            <img style={{ height:'30vh'}}
                            src={previewImage} />
                            )}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select" value={pubCategory} onChange={handleCategoryChange}>
                            {getCategoriasOptions()}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" 
                                    onChange={handlePubImageChange} ></Form.Control>
                    </Form.Group>
                </Form>
                <Form.Group>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text"
                                    value={pubDescription} 
                                    onChange={handletPutDescriptionChange}></Form.Control>
                    </Form.Group>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onHide={props.handleHide}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSave}>Guardar</Button>
            </Modal.Footer>

        </Modal>
    );
};

