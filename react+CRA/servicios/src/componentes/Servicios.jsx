import React from "react";
import '../styles/servicios.css';

export function Servicios(props){
    return(
        <div className="contenedor-servicios">
            <img className="imagen-servicio" src={require(`../Imagenes/${props.imagen}`)} alt={props.descfoto} />
            <div className="contenedor-texto-servicios">
                <p className="especialista">{props.nombre}</p>
                <p className="servicios">{props.servicios}</p>
                <p className="descripcion">{props.descripcion}</p>
            </div>
        </div>
    );
}