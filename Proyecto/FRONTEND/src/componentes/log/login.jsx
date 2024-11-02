import "./login.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import GoogleAuthProvider from "./GoogleAuthProvider";
import foto from "../../assets/img/Cartulinas2.jpg";
import foto2 from "../../assets/img/Brillantina-tierra.jpg";
import foto3 from "../../assets/img/Cartulina.jpg";
import foto4 from "../../assets/img/floresF.jpg";
import foto5 from "../../assets/img/Brillantina-tornasol.jpg";
import foto6 from "../../assets/img/Flores/FLOR GRANDE.jpg";
import foto7 from "../../assets/img/Flores/FLOR PEQUEÑA.jpg";
import foto8 from "../../assets/img/Colorante/AÑELINA.jpg";
import foto9 from "../../assets/img/Colorante/COLORANTE VEGETAL.jpg";
import foto10 from "../../assets/img/Brillantina-surtida.jpg";
import React, { useState } from "react";
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleHome = () => {
    navigate("/home");
  };

  const responseGoogle = (response) => {
    const credential = parseJwt(response.credential);

    if (response && credential) {
      const { email, name } = credential;
      navigate("/home");
      //separar nombre y apellido
      const [firstName, lastName] = name.split(" ");
      //para que asi pueda cerrar sesion
      localStorage.setItem("googleUser", email);
      localStorage.setItem("email", email);
      localStorage.setItem("GoogleName", firstName);
      handleLoginGoogle(email);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oh no",
        text: "La autenticación con Google no se realizó correctamente."
      });
    }
  };

  //parsear la credencial a datos de google, como foto, nombre, email, etc
  function parseJwt(token) {
    //token = credencial
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  //handle login google es para validar si el usuario ya esta registrado en la base de datos o si solamente se registro con google
  const handleLoginGoogle = (email) => {
    //4000 para devs
    // const url = import.meta.env.VITE_APIPORT;
    // tests: 
    var url = process.env.VITE_APIPORT;
    //const url = typeof process !== 'undefined' && process.env.VITE_APIPORT ? process.env.VITE_APIPORT : import.meta.env.VITE_APIPORT;
    const query = `
      query validateEmail($email: String!){
        validateEmail(email: $email) {
          email
          name
          rol{
            name
          }
        }
      }
      
      `;
    async function validateCredentialsGoogle() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: {
              email: email,
            },
          }),
        });
        const data = await response.json();
        if (data.error) {
          console.error("Error en la consulta GraphQL:", data.errors);
        }
        if (data.data.validateEmail == null) {
          console.log(
            "el usuario solo ingreso con google, no es un usuario registrado por el administrador"
          );
        } else {
          const rol = localStorage.setItem(
            "rol",
            data.data.validateEmail.rol.name
          );
          Swal.fire({
            icon: "success",
            title: `${data.data.validateCredentials.name}, bienvenid@ a Picolin`,
            showConfirmButton: false,
            timer: 2000
          });
          navigate("/home");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    validateCredentialsGoogle();
  };

  const handleLogin = () => {
    //const url = import.meta.env.VITE_APIPORT;
    // tests: 
    var url = process.env.VITE_APIPORT;
    //const url = typeof process !== 'undefined' && process.env.VITE_APIPORT ? process.env.VITE_APIPORT : import.meta.env.VITE_APIPORT;
    console.warn(url);
    const query = `
        query validateCredentials($email: String!, $password: String!){
          validateCredentials(email: $email, password: $password) {
            email
            name
            rol{
              name
              }
              }
              }
              
        `;
    async function validateCredentials() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: {
              email: email,
              password: password,
            },
          }),
        });
        const data = await response.json();
        if (data.error) {
          console.error("Error en la consulta GraphQL:", data.errors);
        }
        if (data.data.validateCredentials == null) {
          console.error("Error el usuario  con esa contraseña no existe");
          {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Usuario o contraseña incorrectos"
            });
          }
        } else {
          console.log(data.data.validateCredentials);

          const rol = localStorage.setItem(
            "rol",
            data.data.validateCredentials.rol.name
          );
          localStorage.setItem("name", data.data.validateCredentials.name);
          localStorage.setItem("email", data.data.validateCredentials.email);
          console.log(rol);
          Swal.fire({
            icon: "success",
            title: `${data.data.validateCredentials.name}, bienvenid@ a Picolin`,
            showConfirmButton: false,
            timer: 2000
          });

          navigate("/home");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    //navigate("/home");
    validateCredentials();
  };

  const imagenes = [
    foto,
    foto6,
    foto2,
    foto3,
    foto4,
    foto5,
    foto7,
    foto8,
    foto10,
  ];

  const imageGallery = ({ images }) => (
    <div className="texto-imagen">
      {imagenes.map((image, index) => (
        <div
          key={index}
          className="imagen"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );

  return (
    <>
      <GoogleAuthProvider>
        <div className="login body">
          <div className="goBack">
            <button className="goBack-btn" onClick={handleHome}>
              {" "}
              &lt;{" "}
            </button>
          </div>
          <div className="contenedor">
            <div className="contenido-imagen">
              <div className="texto-imagenn">
                {imagenes.map((imagen, index) => (
                  <img key={index} src={imagen} alt="Imagen"></img>
                ))}
              </div>
              <div className="texto-imagenn2">
                {imagenes.map((imagen, index) => (
                  <img key={index} src={imagen} alt="Imagen"></img>
                ))}
              </div>
            </div>
            <div className="formulario">
              <h1 className="form-text">Inicia sesión</h1>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                placeholder="Correo Electrónico"
                className="inputs"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                className="inputs"
                placeholder="Contraseña"
              />

              <div className="boton">
                <button className="btn" onClick={handleLogin}>
                  Iniciar sesión
                </button>
              </div>
              <div className="googleAuth">
                <GoogleLogin
                  buttonText="Iniciar sesión con Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </GoogleAuthProvider>
    </>
  );
}
export default Login;
