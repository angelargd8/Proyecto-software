import {  useState, useEffect } from 'react'
import './carrito.css'
import { useNavigate } from 'react-router-dom';
import { useCarrito } from './carritoContext';

function Carrito(){
    const { carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } = useCarrito()

    const navigate = useNavigate();

    const handleRegresar = () => {
        if (window.confirm("Se limpiara el carrito de compras, estas seguro de continuar?")) {
            limpiarCarrito()
            navigate("/home");
        }
    };

    const cambioCant = (producto, nuevaCantidad) =>{
        if (nuevaCantidad < 1){
            eliminarDelCarrito(producto.id)
        }else{
            agregarAlCarrito(producto, nuevaCantidad)
        }
    }

    const handlePagar = () => {
        {alert('Se realizo la compra!')}
        navigate("/home");
    }

    useEffect(() => {
        console.log('Estado actual del carrito después de agregar producto:', carrito);
    }, [carrito]);

    const handleEliminar = (id) =>{
        eliminarDelCarrito(id)
    }

    const envio = 15.00 //Temporal

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
                    <div className=''>
                        <div className="pic"></div>
                        <div className="regresarbtn"></div>
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
                    <button className='pagobtn' onClick={handlePagar}> Pagar </button>
                    <button className='pagobtn' onClick={handleRegresar}> Cancelar </button>
                </div>
            </div>
        </>
    )
}
export default Carrito