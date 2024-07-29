import './pago.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useNavigate } from 'react-router-dom';


function Pago(){
    
    const navigate = useNavigate();


    const handleRegresar = () => {
        navigate("/carrito");
    
    };

    const handleConfirmPago = () => {
        navigate("/confirmPago")
    }

    return (
        <>
            <div className='contenedor'>
                <div className="up">
                    <div className="regresar">
                        <div className="regresarbtn" onClick={() => handleRegresar()}> &lt; </div>
                    </div>
                    <div className='header'>
                        <div className="tituloDeskPago">
                        My Cart
                        </div>
                        <div className="tituloMovilPago">
                        Detalles de Pedido
                        </div>
                    </div>
                    <div className="opciones">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block', marginBottom: '5px'}}></span>
                            <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block', marginBottom: '5px'}}></span>
                            <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block'}}></span>
                        </button>
                    </div>
                </div>
                <div className="MidyBotmPago">
                    <div className="columnPasosPagar">
                        <div className="pasos">
                            <div className="nombrePaso " style={{backgroundColor: 'transparent', color: '#1B4965'}} onClick={() => handleRegresar()}> Direccion de Entrega </div>
                            <div className="separador">  -------------  </div>
                            <div className="nombrePaso" > Forma de Pago</div>
                            <div className="separador">  -------------  </div>
                            <div className="nombrePaso" style={{backgroundColor: 'transparent', color: '#1B4965'}} onClick={() => handleConfirmPago()}> Ultimo Paso</div>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className='middle'>
                        <div className="ParteVenta">
                            Detalles de Entrega
                            <div className="ubicacion"> 
                                <div className="fotoubi"></div>
                            </div>
                        </div>
                        <div className="PartePago">
                            Metodos de Pago
                        </div>
                        <div className="ParteExtras">
                            Extras
                        </div>
                    </div>
                    <div className="bottom">
                        <img className="logotipo" src="../src/assets/img/logo.png" style={{ width: 60, height: 70, marginLeft: '1%'}}  />
                        Picolin 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pago;