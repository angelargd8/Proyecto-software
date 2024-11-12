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
import React from "react";
import Swal from "sweetalert2";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const { email, setEmail, password, setPassword, handleHome, handleLoginGoogle, handleLogin } = useLogin();

  const responseGoogle = (response) => {
    if (response && response.credential) {
      const credential = parseJwt(response.credential);
      if (credential) {
        const { email, name } = credential;
        navigate("/home");
        const [firstName, lastName] = name.split(" ");
        localStorage.setItem("googleUser", email);
        localStorage.setItem("email", email);
        localStorage.setItem("GoogleName", firstName);
        handleLoginGoogle(email);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oh no",
          text: "La autenticación con Google no se realizó correctamente.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oh no",
        text: "La autenticación con Google no se realizó correctamente.",
      });
    }
  };

  //parsear la credencial a datos de google, como foto, nombre, email, etc
  function parseJwt(token) {
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
                />
              </div>
            </div>
          </div>
        </div>
      </GoogleAuthProvider>
    </>
  );
}

export default Login;
