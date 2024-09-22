import "./configuracion.css";
import "./forms.css";
import React from 'react';

function ChangePasswordForm(){
    return(
        <div className="ChangePasswordContainer">
            <h1>Cambia la contraseña</h1>
            <div className="ChangePassword">
                <ul>
                    <li>Contraseña Actual: <input type="password"   className="input"/> </li>
                    <li>Nueva contraseña:  <input type="password"  className="input"/></li>
                    <li>Confirma contraseña: <input type="password"  className="input" /></li>
                    <button className="botonForms">Cambiar contraseña</button>
                </ul>
            </div>
        </div>
    )
}

export default ChangePasswordForm;