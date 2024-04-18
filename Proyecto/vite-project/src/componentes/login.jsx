import './login.css'

function Login({setRutaActual}){
    
    

    return (
        <>
        <div className="login">
          <div className="formulario">
              <h1>Login</h1>
                <label htmlFor="email" className='form-text'>Correo:</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com..." className="inputs"/>
                
                <label htmlFor="password" placeholder="Your password.." className='form-text'>Contraseña:</label>
                <input type="password" id="password" name="password" className="inputs"/>
                
              
                <div className="boton">
                  <button className= "btn" onClick={()=>{setRutaActual("/home")}}>
                    Iniciar sesión
                  </button>
                </div>
                <div className="boton">
                  <button className= "btn2" onClick={()=>{setRutaActual("/registro")}}>
                    Registrarse
                  </button>
                </div>
                
              
        
          </div>
        </div>
        </>
      )
}
export default Login;