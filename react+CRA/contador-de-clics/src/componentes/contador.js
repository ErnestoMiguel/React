import React from "react";
import '../styles/contador.css'

export function Contador({ cantClicks }){
    return(
        <div className="contador">
            {cantClicks}
        </div>
    );
}