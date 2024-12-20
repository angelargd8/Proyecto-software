import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useCarrito } from "../carritoContext";

function CarritoSteps({ setShowModal }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { ubicacion, receptor, pagoType, carrito } = useCarrito();

  const handleDirecc = () => {
    navigate("/carrito");
  };

  const handlePago = () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "Alerta",
        text: "El carrito está vacío, ¡Agrega algo a tu carrito!",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }

    if (isMobile) {
      navigate("/pago");
    } else {
      setShowModal(true);
    }
  };

  const handleResumen = () => {
    if (!ubicacion || !receptor || !pagoType) {
      Swal.fire({
        title: "Alerta",
        text: "Llena los datos de pago antes de continuar",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    } else {
      navigate("/resumen");
    }
  };

  const getBackColor = (pathname) => {
    if (location.pathname === pathname) {
      return "#1B4965";
    }
    return "transparent";
  };

  const getColor = (pathname) => {
    if (location.pathname === pathname) {
      return "white";
    }
    return "#1B4965";
  };

  if (isMobile) {
    return null;
  }

  return (
    <div style={styles.stepsContainer}>
      <div style={styles.steps}>
        <div
          style={{
            backgroundColor: getBackColor("/carrito"),
            color: getColor("/carrito"),
            ...styles.stepName,
          }}
          onClick={handleDirecc}
        >
          Articulos
        </div>
        <div> ------------- </div>
        <div
          style={{
            backgroundColor: getBackColor("/pago"),
            color: getColor("/pago"),
            ...styles.stepName,
          }}
          onClick={handlePago}
        >
          Detalles de Pago
        </div>
        <div> ------------- </div>
        <div
          style={{
            backgroundColor: getBackColor("/resumen"),
            color: getColor("/resumen"),
            ...styles.stepName,
          }}
          onClick={handleResumen}
        >
          Resumen Pedido
        </div>
      </div>
    </div>
  );
}

const styles = {
  stepsContainer: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "#f9f6ee",
    backgroundColor: "white",
    height: "10%",
    width: "100%",
  },
  steps: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    marginBottom: "1%",
  },
  stepName: {
    display: "flex",
    height: "65%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: 500,
    border: "2px solid #1b4965",
    borderRadius: "20px",
    cursor: "pointer",
  },
};
export default CarritoSteps;
