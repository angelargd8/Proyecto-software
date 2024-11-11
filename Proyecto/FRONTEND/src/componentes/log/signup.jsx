import React from "react";
import "./signup.css";
import { useSignup } from "../../hooks/useSignUp";

function SignUp() {
  const {
    email,
    setEmail,
    name,
    setName,
    lastname,
    setLastname,
    password,
    setPassword,
    rol,
    setRol,
    handleHome,
    handleSignup,
  } = useSignup();

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
            <h1 className="form-text">Registro</h1>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              className="inputs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Apellido"
              className="inputs"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              className="inputs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              className="inputs"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="roles">
              <label htmlFor="rol">Rol: </label>
              <select
                name="rol"
                id="rol"
                className="inputs"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option className="escoger">Escoger...</option>
                <option value="1">Administrador</option>
                <option value="2">Usuario</option>
              </select>
            </div>

            <div className="boton">
              <button className="btn" onClick={handleSignup}>
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
