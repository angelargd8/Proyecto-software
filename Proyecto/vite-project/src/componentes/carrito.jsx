import {  useState } from 'react'
import './carrito.css'
import { useNavigate } from 'react-router-dom';

function Carrito(){
    const [cantidad, setCantidad] = useState(1);

    const sumarCant = () => {
        setCantidad(cantidad+1);
    };

    const restCant = () => {
        if (cantidad >1) {
            setCantidad(cantidad-1);
        }
    };

    //navegacion
    const navigate = useNavigate();

    const handleRegresar = () => {
        // aqui va a ir lo de la autentificacion y todo eso
        navigate("/home");
    };

    return(
        <>
            <div className='contenedor'>
                <div className="up">
                    <div className='logo'>
                        <div className="pic"></div>
                        <div className="regresarbtn"></div>
                    </div>
                    <div id='contTitulo'>
                        <h1 className='txt'>Orson Library</h1>
                    </div>
                </div>
                <div className='middle'>
                    <div className="carrito">
                        <div className='product'>
                            <div className='vista'></div>
                            <div className='info'> 
                                Corona <br/>
                                SixPack 500ml C/U <br/>
                                Q 100.00
                            </div>
                            <div className='nums'>
                                <div id='xd'>
                                    <div className='btn_sumar' onClick={restCant}>-</div>
                                    <span className='cant'>{cantidad}</span>
                                    <div className="btn_restar" onClick={sumarCant}>+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="totales">
                        <textarea className='codigo' rows={1} placeholder='Codigo Promocional'></textarea>
                        <div className='rowDatos'>
                            <div className="columnCampo">
                                Subtotal <br/>
                                Envio <br/> 
                                Total
                            </div>
                            <div className="columnNo">
                                Q 100.00 <br/>
                                Q 10.00 <br/> 
                                Q 110.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <button className='pagobtn'> Pagar </button>
                    <button className='pagobtn' onClick={handleRegresar}> Regresar </button>
                </div>
            </div>
        </>
    )
}

export default Carrito