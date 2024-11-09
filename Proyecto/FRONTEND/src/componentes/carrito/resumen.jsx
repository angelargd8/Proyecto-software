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
      {!isMobile && (
        <div style={styles.contenedorGeneral}>
          <MobileHdr title={"Resumen de Pedido"} onClick={handleDirecc} />
          <CarritoSteps setShowModal={setShowModal} />
          <div style={styles.content}>
            <div style={styles.ticket}>
              <div style={styles.infoRow}>
                <span style={styles.label}>Pedido ID:</span>
                <span style={styles.value}>001</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.label}>Ubicación:</span>
                <span style={styles.value}>
                  {ubicacion ? ubicacion : "No seleccionado"}
                </span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.label}>Receptor:</span>
                <span style={styles.value}>
                  {receptor ? receptor : "No seleccionado"}
                </span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.label}>Tipo de Pago:</span>
                <span style={styles.value}>
                  {pagoType ? pagoType : "No seleccionado"}
                </span>
              </div>
              <div style={{ ...styles.infoRow, borderTop: "2px solid black" }}>
                <span style={styles.label}>Total a pagar:</span>
                <span style={styles.value}>$100</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div style={mobileStyles.contenedorGeneral}>
          <MobileHdr title={"Resumen de Pedido"} onClick={handleDirecc} />
          <div className="mobile-resumen-content">
            <div className="mobile-resumen-info">
              <p>Ubicación: {ubicacion}</p>
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

const mobileStyles = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  alignItems: "center",
  justifyContent: "center",
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
  },
  ticket: {
    minWidth: "25%",
    backgroundColor: "#1b496543",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 20,
    borderRadius: 20,
    borderBottom: "5px solid #1b4965",
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
    marginBottom: "10px",
  },
  label: {
    fontWeight: "bold",
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    minWidth: 120,
    color: "#1b4965",
  },
  value: {
    marginLeft: "20px",
    multiline: false,
    minWidth: 250,
    textAlign: "right",
    color: "#1b4965",
  },
};

export default Resumen;
