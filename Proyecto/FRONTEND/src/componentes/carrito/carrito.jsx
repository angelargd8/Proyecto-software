import { useState, useEffect } from "react";
import "./carrito.css";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "./carritoContext";
import MobileHdr from "./Components/MobileHdr";

function Carrito() {
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

  const handlePagar = () => {
    navigate("/pago");
    // let mensaje = "Saludos.\nMe gustaría hacer un pedido de:\n";
    // carrito.forEach((producto) => {
    //   mensaje += `${producto.quantity} -- ${producto.title}\n`;
    // });
    // var url = `https://wa.me/50237067222?text=${encodeURIComponent(mensaje)}`;
    // window.open(url, '_blank');
  };

  const handleDirecc = () => {
    navigate("/carrito");
  };

  useEffect(() => {
    console.log(
      "Estado actual del carrito después de agregar producto:",
      carrito
    );
  }, [carrito]);

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
    <>
      <div className="contenedor">
        <MobileHdr />
        <div className="MidyBotm">
          <div className="columnPasosPagar">
            <div className="pasos">
              <div className="nombrePaso" onClick={() => handleDirecc()}>
                {" "}
                Direccion
              </div>
              <div className="separador"> ------------- </div>
              <div
                className="nombrePaso"
                style={{ backgroundColor: "transparent", color: "#1B4965" }}
                onClick={() => handlePagar()}
              >
                {" "}
                Forma de Pago
              </div>
              <div className="separador"> ------------- </div>
              <div
                className="nombrePaso"
                style={{
                  fontSize: "1vw",
                  backgroundColor: "transparent",
                  color: "#1B4965",
                }}
              >
                {" "}
                Ultimo Paso
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="carrito">
              {carrito.length === 0 ? (
                <h4 style={{ marginTop: 25, fontSize: "1.5rem" }}>
                  El carrito de compras está vacío.
                </h4>
              ) : (
                carrito.map((producto) => (
                  <div className="product" key={producto.id}>
                    <div className="vista">
                      <div
                        className="btn_eliminar"
                        onClick={() => eliminarDelCarrito(producto.id)}
                      >
                        x
                      </div>
                      <img
                        id="imgVistaC"
                        src={producto.image}
                        alt={producto.title}
                      />
                    </div>
                    <div className="info">
                      <h3 className="textInfo">{producto.title}</h3>
                      <p className="textInfo">{producto.content}</p>
                    </div>
                    <div className="nums">
                      <div id="xd">
                        {console.log(producto.quantity)}
                        {console.log(producto.precios)}
                        <div
                          className="btn_sumar"
                          onClick={() =>
                            cambioCant(producto, producto.quantity - 1)
                          }
                        >
                          <b>-</b>
                        </div>
                        <span className="cant">{producto.quantity}</span>
                        <div
                          className="btn_restar"
                          onClick={() =>
                            cambioCant(producto, producto.quantity + 1)
                          }
                        >
                          <b>+</b>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="totales">
              <textarea
                className="codigoC"
                rows={1}
                placeholder="Codigo Promocional"
              ></textarea>
              <div className="rowDatos">
                <div className="ColumnCampo">
                  Subtotal <br />
                  Tarifa Servicio <br />
                  Total
                </div>
                <div className="ColumnNo">
                  Q {Subtotal.toFixed(2)}
                  <br />Q {Tarifa.toFixed(2)}
                  <br />Q {Total.toFixed(2)}
                </div>
              </div>
              <button className="pagobtn" onClick={handlePagar}>
                {" "}
                Pagar{" "}
              </button>
            </div>
          </div>
          <div className="Dbottom" style={{ fontSize: "1.5vw" }}>
            <img
              className="logotipo"
              src="../src/assets/img/logo.png"
              style={{
                width: 60,
                height: 70,
                marginLeft: "1%",
                marginRight: "2%",
              }}
            />
            Picolin
          </div>
        </div>
      </div>
    </>
  );
}

export default Carrito;
