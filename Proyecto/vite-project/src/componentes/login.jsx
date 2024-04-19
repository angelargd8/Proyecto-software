import './login.css'
import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();

    const handleLogin = () => {
        // aqui va a ir lo de la autentificacion y todo eso
        navigate("/home");
    };

    const handleSignup = () => {
      navigate("/signup");
    };

    return (
        <>
        <div className="login body">
          <div className="formulario">
              <h1 className='form-text'>Inicia sesión</h1>
                <input type="email" id="email" name="email" placeholder="Correo Electrónico" className="inputs"/>
                
                <input type="password" id="password" name="password" className="inputs" placeholder="Contraseña"/>
                
                <div className="boton">
                  <button className= "btn" onClick={handleLogin}>
                    Iniciar sesión
                  </button>
                </div>
                <div className="boton">
                  <button className= "btn2" onClick={handleSignup}>
                    Registrarse
                  </button>
                </div>              
        
          </div>
        </div>
        </>
      )
}
export default Login;