import './detalles.css'
import React, { useState } from 'react'

function Detalles({setRutaActual}){
    const [cantidad, setCantidad] = useState(1)

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

    const agregarAlCarrito = () => {
        console.log(`Agregado al carrito: ${cantidad} unidad(es)`)
    }
    
    return(
        <div className="cuerpo">
            <img src='https://grupotucan.com/media/catalog/product/cache/1/image/530x/040ec09b1e35df139433887a97daa66f/p/a/papel-ecologico-coloes-reales.-01.png' alt='producto'/>
            <h2>HOJAS DE PAPEL</h2>
            <h3>Precio: Q50.00</h3>
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
                    <button className="agregar-carrito" onClick={agregarAlCarrito}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}
export default Detalles;