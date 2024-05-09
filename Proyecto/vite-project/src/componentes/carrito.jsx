import {  useState, useEffect } from 'react'
import './carrito.css'
import { useNavigate } from 'react-router-dom';
import { useCarrito } from './carritoContext';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Carrito(){
    const { carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } = useCarrito()

    const navigate = useNavigate();

    const handleRegresar = () => {
            navigate("/home");
        
    };

    const cambioCant = (producto, nuevaCantidad) =>{
        if (nuevaCantidad < 1){
            if(window.confirm("Se eliminara este producto del carrito, estas seguro de continuar?")){
                eliminarDelCarrito(producto.id)
            }
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

    const envio = 15.00 //Temporal

    const Subtotal = carrito.reduce((total, producto) => {
        const precioStr = producto.content;
        const precioNum = parseFloat(precioStr.slice(1))
        const cantidadProducto = producto.cantidad; 
        return total + (precioNum * cantidadProducto);
    }, 0);

    const Total = Subtotal + envio;

    return (
        <>
            <div className='contenedor'>
                <div className="up">
                    <div className="regresarbtn" onClick={() => handleRegresar()}> &lt; </div>
                    <div className='header'>
                        <div className="titulo">
                        My Cart
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block', marginBottom: '5px'}}></span>
                        <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block', marginBottom: '5px'}}></span>
                        <span style={{width: '30px', height: '3px', backgroundColor: 'black', display: 'block'}}></span>
                    </button>
                    
                </div>
                <div className="MidyBotm">

                    <div className='middle'>
                        <div className="carrito">
                            {carrito.length === 0 ? (
                                <h4>El carrito de compras está vacío.</h4>
                            ) : (
                                carrito.map((producto) => (
                                    <div className='product' key={producto.id}>
                                        <div className='vista'>
                                            <div className="btn_eliminar" onClick={() => eliminarDelCarrito(producto.id)}>x</div>
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
                                ))
                            )}
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrito;