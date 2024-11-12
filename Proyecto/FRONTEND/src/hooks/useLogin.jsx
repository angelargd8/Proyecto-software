import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Hook para manejar el login
export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleHome = () => {
    navigate("/home");
  };

  const handleLoginGoogle = (email) => {
    const url = import.meta.env.VITE_APIPORT;
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
            variables: { email: email },
          }),
        });
        const data = await response.json();
        if (data.error) {
          console.error("Error en la consulta GraphQL:", data.errors);
        }
        if (data.data.validateEmail == null) {
          console.log("El usuario solo ingresó con Google, no es un usuario registrado por el administrador");
          localStorage.setItem("rol", "usuario");
        } else {
          localStorage.setItem("rol", data.data.validateEmail.rol.name);
          Swal.fire({
            icon: "success",
            title: `${data.data.validateEmail.name}, bienvenid@ a Picolin`,
            showConfirmButton: false,
            timer: 2000,
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
    const url = import.meta.env.VITE_APIPORT;
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
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario o contraseña incorrectos",
          });
        } else {
          localStorage.setItem("rol", data.data.validateCredentials.rol.name);
          localStorage.setItem("name", data.data.validateCredentials.name);
          localStorage.setItem("email", data.data.validateCredentials.email);
          Swal.fire({
            icon: "success",
            title: `${data.data.validateCredentials.name}, bienvenid@ a Picolin`,
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/home");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    validateCredentials();
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleHome,
    handleLoginGoogle,
    handleLogin,
  };
};
