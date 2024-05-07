import React from "react";
import "./LenguajesVistas";

function LenguajeVistas({len}){

return(
    <div className="lenvista">
        <h1>{len.ntitulo}</h1>
        <h2>{len.ndescripcion}</h2>
        <img src={len.imagen} alt={len.imagen + "imagen"}></img>

    </div>
)

}

export default LenguajeVistas;