import React from 'react';

export default function MiBoton(props){
    return<button className={`btn btn-${props.estilo}`}>{props.texto}</button>;
}