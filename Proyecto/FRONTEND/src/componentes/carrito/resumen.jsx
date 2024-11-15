import { useNavigate } from "react-router-dom";
import MobileHdr from "./Components/MobileHdr";
import CarritoSteps from "./Components/CarritoSteps";
import React, { useState } from "react";
import DetallesPago from "./PagoComponents/detallesPago";
import { useContext } from "react";
import { CarritoContext } from "./carritoContext";
import FinalTicket from "./resumenComponents/finalTicket";
import CarritoButton from "./Components/CarritoBtn";
import Swal from "sweetalert2";

const Resumen = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isMobile] = useState(window.innerWidth < 768);
  const {
    ubicacion,
    receptor,
    pagoType,
    agregarTicket,
    limpiarTicket,
    limpiarCarrito,
    tarjetaTemporal,
    tarjetasGuardadas,
    carrito,
  } = useContext(CarritoContext);

  React.useEffect(() => {
    if (carrito.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "¡Espera!",
        text: "¡El carrito está vacío, ¡Agrega algo a tu carrito!",
        showConfirmButton: true,
      }).then(() => {
        navigate("/carrito");
      });
    }
    if (ubicacion === "" || receptor === "" || pagoType === "") {
      Swal.fire({
        icon: "warning",
        title: "¡Espera!",
        text: "¡Necesitas llenar todos los datos de pago antes de continuar!",
        showConfirmButton: true,
      }).then(() => {
        navigate("/carrito");
      });
    }
  }, [carrito, navigate]);

  // Cálculo del total
  const precioXProducto = (cantidad, precios) => {
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

  const subTotal = carrito.reduce(
    (acc, producto) =>
      acc + precioXProducto(producto.quantity, producto.precios),
    0
  );

  const Tarifa = 5.0; // Tarifa de servicio
  const total = subTotal + Tarifa; // Total con tarifa

  const handlePago = () => {
    navigate("/pago");
  };

  const realizarCobro = async (tarjeta, total) => {
    try {
      const response = await fetch("http://localhost:4000/api/validate-card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: tarjeta.token,  // El token que generaste con Stripe en el frontend
          amount: total,         // El monto total que deseas cobrar
        }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        return "Cobro realizado exitosamente";
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Error realizando el cobro:", error);
      throw new Error(error.message || "Error al realizar el cobro");
    }
  };

  const handleTicketButton = async () => {
    const tarjeta =
      tarjetaTemporal ||
      tarjetasGuardadas.find((tarjeta) => tarjeta.token === pagoType);

    if (!tarjeta) {
      Swal.fire({
        title: "Error",
        text: "No se encontró una tarjeta para realizar el pago.",
        icon: "error",
      });
      return;
    }

    // Mostrar el alert de que estamos realizando el cobro
    Swal.fire({
      title: "Realizando cobro",
      text: "Por favor, espere...",
      icon: "info",
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const mensaje = await realizarCobro(tarjeta, total);
      Swal.fire({
        title: "¡Éxito!",
        text: "¡Se ha agregado tu pedido!",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        agregarTicket();
        limpiarTicket();
        limpiarCarrito();
        navigate("/home");

        let mensaje = "Saludos.\nMe gustaría hacer un pedido de:\n";
        carrito.forEach((producto) => {
          mensaje += `${producto.quantity} -- ${producto.title}\n`;
        });
        var url = `https://wa.me/50237067222?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleDirecc = () => {
    if (setShowModal) {
      if (ubicacion === "" || receptor === "" || pagoType === "") {
        Swal.fire({
          icon: "warning",
          title: "Necesitas llenar todos los campos antes de continuar.",
          showConfirmButton: true,
        });
      } else {
        setShowModal(false);
        navigate("/pago");
      }
    }
  };

  return (
    <>
      <div style={styles.contenedorGeneral}>
        <MobileHdr title={"Resumen de Pedido"} onClick={handleDirecc} />
        <CarritoSteps setShowModal={setShowModal} />
        <div style={styles.content}>
          <FinalTicket />
          <CarritoButton
            onClick={handleTicketButton}
            styles={{
              height: "10%",
              width: isMobile ? "80%" : "28%",
              marginTop: 20,
            }}
            text={"Confirmar Pago"}
          />
        </div>
      </div>
      {showModal && !isMobile && (
        <div style={styles.modalOverlay}>
          <DetallesPago setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
};

const styles = {
  contenedorGeneral: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
  },
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

export default Resumen;
