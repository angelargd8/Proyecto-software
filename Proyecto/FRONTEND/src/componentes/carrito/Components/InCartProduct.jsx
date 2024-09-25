import { useNavigate } from "react-router-dom";
import { useCarrito } from "../carritoContext";
import "./inCartProduct.css";

function InCartProduct({ producto }) {
  const { carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } =
    useCarrito();
  const navigate = useNavigate();

  const cambioCant = (producto, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      if (
        window.confirm(
          "Se eliminara este producto del carrito, estas seguro de continuar?"
        )
      ) {
        eliminarDelCarrito(producto.id);
      }
    } else {
      agregarAlCarrito(producto, nuevaCantidad);
    }
  };
  const Tarifa = 5.0; //Temporal

  const calcularPrecioTotal = (cantidad, precios) => {
    precios = precios.sort((a, b) => a[2] - b[2]);
    const precioUnitario = precios[0][1];
    let precioFinal = 0;
    precios.forEach((precio) => {
      let cantidadProduct = precio[2];
      let precioProducto = precio[1] * cantidadProduct;

      if (cantidad >= cantidadProduct) {
        let docenas = Math.floor(cantidad / cantidadProduct);
        let extras = cantidad % cantidadProduct;
        precioFinal = docenas * precioProducto + extras * precioUnitario;
      }
    });

    return precioFinal;
  };

  const Subtotal = carrito.reduce((total, producto) => {
    if (producto.precios == undefined) return total;
    const precioFinal = calcularPrecioTotal(
      producto.quantity,
      producto.precios
    );
    return total + precioFinal;
  }, 0);

  const Total = Subtotal + Tarifa;

  return (
    <div className="containerINP">
      <div className="productCar" key={producto.id}>
        <div className="vista">
          <div
            className="btn_eliminarCar"
            onClick={() => eliminarDelCarrito(producto.id)}
          >
            x
          </div>
          <img id="imgVistaC" src={producto.image} alt={producto.title} />
        </div>
        <div className="info">
          <h3 className="textInfo">{producto.title}</h3>
          <p className="textInfo">{producto.content}</p>
        </div>
        <div className="nums">
          <div id="xd">
            <div
              className="btn_sumar"
              onClick={() => cambioCant(producto, producto.quantity - 1)}
            >
              <b>-</b>
            </div>
            <span className="cant">{producto.quantity}</span>
            <div
              className="btn_restar"
              onClick={() => cambioCant(producto, producto.quantity + 1)}
            >
              <b>+</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InCartProduct;
