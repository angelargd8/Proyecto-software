import './signup.css'
import { useNavigate } from 'react-router-dom';


function SingUp(){

  const navigate = useNavigate();

  /*const handleHome = () => {
    navigate("/home");
  };
  */

  const handleSignup = () => {

    const url = ' http://localhost:4000/'
        const query = `
        mutation AddnewUser($email: String!, $nombre: String!, $password: String!, $appelido: String) {
          addnewUser(email: $email, nombre: $nombre, password: $password, appelido: $appelido) {
            message
            status
            user {
              name
               email
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
                  password: document.getElementById('password').value,
                  nombre: document.getElementById('name').value,
                  appelido: document.getElementById('lastname').value
                }
              })
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();

            if (data.error) {
              console.error('Error en la consulta GraphQL:', data.errors);
            }
            else {
              console.log(data.data.addnewUser);
              localStorage.setItem('email', data.data.addnewUser.user.email);
              localStorage.setItem('name', data.data.addnewUser.user.name);
              {alert('Bienvenir@ '+data.data.addnewUser.user.name+' a Picolin')}
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
          <div className="formulario">
              <h1 className='form-text'>Registro</h1>
              <input type="text" id="name" name="name" placeholder="Nombre" className="inputs"/>
              <input type="text" id="lastname" name="lastname" placeholder="Apellido" className="inputs"/>
                <input type="email" id="email" name="email" placeholder="Correo Electrónico" className="inputs"/>
                <input type="password" id="password" name="password" className="inputs" placeholder="Contraseña"/>
                
                <div className="boton">
                    <button className= "btn" onClick={handleSignup}>
                      Registrar
                    </button>
                  </div>
                  
        
          </div>
        </div>
        </>
      )
}
export default SingUp;