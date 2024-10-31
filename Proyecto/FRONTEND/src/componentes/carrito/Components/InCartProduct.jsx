import { useNavigate } from "react-router-dom";
import { useCarrito } from "../carritoContext";
import "./inCartProduct.css";
import { useEffect, useState } from "react";

function InCartProduct({ producto }) {
  const { carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } =
    useCarrito();
  const navigate = useNavigate();

  const [img, setImag] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      let url = import.meta.env.VITE_APIPORT_IMAGE + producto.image;
      // tests: 
      // var url = process.env.VITE_APIPORT_IMAGE + producto.image;
      const result = await fetch(url);
      setImag(result.url);
    };
    getImage();
  }, []);

  const cambioCant = (producto, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      eliminarDelCarrito(producto.id, producto.title);
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
            onClick={() => eliminarDelCarrito(producto.id, producto.title)}
          >
            x
          </div>
          <img id="imgVistaC" src={img} alt={producto.title} />
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
