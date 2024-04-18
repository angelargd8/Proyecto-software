import './signup.css'

function SingUp({setRutaActual}){
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
                  <button className= "btn" onClick={()=>{setRutaActual("/home")}}>
                    Registrarse
                  </button>
                </div>
                <div className="boton">
                  <button className= "btn2" onClick={()=>{setRutaActual("/login")}}>
                    Ya tengo una cuenta
                  </button>
                </div>
        
          </div>
        </div>
        </>
      )
}
export default SingUp;