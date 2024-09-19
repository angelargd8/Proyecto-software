import "./configuracion.css";
import React from 'react';

function InfoAccountForm(){
    return(
        <div className="InfoContainer">
                <h1>Información de la cuenta</h1>
            <div className="InfoAccount">
                <ul>
                    <li>Nombre de usuario: <input type="password" /> </li>
                    <li>Correo electrónico:  <input type="password" /></li>
                    <button>Cambiar credenciales</button>
                </ul>
            </div>
        </div>
    )
}

export default InfoAccountForm;