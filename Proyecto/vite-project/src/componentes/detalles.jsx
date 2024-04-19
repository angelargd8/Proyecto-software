import './detalles.css'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useCarrito } from './carritoContext'

function Detalles(){
    const [cantidad, setCantidad] = useState(1)
    const location = useLocation()
    const { cardInfo } = location.state || {}
    const { agregarAlCarrito } = useCarrito()

    if (!cardInfo) {
        return <div>Error: No se encontraron detalles para mostrar.</div>;
    }

    const {title, content, imagen} = cardInfo

    const restarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    const sumarCantidad = () => {
        setCantidad(cantidad + 1)
    }

    const handleCantidadChange = (event) => {
        const newCantidad = parseInt(event.target.value)
        if (!isNaN(newCantidad) && newCantidad >= 1) {
            setCantidad(newCantidad)
        }
    }

    const handleAgregarAlCarrito = () => {
        const producto = {title, content, imagen, cantidad}
        agregarAlCarrito(producto)
        console.log(`Agregado al carrito: ${cantidad} unidad(es)`)
    }
    
    return(
        <div className="cuerpo">
            <img src={imagen} alt='producto'/>
            <h2>{title}</h2>
            <h3>Precio: {content}</h3>
            <p>No incluye precio de envío</p>
            <h5 className='titulos'>Cantidad:</h5>
            <div className="detalle-cantidad">
                <div className="control-cantidad">
                    <button onClick={restarCantidad}>-</button>
                    <input
                        type="number"
                        value={cantidad}
                        onChange={handleCantidadChange}
                        min="1"
                        className="num-input"
                    />
                    <button onClick={sumarCantidad}>+</button>
                    <button className="agregar-carrito" onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}
export default Detalles;