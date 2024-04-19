import {  useState, useEffect } from 'react'
import './carrito.css'
import { useNavigate } from 'react-router-dom';
import { useCarrito } from './carritoContext';

function Carrito(){
    const { carrito, agregarAlCarrito, eliminarDelCarrito } = useCarrito()
    


    // const [shoppingcart, setShoppingCart] = useState([
    //     { id: 1, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pegatinas_con_dibujos.jpg/1200px-Pegatinas_con_dibujos.jpg', nombre: 'Pegatina Gemas Autoadhesivas', descripcion: 'Descripcion', precio: 12.00, cantidad: 1 },
    //     { id: 2, imagen: 'https://m.media-amazon.com/images/I/71E345WsyuL._AC_UF894,1000_QL80_DpWeblab_.jpg', nombre: 'Plumas de Colores', descripcion: 'Descripcion', precio: 24.50, cantidad: 1 },
    //     { id: 3, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlWNMqqyTjfF99u89Lkkk8Y2fEj28X6yYWlhI1zPV1w&s', nombre: 'Mini Rosas de Foamy', descripcion: 'Descripcion', precio: 15.50, cantidad: 1 },
    //     { id: 4, imagen: 'https://walmartgt.vtexassets.com/arquivos/ids/244882/Ojos-Moviles-Pqt64-Colores-Merletto-1-46923.jpg?v=637800395116230000', nombre: 'Ojitos Mobiles', descripcion: 'Descripcion', precio: 12.00, cantidad: 1 },
    //     { id: 5, imagen: 'https://casabak.com/wp-content/uploads/2023/08/Cartulina.jpg', nombre: 'Cartulina De Colores', descripcion: 'Descripcion', precio: 5.00, cantidad: 1 },
    //     { id: 6, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDM0M5HopZSXDfc4zssZg0KzbMHCGe31AiyHb2XBqhg&s', nombre: 'Flores', descripcion: 'Descripcion', precio: 5.00, cantidad: 1 },
    //     { id: 7, imagen: 'https://arriola.com.gt/wp-content/uploads/2020/12/CUADE321.png', nombre: 'Cuadernos', descripcion: 'Descripcion', precio: 5.00, cantidad: 1 }
    // ]);

    
    const navigate = useNavigate();

    const handleRegresar = () => {
        navigate("/home");
    };

    const cambioCant = (producto, nuevaCantidad) =>{
        // const existingIndex = carrito.findIndex((item) => item.id === id)
        // if (existingIndex !== -1) {
        //     // Si el producto ya está en el carrito, actualiza su cantidad
        //     const updatedCarrito = [...carrito]
        //     updatedCarrito[existingIndex].cantidad = nuevaCantidad
        //     setCarrito(updatedCarrito)
        //     guardarCarritoStorage(updatedCarrito)
        // } else {
        //     // Si el producto no está en el carrito, agrégalo
        //     const nuevoCarrito = [...carrito, producto]
        //     setCarrito(nuevoCarrito)
        //     guardarCarritoStorage(nuevoCarrito)
        // }
        agregarAlCarrito(producto, nuevaCantidad)
    }

    useEffect(() => {
        console.log('Estado actual del carrito después de agregar producto:', carrito);
    }, [carrito]);

    const handleEliminar = (id) =>{
        eliminarDelCarrito(id)
    }

    const envio = 15.00

    const Subtotal = carrito.reduce((total, producto) => {
        const precioStr = producto.content;
        const precioNum = parseFloat(precioStr.slice(1))
        const cantidadProducto = producto.cantidad; 
        return total + (precioNum * cantidadProducto);
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
                    {carrito.map((producto) => (
                            <div className='product' key={producto.id}>
                                <div className='vista'>
                                    <img className='imgVista' src={producto.imagen} alt={producto.title} />
                                </div>
                                <div className='info'>
                                    <p className='textInfo'>{producto.title}</p>
                                    <p className='textInfo'>descripcion</p>
                                    <p className='textInfo'>{producto.content}</p>
                                </div>
                                <div className='nums'>
                                    <div id='xd'>
                                        <div className='btn_sumar' onClick={() => cambioCant(producto, producto.cantidad - 1)}><b>-</b></div>
                                        <span className='cant'>{producto.cantidad}</span>
                                        <div className="btn_restar" onClick={() => cambioCant(producto, producto.cantidad + 1)}><b>+</b></div>
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
                                
                                Q {Subtotal.toFixed(2)}<br/>
                                Q {envio.toFixed(2)} <br />                            
                                Q {Total.toFixed(2)}
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