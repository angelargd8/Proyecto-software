import "./configuracion.css";
import "./forms.css";
import React from 'react';

function InfoAccountForm(){
    return(
        <div className="InfoContainer">
                <h1>Información de la cuenta</h1>
            <div className="InfoAccount">
                <ul>
                    <li>Nombre de usuario: <input type="text" className="input" /> </li>
                    <li>Correo electrónico:  <input type="email"  className="input"/></li>
                    <button className="botonForms">Cambiar credenciales</button>
                </ul>
            </div>
        </div>
    )
}

export default InfoAccountForm;