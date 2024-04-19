import {  useState } from 'react'
import './carrito.css'
import { useNavigate } from 'react-router-dom';

function Carrito(){
    const [cantidad, setCantidad] = useState(1);


    const [shoppingcart, setShoppingCart] = useState([
        { id: 1, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pegatinas_con_dibujos.jpg/1200px-Pegatinas_con_dibujos.jpg', nombre: 'Pegatina Gemas Autoadhesivas', descripcion: 'Descripcion', precio: 12.00, cantidad: 1 },
        { id: 2, imagen: 'https://m.media-amazon.com/images/I/71E345WsyuL._AC_UF894,1000_QL80_DpWeblab_.jpg', nombre: 'Plumas de Colores', descripcion: 'Descripcion', precio: 24.50, cantidad: 1 },
        { id: 3, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlWNMqqyTjfF99u89Lkkk8Y2fEj28X6yYWlhI1zPV1w&s', nombre: 'Mini Rosas de Foamy', descripcion: 'Descripcion', precio: 15.50, cantidad: 1 },
        { id: 4, imagen: 'https://walmartgt.vtexassets.com/arquivos/ids/244882/Ojos-Moviles-Pqt64-Colores-Merletto-1-46923.jpg?v=637800395116230000', nombre: 'Ojitos Mobiles', descripcion: 'Descripcion', precio: 12.00, cantidad: 1 },
        { id: 5, imagen: 'https://casabak.com/wp-content/uploads/2023/08/Cartulina.jpg', nombre: 'Cartulina De Colores', descripcion: 'Descripcion', precio: 5.00, cantidad: 1 },
        { id: 6, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDM0M5HopZSXDfc4zssZg0KzbMHCGe31AiyHb2XBqhg&s', nombre: 'Flores', descripcion: 'Descripcion', precio: 5.00, cantidad: 1 },
        { id: 7, imagen: 'https://arriola.com.gt/wp-content/uploads/2020/12/CUADE321.png', nombre: 'Cuadernos', descripcion: 'Descripcion', precio: 5.00, cantidad: 1 }
    ]);

    
    const navigate = useNavigate();

    const handleRegresar = () => {
        navigate("/home");
    };

    const ActCant = (id, nuevaCantidad) =>{
        setShoppingCart(shoppingcart.map(producto => producto.id === id ? { ...producto, cantidad: nuevaCantidad}: producto));
    };

    const envio = 15

    const Subtotal = shoppingcart.reduce((total, producto) => {
        const precio = producto.precio; 
        const cantidadProducto = producto.cantidad; 
        return total + (precio * cantidadProducto);
    }, 0);

    const Total = Subtotal + envio;


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
                    {shoppingcart.map(producto => (
                            <div className='product' key={producto.id}>
                                <div className='vista'>
                                    <img className='imgVista' src={producto.imagen} alt={producto.nombre} />
                                </div>
                                <div className='info'>
                                    <p className='textInfo'>{producto.nombre}</p>
                                    <p className='textInfo'>{producto.descripcion}</p>
                                    <p className='textInfo'>Q {producto.precio}</p>
                                </div>
                                <div className='nums'>
                                    <div id='xd'>
                                        <div className='btn_sumar' onClick={() => ActCant(producto.id, producto.cantidad - 1)}><b>-</b></div>
                                        <span className='cant'>{producto.cantidad}</span>
                                        <div className="btn_restar" onClick={() => ActCant(producto.id, producto.cantidad + 1)}><b>+</b></div>
                                    </div>
                                </div>
                            </div>
                        ))}
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