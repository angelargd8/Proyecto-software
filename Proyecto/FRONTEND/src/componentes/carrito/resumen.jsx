import { Navigate, useNavigate } from "react-router-dom";
import MobileHdr from "./Components/MobileHdr";
import CarritoSteps from "./Components/CarritoSteps";
import React, { useState } from "react";
import DetallesPago from "./PagoComponents/detallesPago";
import { useContext } from "react";
import { CarritoContext } from "./carritoContext";

const Resumen = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { ubicacion, receptor, pagoType } = useContext(CarritoContext);

  const handlePago = () => {
    navigate("/pago");
  };

  const handleDirecc = () => {
    navigate("/carrito");
  };

  return (
    <>
      {!isMobile && (
        <div style={styles.contenedorGeneral}>
          <MobileHdr title={"Resumen de Pedido"} lastPath={"/pago"} />
          <CarritoSteps setShowModal={setShowModal} />
          <div className="content">
            <div style={styles.infoRow}>
              <span style={styles.label}>Ubicación:</span>
              <span style={styles.value}>{ubicacion}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.label}>Receptor:</span>
              <span style={styles.value}>{receptor}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.label}>Tipo de Pago:</span>
              <span style={styles.value}>{pagoType}</span>
            </div>
          </div>
        </div>
      )}

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
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
    marginBottom: "10px",
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    marginLeft: "20px",
  },
};

export default Resumen;
