import React, { useState } from 'react';
import '../Account/forms.css';

function AgregarUsuarioHelp () {
    return (
        <div className="InfoContainer">
            
            <div className="Help">
                <div className="ul">
                    <div className="helpInfo">
                        <h3>Agregar un nuevo usuario: </h3><hr></hr>
                        <li>1. Dirigase a inicio </li>
                        <li>2. Dirigase a la parte superior entre carrito e usuario y presione el boton que dice "ir vista admin " </li>
                        <li>3. A la par del texto que dice: registro de ventas, se encuentra el botón de " Registro de usuarios " presione el boton para agregar ir a la pantalla de registro</li>
                        <li>4. Llene los datos del usuario a registrar</li>
                        <li>5. Presione el boton para agregar el usuario </li>
                    </div>
                    <div className="helpInfo">
                        <h3> Roles de usuarios: </h3><hr></hr>
                        <li>1. Admin:  usuarios administradores que tienen el permiso para agregar productos y categorias.</li>
                        <li>2. Usuario: usuario normal, con los mismos permisos que una persona que no ha iniciado sesión.</li>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AgregarUsuarioHelp;