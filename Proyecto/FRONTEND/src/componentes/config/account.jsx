
import './account.css';
import ChangePasswordForm from './changePasswordForm'
import React, { useState } from 'react';
import InfoAccountForm from './infoAccountForm';

function Account() {

    const [activeForm, setActiveForm] = useState(null);

    const handleShowInfoForm = () => {
        setActiveForm(activeForm === 'info' ? null : 'info');
    }

    const handleChangePasswordForm = () => {
        setActiveForm(activeForm === 'changePassword' ? null : 'changePassword');
    }


    return (
        <div className="AccountContainer">
            {/* si el active form no es change password solo va a mostrar lo de informacion de la cuenta*/
            activeForm !== 'changePassword' && (
                <button onClick={handleShowInfoForm}>
                    <span className="texto-principal">
                    {
                    activeForm === 'info' ? 'Regresar' : 'Información de la cuenta'
                    }
                    </span>
                    <span className="descripcion">
                        {activeForm !== 'info' && 'Ve o cambia la información de tu cuenta, como tu nombre y direccion correo electrónico'}
                    </span>
                </button>
            )}
            {activeForm === 'info' && <InfoAccountForm />}

            {/* si el active form no es info solo va a mostrar lo de cambiar contraseña*/
            activeForm !== 'info' && (
                <button onClick={handleChangePasswordForm}>
                    <span className="texto-principal">
                    {
                    activeForm === 'changePassword' ? 'Regresar' : 'Cambia la contraseña'
                    }
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