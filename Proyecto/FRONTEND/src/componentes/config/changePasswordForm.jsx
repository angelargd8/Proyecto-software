import "./configuracion.css";
import React from 'react';

function ChangePasswordForm(){
    return(
        <div className="ChangePasswordContainer">
            <h1>Cambia la contraseña</h1>
            <div className="ChangePassword">
                <ul>
                    <li>Contraseña Actual: <input type="password" /> </li>
                    <li>Nueva contraseña  <input type="password" /></li>
                    <li>Confirma contraseña <input type="password" /></li>
                </ul>
            </div>
        </div>
    )
}

export default ChangePasswordForm;