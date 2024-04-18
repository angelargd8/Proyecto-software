import './login.css'

function Login({setRutaActual}){
    return (
        <>
        <div className="login body">
          <div className="formulario">
              <h1>Inicia sesión</h1>
                <input type="email" id="email" name="email" placeholder="Correo Electrónico" className="inputs"/>
                
                <input type="password" id="password" name="password" className="inputs" placeholder="Contraseña"/>
                
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