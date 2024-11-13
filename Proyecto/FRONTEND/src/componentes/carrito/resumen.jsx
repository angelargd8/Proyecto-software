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

  const handlePago = () => {
    navigate("/pago");
  };

  const handleTicketButton = () => {
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
            text={"Aceptar"}
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
