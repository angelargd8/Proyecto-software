import "../configuracion.css";
import "./forms.css";
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function ChangePasswordForm() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [enteredCurrentPassword, setEnteredCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [name, setName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [Rol, setRol] = useState(1); 

    const [error, setError] = useState(null);

    useEffect(() => {
        const getPassword = async () => {
            const url = import.meta.env.VITE_APIPORT;
            const query = `
                query OneUser($email: String!) {
                    oneUser(email: $email) {
                        password
                    }
                }
            `;
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query,
                        variables: { email }
                    }),
                });
                const data = await response.json();
                if (data.errors) {
                    setError(data.errors);
                    console.error("Error en la consulta GraphQL:", data.errors);
                } else {
                    setCurrentPassword(data.data.oneUser.password);
                    setName(data.data.oneUser.name);
                    setLastName(data.data.oneUser.lastName);
                    setRol(data.data.oneUser.Rol);
                }
            } catch (error) {
                setError(error);
                console.error("Error:", error);
            }
        };
        getPassword();
    }, [email]);

    const handleUpdatePassword = async () => {
        if (enteredCurrentPassword !== currentPassword) {
            setError(new Error("La contraseña actual no es correcta"));
            return;
        }
        if (newPassword !== confirmPassword) {
            setError(new Error("Las contraseñas no coinciden"));
            return;
        }
        const url = import.meta.env.VITE_APIPORT;
        const mutation = `
            mutation ModifyUserPassword($email: String!, $password: String!) {
                modifyUserPassword(email: $email, password: $password) {
                    message
                    status
                    user {
                    email
                    password
                    }
                }
            }
        `;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: mutation,
                    variables: { email, password: newPassword }
                }),
            });
            const data = await response.json();            
            if (data.errors) {
                setError(data.errors);
                console.error("Error en la mutación GraphQL:", data.errors);
            } else {
                alert("Contraseña modificada correctamente");
            }
        } catch (error) {
            setError(error);
            console.error("Error:", error);
        }
    };

    return (
        <div className="ChangePasswordContainer">
            <h1>Cambia la contraseña</h1>
            <div className="ChangePassword">
                {error && <p className="error">Error: {error.message}</p>}
                <div className="ul">
                    <li>Contraseña Actual: <input type="password" className="input" value={enteredCurrentPassword} onChange={(e) => setEnteredCurrentPassword(e.target.value)} /> </li>
                    <li>Nueva contraseña: <input type="password" className="input" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /></li>
                    <li>Confirma contraseña: <input type="password" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></li>
                    <button className="botonForms" onClick={handleUpdatePassword}>Cambiar contraseña</button>
                </div>
            </div>
        </div>
    );
}

export default ChangePasswordForm;

