import "./configuracion.css";
import React from 'react';

function InfoAccountForm(){
    return(
        <div className="InfoAccount">
            <ul>
                <li>Nombre de usuario: <input type="password" /> </li>
                <li>Correo electrónico:  <input type="password" /></li>
                <button>Cambiar credenciales</button>
            </ul>
        </div>
    )
}

export default InfoAccountForm;