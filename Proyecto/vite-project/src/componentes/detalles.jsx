import './detalles.css'
import  { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useCarrito } from './carritoContext'
import { useNavigate } from 'react-router-dom'


function Detalles(){
    const [cantidad, setCantidad] = useState(1)
    const location = useLocation()
    const { cardInfo } = location.state || {}
    const { carrito, agregarAlCarrito } = useCarrito()
    // const {limpiarCarrito} = useCarrito()
    const navigate = useNavigate()


    useEffect(() => {
        console.log('Estado actual del carrito después de agregar producto:', carrito)
    }, [carrito])

    if (!cardInfo) {
        return <div>Error: No se encontraron detalles para mostrar.</div>;
    }

    const {id, title, content, imagen} = cardInfo

    console.log(id)
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
        // limpiarCarrito()         // EN CASO DE EMERGENCIAS, BORRAR EL CARRITO
        const producto = {id, title, content, imagen, cantidad}
        agregarAlCarrito(producto, cantidad)
        console.log(`Agregado al carrito: ${cantidad} unidad(es)`)
    }

    function Regresar(){
        navigate(`/home`)
    }
    
    return(
        <div className="cuerpo">
            <button onClick={Regresar} className='boton'>
                    <img src='../assets/img/black_arrow.png' alt='return arrow'></img>
                    <h2>Regresar</h2>
            </button>
            <img src={imagen} className='imagen' alt='producto'/>
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