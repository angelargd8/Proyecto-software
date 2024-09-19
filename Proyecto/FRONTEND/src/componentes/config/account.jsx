
import './account.css';
import ChangePasswordForm from './changePasswordForm'
import React, { useState } from 'react';
import InfoAccountForm from './infoAccountForm';

function Account() {
    /** para mostrar el form de cambiar la contraseña */
    const [showChangePassword, setShowChangePassword] = useState(false);

    return (
        <div>
            <div className="InfoContainer">
                <h1>Información de la cuenta</h1>
                <div className="InfoAccount">
                    <InfoAccountForm/>
                </div>
            </div>
            <button onClick={() => setShowChangePassword(!showChangePassword)}>
                    {showChangePassword ? 'Ocultar formulario' : 'Cambia la contraseña'}
            </button>
            {showChangePassword && <ChangePasswordForm/>}
        </div>
    )
}

export default Account;