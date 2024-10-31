
import './account.css';
import React, { useState } from 'react';
import InfoAccountForm from './infoAccountForm';
import ChangePasswordForm from './changePasswordForm';

function Account() {

    const [activeForm, setActiveForm] = useState(null);

    const handleShowInfoForm = () => {
        setActiveForm(activeForm === 'info' ? null : 'info');
        console.log(activeForm);
    }

    const handleChangePasswordForm = () => {
        setActiveForm(activeForm === 'changePassword' ? null : 'changePassword');
    }


    return (
        
        <div className="AccountContainer">
            <div>
                <h2>Tu cuenta</h2><hr></hr>
            </div>
                {/* si el active form no es change password solo va a mostrar lo de informacion de la cuenta*/
                activeForm !== 'changePassword' && (
                    <button
                    onClick={handleShowInfoForm}
                    className={`button ${activeForm === 'info' ? 'button-regresar' : ''}`}
                    >
                        <span className="texto-principal">
                            {activeForm === 'info' ? 'Regresar' : 'Información de la cuenta'}
                        </span>
                        <span className="descripcion">
                            {activeForm !== 'info' && 'Ve o cambia la información de tu cuenta, como tu nombre y direccion correo electrónico'}
                        </span>
                    </button>
                )}
                {activeForm === 'info' && <InfoAccountForm />}

                {/* si el active form no es info solo va a mostrar lo de cambiar contraseña*/
                activeForm !== 'info' && (
                    <button onClick={handleChangePasswordForm}
                    className={`button ${activeForm === 'changePassword' ? 'button-regresar' : ''}`}
                    >
                        <span className="texto-principal">
                            {activeForm === 'changePassword' ? 'Regresar' : 'Cambia la contraseña'}
                        </span>
                        <span className="descripcion">
                            {activeForm !== 'changePassword' && 'Cambia tu contraseña actual por una nueva'}
                        </span>
                    </button>
                )}
                {activeForm === 'changePassword' && <ChangePasswordForm />}
        </div>
    )
}

export default Account;