import React, { useState } from 'react';
import '../Account/forms.css';

function AgregarCategoriaHelp () {
    return (
        <div className="InfoContainer">
            
            <div className="Help">
                <div className="ul">
                    <div className="helpInfo">
                        <h3>Agregar una categoría: </h3><hr></hr>
                        <li>1. Dirigase a la parte superior entre carrito e usuario y presione el boton que dice "ir vista admin " </li>
                        <li>2. A la par del texto que dice: Editar categoría, se encuentra el botón de "Agregar Categoría " presione el boton para agregar una categoría</li>
                        <li>3. Escriba el nombre de la categoría y agregue una imagen de la categoría</li>
                        <li>4. Presione el boton para agregar la categoría </li>
                    </div>
                    <div className="helpInfo">
                        <h3>Editar una categoría: </h3><hr></hr>
                        <li>1. Dirigase a la parte superior entre carrito e usuario y presione el boton que dice "ir vista admin " </li>
                        <li>2. Abajo del texto que dice: Editar categoría, se encuentra el botón de "Editar Categoría " presione el boton para editar una categoría</li>
                        <li>3. Escriba el nombre de la categoría y agregue una imagen de la categoría</li>
                        <li>4. Presione el boton para editar la categoría </li>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AgregarCategoriaHelp;