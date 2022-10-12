import React from 'react';
import './StyleTarjeta.css';

export default function Vehiculo(props) {
  return (
    <div id="tarjeta">
      <h2>Hola soy un {props.nombre}</h2>
      <div id="cuerpo">
        <div id="titulo">
          <img src={props.imagen} alt="" />
        </div>
        <div id="contenido">
          <p>{props.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
