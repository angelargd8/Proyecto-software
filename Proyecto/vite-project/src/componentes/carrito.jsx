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

    const shoppingcart = [
        [1, 'pegatina.jpg', 'Pegatina Gemas Autoadhesivas','Descripcion', 12.00],
        [2, 'plumas.jpg', 'Plumas de Colores','Descripcion', 24.50],
        [3, 'rosasF.jpg', 'Mini Rosas de Foamy','Descripcion', 15.50],
        [4, 'ojosM.jpg', 'Ojitos Mobiles','Descripcion', 12.00]
      ];

    
    const navigate = useNavigate();

    const handleRegresar = () => {
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
                        <h1 className='txt'>imagen_p</h1>
                    </div>
                </div>
                <div className='middle'>
                    <div className="carrito">
                        <div className='product'>
                            <div className='vista'>
                                <img src="" />
                            </div>
                            <div className='info'> 
                                Corona <br/>
                                SixPack 500ml C/U <br/>
                                Q 100.00
                            </div>
                            <div className='nums'>
                                <div id='xd'>
                                    <div className='btn_sumar' onClick={restCant}> <b>-</b></div>
                                    <span className='cant'>{cantidad}</span>
                                    <div className="btn_restar" onClick={sumarCant}><b>+</b></div>
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