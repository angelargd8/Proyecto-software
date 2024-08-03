import './pago.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useNavigate } from 'react-router-dom';
import Carrusel from './carrusel';  


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
                        <div className="midHeader"></div>
                        <div className="logoBox">
                            <img  src="../src/assets/img/logo.png" style={{width: 60, height: 70, marginLeft: '1%', marginRight: '2%' }} />
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
                            <div className="nombrePaso " style={{fontSize: '1vw', backgroundColor: 'transparent', color: '#1B4965'}} onClick={() => handleRegresar()}> Direccion</div>
                            <div className="separador">  -------------  </div>
                            <div className="nombrePaso" style={{fontSize: '1vw', backgroundColor: '#1B4965', color: 'white'}}> Forma de Pago</div>
                            <div className="separador">  -------------  </div>
                            <div className="nombrePaso" style={{fontSize: '1vw', backgroundColor: 'transparent', color: '#1B4965'}} onClick={() => handleConfirmPago()}> Ultimo Paso</div>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className='middle'>
                        <div className="ParteVenta">
                            <h5 style={{position: 'absolute', top: '12%'}}> Detalles de Entrega</h5>
                            <div className="ubicacion"> 
                                <div className="fotoubi"></div>
                                <div className="nombreUbi">Universidad del Valle de Guatemala</div>
                            </div>
                            <div className="divisionLine"></div>
                            <div className="receptor">
                                <div className="fotoRec"></div>
                                <div className="nombreRec">Kimberly Daniela Morales Ortega</div>
                            </div>
                        </div>
                        <div className="PartePago">
                            <h5 style={{position: 'absolute', bottom: '60%'}}> Metodos de Pago</h5>
                            <div className="ubicacion"> 
                                <div className="fotoTarj"></div>
                                <div className="nombreUbi">Tarjeta de Credito/Debito</div>
                            </div>
                            <div className="divisionLine" style={{height: '1.8%'}}></div>
                            <div className="receptor">
                                <div className="fotoEfct"></div>
                                <div className="nombreRec">Efectivo</div>
                            </div>                            
                        </div>
                        <div className="ParteExtras">
                            <h5 style={{position: 'absolute', bottom: '37%'}}>Extras</h5>
                            <div className="carruselExtra">
                                <Carrusel></Carrusel>
                            </div>
                        </div>
                        <div className="BTNsiguiente" onClick={() => handleConfirmPago()}> SIGUIENTE </div>
                    </div>
                    <div className="bottom">
                        <img className="logotipo" src="../src/assets/img/logo.png" style={{ width: 60, height: 70, marginLeft: '1%', marginRight: '2%'}}  />
                        Picolin 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pago;