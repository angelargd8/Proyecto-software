
import React, { useState }  from 'react';
import '../Account/account.css';
import AgregarCategoriaHelp from './agregarCategoriaHelp';

function Help() {

    const [activeForm, setActiveForm] = useState(null);

    const handleShowInfoForm = () => {
        setActiveForm(activeForm === 'AgregarCategoriaHelp' ? null : 'AgregarCategoriaHelp');
        console.log(activeForm);
    }

    const handleChangePasswordForm = () => {
        setActiveForm(activeForm === 'changePassword' ? null : 'changePassword');
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
                    <button onClick={handleChangePasswordForm}
                    className={`button ${activeForm === 'changePassword' ? 'button-regresar' : ''}`}
                    >
                        <span className="texto-principal">
                            {activeForm === 'changePassword' ? 'Regresar' : 'Registro de ventas'}
                        </span>
                        <span className="descripcion">
                            {activeForm !== 'changePassword' && 'explicacion de registro de ventas'}
                        </span>
                    </button>
                )}
                {activeForm === 'changePassword' && <ChangePasswordForm />}
        </div>
    )
}
export default Help;