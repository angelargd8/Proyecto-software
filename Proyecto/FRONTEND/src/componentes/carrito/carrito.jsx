import React, { useState, useEffect } from "react";
import "./carrito.css";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "./carritoContext";
import MobileHdr from "./Components/MobileHdr";
import CarritoBtn from "./Components/CarritoBtn";
import InCartProduct from "./Components/InCartProduct";
import CarritoSteps from "./Components/CarritoSteps";
import DetallesPago from "./PagoComponents/detallesPago";
function Carrito() {
  const { carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } =
    useCarrito();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Puedes ajustar este valor según necesites
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handlePagar = () => {
    if (isMobile) {
      navigate("/pago");
    } else {
      setShowModal(true);
    }
  };

  // const handlePagar = () => {
  //   navigate("/pago");
  //   // let mensaje = "Saludos.\nMe gustaría hacer un pedido de:\n";
  //   // carrito.forEach((producto) => {
  //   //   mensaje += `${producto.quantity} -- ${producto.title}\n`;
  //   // });
  //   // var url = `https://wa.me/50237067222?text=${encodeURIComponent(mensaje)}`;
  //   // window.open(url, "_blank");
  // };

  const handleDirecc = () => {
    navigate("/carrito");
  };

  const handleResumen = () => {
    navigate("/resumen");
  };

  const Tarifa = carrito.length === 0 ? 0 : 5.0; //Temporal

  const calcularPrecioTotal = (cantidad, precios) => {
    precios = precios.sort((a, b) => a.quantity - b.quantity);
    const precioUnitario = precios[0].price;
    let precioFinal = 0;
    precios.forEach((precio) => {
      let cantidadProduct = precio.quantity;
      let precioProducto = precio.price * cantidadProduct;

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
      <div className="contenedorCarrito">
        <MobileHdr title={"My Cart"} lastPath={"/home"} />
        <div className="MidyBotm">
          <CarritoSteps setShowModal={setShowModal} />
          <div className="middle">
            <div className="carrito">
              {carrito.length === 0 ? (
                <h4 style={{ marginTop: 25, fontSize: "1.5rem" }}>
                  El carrito de compras está vacío.
                </h4>
              ) : (
                carrito.map((producto) => (
                  <InCartProduct key={producto.id} producto={producto} />
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
                  {carrito.length === 0 ? null : (
                    <>
                      Tarifa Servicio <br />
                    </>
                  )}
                  Total
                </div>
                <div className="ColumnNo">
                  Q {Subtotal.toFixed(2)}
                  {carrito.length === 0 ? (
                    <></>
                  ) : (
                    <>
                      <br />Q {Tarifa.toFixed(2)}
                    </>
                  )}
                  <br />Q {Total.toFixed(2)}
                </div>
              </div>
              <CarritoBtn
                text={"Pagar"}
                onClick={handlePagar}
                styles={{ backgroundColor: "#1f3350" }}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && !isMobile && (
        <div style={styles.modalOverlay}>
          <DetallesPago setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
}

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
};

export default Carrito;
