
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
        <div>
            {/* si el active form no es change password solo va a mostrar lo de informacion de la cuenta*/
            activeForm !== 'changePassword' && (
                <button onClick={handleShowInfoForm}>
                    {
                    activeForm === 'info' ? 'Regresar' : 'Información de la cuenta'
                    }
                </button>
            )}
            {activeForm === 'info' && <InfoAccountForm />}

            {/* si el active form no es infosolo va a mostrar lo de cambiar contraseña*/
            activeForm !== 'info' && (
                <button onClick={handleChangePasswordForm}>
                    {
                    activeForm === 'changePassword' ? 'Regresar' : 'Cambia la contraseña'
                    }
                </button>
            )}
            {activeForm === 'changePassword' && <ChangePasswordForm />}
        </div>
    )
}

export default Account;