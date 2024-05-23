import './login.css'
import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/home");
    }

    const handleLogin = () => {
        // aqui esta la logica del login xd
        const url = ' http://localhost:4000/'
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
        async function validateCredentials(){
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
                  password: document.getElementById('password').value
                }
              })
            });
            const data = await response.json();
            if (data.error) {
              console.error('Error en la consulta GraphQL:', data.errors);
            } 
            if (data.data.validateCredentials == null) {
              console.error('Error el usuario  con esa contraseña no existe');
              {alert('Error el usuario  con esa contraseña no existe')}
            }
            else {
              console.log(data.data.validateCredentials);
              //localStorage.setItem('name', data.data.validateCredentials.name);
              const rol = localStorage.setItem('rol', data.data.validateCredentials.rol.name);
              console.log(rol);
              {alert('Bienvenir@ '+data.data.validateCredentials.name+' a Picolin')}

              navigate("/home");
            }
            }catch(error){
              console.error('Error:', error);
            }
        }


        //navigate("/home");
        validateCredentials();
    };


    return (
        <>
        <div className="login body">
          <div className="goBack">
              <button className="goBack-btn" onClick={handleHome}> &lt; regresar</button>
            </div>
          <div className="formulario">
              <h1 className='form-text'>Inicia sesión</h1>
                <input type="email" id="email" name="email" placeholder="Correo Electrónico" className="inputs"/>
                
                <input type="password" id="password" name="password" className="inputs" placeholder="Contraseña"/>
                
                <div className="boton">
                  <button className= "btn" onClick={handleLogin}>
                    Iniciar sesión
                  </button>
                </div>
                             
        
          </div>
        </div>
        </>
      )
}
export default Login;