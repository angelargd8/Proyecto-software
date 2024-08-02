import './login.css'
import { useNavigate } from 'react-router-dom';
//import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import GoogleAuthProvider from './GoogleAuthProvider';

function Login(){
    //const clienteId ="30472634326-rbomjumikpc7llu20snb7bcvmmc4h87n.apps.googleusercontent.com"
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/home");
    }

    const responseGoogle = (response) => {
      //console.log(response);
      const credential = parseJwt(response.credential)
      
      if (response && credential) {
        const { email } = credential;
        //console.log(email);
        navigate("/home");
        //para que asi pueda cerrar sesion 
        localStorage.setItem('googleUser', email);
        console.log(localStorage.getItem('googleUser'));
        handleLoginGoogle(email);

      } else {
        alert('La autenticación con Google no se realizó correctamente');
      }
    }

    //parsear la credencial a datos de google, como foto, nombre, email, etc
    function parseJwt(token) { //token = credencial
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    
      return JSON.parse(jsonPayload);
    }

    const handleLoginGoogle = () => {
      const url = ' http://localhost:4000/'
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
      async function validateCredentialsGoogle(){
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
              }
            })
          });
          const data = await response.json();
          if (data.error) {
            console.error('Error en la consulta GraphQL:', data.errors);
          } 
          if (data.data.validateEmail == null) {
            console.error('Error el usuario  con esa contraseña no existe');
            {alert('Error el usuario  con esa contraseña no existe')}
          }
          else {
            console.log(data.data.validateEmail);
            const rol = localStorage.setItem('rol', data.data.validateEmail.rol.name);
            console.log(rol);
            {alert('Bienvenir@ '+data.data.validateEmail.name+' a Picolin')}

            navigate("/home");
          }
          }catch(error){
            console.error('Error:', error);
          }
      }
      validateCredentialsGoogle();
  };

    

    const handleLogin = () => {
        const url = 'http://localhost:4000/'
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
        <GoogleAuthProvider>
        <div className="login body">
          <div className="goBack">
              <button className="goBack-btn" onClick={handleHome}> &lt; </button>
            </div>
          <div className="contenedor">
              <div className='imagen'></div>
              <div className="formulario">
                  <h1 className='form-text'>Inicia sesión</h1>
                    <input type="email" id="email" name="email" placeholder="Correo Electrónico" className="inputs"/>
                    
                    <input type="password" id="password" name="password" className="inputs" placeholder="Contraseña"/>
                    
                    <div className="boton">
                      <button className= "btn" onClick={handleLogin}>
                        Iniciar sesión
                      </button>
                    </div>
                    <div className="googleAuth">
                            <GoogleLogin
                             //clientId={clienteId}
                              buttonText="Iniciar sesión con Google"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={'single_host_origin'}
                            ></GoogleLogin>
                    </div>         
              </div>
          </div>
          
        </div>
        </GoogleAuthProvider>
        </>
      )
}
export default Login;