import React from "react";
import '../styles/boton.css'

export function Boton({texto, botonclick, manejarclick}){
    return (
        <button className={botonclick ? 'boton-click' : 'contar-click'}
        onClick={manejarclick}>
            {texto}
        </button>
    );
}
