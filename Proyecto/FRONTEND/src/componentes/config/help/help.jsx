
import React, { useState }  from 'react';
import '../Account/account.css';
import AgregarCategoriaHelp from './agregarCategoriaHelp';
import AgregarUsuarioHelp from './agregarUsuarioHelp';

function Help() {

    const [activeForm, setActiveForm] = useState(null);

    const handleShowInfoForm = () => {
        setActiveForm(activeForm === 'AgregarCategoriaHelp' ? null : 'AgregarCategoriaHelp');
        console.log(activeForm);
    }

    const handleAgregarUsuarioHelp = () => {
        setActiveForm(activeForm === 'AgregarUsuarioHelp' ? null : 'AgregarUsuarioHelp');
    }

    return (
        <div className="AccountContainer">
            <div>
                <h2>Ayuda</h2><hr></hr>
            </div>
                {/* si el active form no es change password solo va a mostrar lo de informacion de la cuenta*/
                activeForm !== 'changePassword' && (
                    <button
                    onClick={handleShowInfoForm}
                    className={`button ${activeForm === 'AgregarCategoriaHelp' ? 'button-regresar' : ''}`}
                    >
                        <span className="texto-principal">
                            {activeForm === 'AgregarCategoriaHelp' ? 'Regresar' : 'Agregar categoría'}
                        </span>
                        <span className="descripcion">
                            {activeForm !== 'AgregarCategoriaHelp' &&  'Proceso de agregar categoría'}
                        </span>
                    </button>
                )}
                {activeForm === 'AgregarCategoriaHelp' && <AgregarCategoriaHelp />}

                {/* si el active form no es info solo va a mostrar lo de cambiar contraseña*/
                activeForm !== 'AgregarCategoriaHelp' && (
                    <button onClick={handleAgregarUsuarioHelp}
                    className={`button ${activeForm === 'AgregarUsuarioHelp' ? 'button-regresar' : ''}`}
                    >
                        <span className="texto-principal">
                            {activeForm === 'AgregarUsuarioHelp' ? 'Regresar' : 'Registrar un nuevo usuario'}
                        </span>
                        <span className="descripcion">
                            {activeForm !== 'AgregarUsuarioHelp' && 'Proceso de registro de un nuevo usuario y explicación de roles'}
                        </span>
                    </button>
                )}
                {activeForm === 'AgregarUsuarioHelp' && <AgregarUsuarioHelp />}
        </div>
    )
}
export default Help;