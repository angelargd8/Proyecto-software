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
        [1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pegatinas_con_dibujos.jpg/1200px-Pegatinas_con_dibujos.jpg', 'Pegatina Gemas Autoadhesivas','Descripcion', 12.00],
        [2, 'https://m.media-amazon.com/images/I/71E345WsyuL._AC_UF894,1000_QL80_DpWeblab_.jpg', 'Plumas de Colores','Descripcion', 24.50],
        [3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlWNMqqyTjfF99u89Lkkk8Y2fEj28X6yYWlhI1zPV1w&s', 'Mini Rosas de Foamy','Descripcion', 15.50],
        [4, 'https://walmartgt.vtexassets.com/arquivos/ids/244882/Ojos-Moviles-Pqt64-Colores-Merletto-1-46923.jpg?v=637800395116230000', 'Ojitos Mobiles','Descripcion', 12.00],
        [5, 'https://casabak.com/wp-content/uploads/2023/08/Cartulina.jpg', 'Cartulina De Colores', 'Descripcion', 5.00],
        [6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDM0M5HopZSXDfc4zssZg0KzbMHCGe31AiyHb2XBqhg&s', 'Flores', 'Descripcion', 5.00],
        [7, 'https://arriola.com.gt/wp-content/uploads/2020/12/CUADE321.png', 'Cuadernos ', 'Descripcion', 5.00]
      ];

    
    const navigate = useNavigate();

    const handleRegresar = () => {
        navigate("/home");
    };

    const envio = 15

    const Subtotal = shoppingcart.reduce((total, producto) => total + (producto[4] * cantidad), 0);
    const Total = Subtotal + envio;


    function generarProductos() {
        return shoppingcart.map(producto => (
            <div className='product' key={producto[0]}> 
                <div className='vista'>
                    <img className = 'imgVista'src={producto[1]} />
                </div>
                <div className='info'>
                    <p className='textInfo'>{producto[2]}</p> 
                    <p className='textInfo'>{producto[3]}</p> 
                    <p className='textInfo'>Q {producto[4]}</p> 
                </div>
                <div className='nums'>
                    <div id='xd'>
                        <div className='btn_sumar' onClick={restCant}><b>-</b></div>
                        <span className='cant'>{cantidad}</span>
                        <div className="btn_restar" onClick={sumarCant}><b>+</b></div>
                    </div>
                </div>
            </div>
        ));
      }
    return(
        <>
            <div className='contenedor'>
                <div className="up">
                    <div className='logo'>
                        <div className="pic"></div>
                        <div className="regresarbtn"></div>
                    </div>
                    <div id='contTitulo'>
                        <h1 className='txt'>Orsons Library</h1>
                    </div>
                </div>
                <div className='middle'>
                    <div className="carrito">
                        {generarProductos()}
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
                                
                                Q {Subtotal}<br/>
                                Q {envio} <br />                            
                                Q {Total}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <button className='pagobtn'> Pagar </button>
                    <button className='pagobtn' onClick={handleRegresar}> Cancelar </button>
                </div>
            </div>
        </>
    )
}
export default Carrito