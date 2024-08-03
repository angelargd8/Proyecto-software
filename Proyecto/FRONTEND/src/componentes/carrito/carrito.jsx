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
        navigate("/pago");
    }

    const handleDirecc = () => {
        navigate("/carrito")
    }

    useEffect(() => {
        console.log('Estado actual del carrito después de agregar producto:', carrito);
    }, [carrito]);

    const envio = 15.00 //Temporal

    const calcularPrecioTotal = (cantidad, precios) => {
        console.log('HOLAAA',precios)
        const precioDocena = precios[1][1] * 12
        const precioUnitario = precios[0][1]

        console.log(`Precios: ${precios}\n Precio Unitario: ${precioUnitario}\n PrecioDocena: ${precioDocena}`)
        if (cantidad >= 12) {
            const docenas = Math.floor(cantidad / 12)
            const extras = cantidad % 12
            return (docenas * precioDocena) + (extras * precioUnitario)
        } else {
            return cantidad * precioUnitario
        }
    }

    const Subtotal = carrito.reduce((total, producto) => {
        const precioFinal = calcularPrecioTotal(producto.quantity, producto.precios)
        return total + precioFinal
    }, 0)

    const Total = Subtotal + envio;

    return (
        <>
            <div className='contenedor'>
                <div className="up">
                    <div className="regresar">
                        <div className="regresarbtn" onClick={() => handleRegresar()}> &lt; </div>
                    </div>
                    <div className='header'>
                        <div className="titulo">
                        My Cart
                        </div>
                        <div className="midHeader"></div>
                        <div className="logoBox">
                            <img className="logotipo" src="../src/assets/img/logo.png" alt="" width="60" height="70"  />
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
                <div className="MidyBotm">
                    <div className="columnPasosPagar">
                        <div className="pasos">
                            <div className="nombrePaso" style={{fontSize: '1vw'}}onClick={() => handleDirecc()} > Direccion</div>
                            <div className="separador">  -------------  </div>
                            <div className="nombrePaso" style={{fontSize: '1vw', backgroundColor: 'transparent', color: '#1B4965'}} onClick={() => handlePagar()} > Forma de Pago</div>
                            <div className="separador">  -------------  </div>
                            <div className="nombrePaso" style={{fontSize: '1vw', backgroundColor: 'transparent', color: '#1B4965'}}> Ultimo Paso</div>
                        </div>
                        <div className="relleno"></div>
                    </div>
                    <div className='middle'>
                        <div className="carrito">
                            {carrito.length === 0 ? (
                                <h4 style={{marginTop: 25}}>El carrito de compras está vacío.</h4>
                            ) : (
                                carrito.map((producto) => (
                                    <div className='product' key={producto.id}>
                                        <div className='vista'>
                                            <div className="btn_eliminar" onClick={() => eliminarDelCarrito(producto.id)}>x</div>
                                            <img className='imgVista' src={producto.image} alt={producto.title} />
                                        </div>
                                        <div className='info'>
                                            <h3 className='textInfo'>{producto.title}</h3>
                                            <p className='textInfo'>{producto.content}</p>
                                        </div>
                                        <div className='nums'>
                                            <div id='xd'>
                                                {console.log(producto.quantity)}
                                                {console.log(producto.precios)}
                                                <div className='btn_sumar' onClick={() => cambioCant(producto, producto.quantity + 1)}><b>+</b></div>
                                                <span className='cant'>{producto.quantity}</span>
                                                <div className="btn_restar" onClick={() => cambioCant(producto, producto.quantity - 1)}><b>-</b></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="totales">
                            <textarea className="codigoC" rows={1} placeholder='Codigo Promocional'></textarea>
                            <div className='rowDatos'>
                                <div className="ColumnCampo">
                                    Subtotal <br/>
                                    Envio <br/> 
                                    Total
                                </div>
                                <div className="ColumnNo">
                                    Q {Subtotal.toFixed(2)}<br/>
                                    Q {envio.toFixed(2)} <br />                            
                                    Q {Total.toFixed(2)}
                                </div>
                            </div>
                            <button className='pagobtn' onClick={handlePagar}> Pagar </button>
                        </div>
                    </div>
                    <div className="Dbottom" style={{fontSize: '1.5vw'}}>
                        <img className="logotipo" src="../src/assets/img/logo.png" style={{ width: 60, height: 70, marginLeft: '1%', marginRight: '2%'}}  />
                        Picolin
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrito;