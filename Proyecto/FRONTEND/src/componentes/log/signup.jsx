import React from 'react';
import './signup.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function SingUp(){

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
}

  const handleSignup = () => {

    // const url = import.meta.env.VITE_APIPORT;
    // tests: 
    var url = process.env.VITE_APIPORT;
    // const url = typeof process !== 'undefined' && process.env.VITE_APIPORT ? process.env.VITE_APIPORT : import.meta.env.VITE_APIPORT;
        const query = `
        mutation addnewUser(
          $email: String!
          $nombre: String!
          $appelido: String
          $password: String!
          $rol: Int!
        ) {
          addnewUser(
            email: $email
            nombre: $nombre
            appelido: $appelido
            password: $password
            rol: $rol
          ) {
            status
            message
            user {
              email
              name
            }
          }
        }
      `;

        
        async function crearteUser(){
          try{
            const response = await fetch(url,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query,
                variables: {
                  email: document.getElementById('email').value,
                  nombre: document.getElementById('name').value,
                  apellido: document.getElementById('lastname').value,
                  password: document.getElementById('password').value,
                  rol: parseInt(document.getElementById('rol').value)
                }
              })
            });
            
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log(data);

            if (data.error) {
              console.error('Error en la consulta GraphQL:', data.errors);
            }
            else {
              console.log(data.data.addnewUser);
              Swal.fire({
                title: `${data.data.addnewUser.user.name} a sido registrado correctamente en Picolin!`,
                icon: "success"
              });
              navigate("/home");
            }
            }catch(error){
              console.error('Error:', error);
            }
          }

          crearteUser();
  };
 

    return (
        <>
        <div className="signup body">
          <div className="goBack">
              <button className="goBack-btn" onClick={handleHome}>
                {" "}
                &lt;{" "}
              </button>
            </div>
          <div className="contenedor">
            <div className="imagen"></div>
            <div className="formulario">
                <h1 className='form-text'>Registro</h1>
                
                <input type="text" id="name" name="name" placeholder="Nombre" className="inputs"/>
                <input type="text" id="lastname" name="lastname" placeholder="Apellido" className="inputs"/>
                <input type="email" id="email" name="email" placeholder="Correo Electrónico" className="inputs"/>
                <input type="password" id="password" name="password" className="inputs" placeholder="Contraseña"/>
                
                <div className="roles">
                  <label htmlFor="rol">Rol: </label>
                  <select name="rol" id="rol" className="inputs" defaultValue="1">
                    <option  className="escoger"  >Escoger...</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                  </select>
                </div>

                <div className="boton">
                    <button className= "btn" onClick={handleSignup}>
                      Registrar
                    </button>
                </div>
                      
            
              </div>
        </div>

          
        </div>
        </>
      )
}
export default SingUp;