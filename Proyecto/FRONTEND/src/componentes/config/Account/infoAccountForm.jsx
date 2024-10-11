import "../configuracion.css";
import "./forms.css";
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function InfoAccountForm() {
    const [userInfo, setUserInfo] = useState({ name: '', lastname: '', email: '' });
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(localStorage.getItem('email')|| '');

    useEffect(() => {
        const getInfoAccount = async () => {
            const url = import.meta.env.VITE_APIPORT;
            const query = `
                query OneUser($email: String!) {
                    oneUser(email: $email) {
                        email
                        name
                        lastName
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
                        variables: { email: localStorage.getItem('email') }
                    }),
                });
                const data = await response.json();
                if (data.errors) {
                    setError(data.errors);
                    console.error("Error en la consulta GraphQL:", data.errors);
                } else {
                    setUserInfo(data.data.oneUser);
                    setName(data.data.oneUser.name);
                    setLastName(data.data.oneUser.lastName);
                    setEmail(data.data.oneUser.email);
                }
            } catch (error) {
                setError(error);
                console.error("Error:", error);
            }
        };

        getInfoAccount();
    }, []);

    const handleUpdateUser = async () => {
        const url = import.meta.env.VITE_APIPORT;
        const mutation = `
            mutation ModifyUserNameLastName($email: String!, $name: String!, $lastName: String!) {
                modifyUserNameLastName(email: $email, name: $name, lastName: $lastName) {
                    user {
                        name
                        lastName
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
                    variables: { email: localStorage.getItem('email'), name, lastName }
                }),
            });
            const data = await response.json();
            if (data.errors) {
                setError(data.errors);
                console.error("Error en la mutación GraphQL:", data.errors);
            } else {
                setUserInfo(data.data.modifyUser);
                alert("Datos modificados correctamente");

            }
        } catch (error) {
            setError(error);
            console.error("Error:", error);
        }
    };

    return (
        <div className="InfoContainer">
            <h1>Información de la cuenta</h1>
            <div className="InfoAccount">
                {error && <p className="error">Error al cargar la información de la cuenta: {error.message}</p>}
                <ul>
                    <li>Nombre: <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} /> </li>
                    <li>Apellido: <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} /> </li>
                    <li>Correo electrónico: <input type="email" className="input" value={email} disabled/></li>
                    <button className="botonForms" onClick={handleUpdateUser}>Cambiar credenciales</button>
                </ul>
            </div>
        </div>
    );
}

export default InfoAccountForm;
