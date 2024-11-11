import { useNavigate } from "react-router-dom";
import MobileHdr from "./Components/MobileHdr";
import CarritoSteps from "./Components/CarritoSteps";
import React, { useState } from "react";
import DetallesPago from "./PagoComponents/detallesPago";
import { useContext } from "react";
import { CarritoContext } from "./carritoContext";
import FinalTicket from "./resumenComponents/finalTicket";

const Resumen = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isMobile] = useState(window.innerWidth < 768);
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
            <FinalTicket />
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
