import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useSignup = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState(1);

  const handleHome = () => {
    navigate("/home");
  };

  const handleSignup = () => {
    const url = import.meta.env.VITE_APIPORT;
    
    const query = `
      mutation addnewUser(
        $email: String!
        $nombre: String!
        $apellido: String
        $password: String!
        $rol: Int!
      ) {
        addnewUser(
          email: $email
          nombre: $nombre
          apellido: $apellido
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

    async function createUser() {
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
              nombre: name,
              apellido: lastname,
              password: password,
              rol: parseInt(rol),
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.errors) {
          console.error("Error en la consulta GraphQL:", data.errors);
        } else {
          Swal.fire({
            title: `${data.data.addnewUser.user.name} ha sido registrado correctamente en Picolin!`,
            icon: "success",
          });
          navigate("/home");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    createUser();
  };

  return {
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
  };
};
