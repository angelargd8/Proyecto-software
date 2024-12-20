import CarritoBtn from "../Components/CarritoBtn";
import DropDown from "./dropDown";
import Carrusel from "./carrusel";
import React, { useState } from "react";
import iconoUbicacion from "../../../assets/img/FotoUbi.png";
import iconoUsuario from "../../../assets/img/FotoReceptor.png";
import iconoPago from "../../../assets/img/FotoEfectivo.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CarritoContext } from "../carritoContext";
import Modal from "react-modal";
import AgregarTarjeta from "./agregarTarjeta";

const OPCIONES = {
  UBICACIONES: [
    {
      label: "Universidad del Valle de Guatemala",
      value: "Universidad del Valle de Guatemala",
    },
    { label: "Casa", value: "Casa" },
    { label: "Trabajo", value: "Trabajo" },
    { label: "Agregar ubicación...", value: "NuevaUbicacion" },
  ],
  USUARIOS: [
    {
      label: "Kimberly Daniela Morales Ortega",
      value: "Kimberly Daniela Morales Ortega",
    },
    {
      label: "Enrique Fernando Echeverria Leal",
      value: "Enrique Fernando Echeverria Leal",
    },
    { label: "Diego Garcia del Valle", value: "Diego Garcia del Valle" },
    { label: "Agregar receptor...", value: "NuevoReceptor" },
  ],
  METODOS_PAGO: [
    { label: "Efectivo", value: "efectivo" },
    { label: "Agregar tarjeta...", value: "NuevaTarjeta" },
  ],
};

const bounceAnimation = `
  @keyframes bounceIn {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Seccion = ({ titulo, children, styles }) => (
  <div style={styles.section}>
    <h5 style={styles.sectionTitle}>{titulo}</h5>
    <div style={styles.infoContainer}>
      {React.Children.map(children, (child, index) => (
        <div style={styles.dropdownContainer}>
          {child.type === DropDown && (
            <div style={styles.iconContainer}>
              <img
                src={
                  titulo === "Detalles de Entrega"
                    ? index === 0
                      ? iconoUbicacion
                      : iconoUsuario
                    : iconoPago
                }
                alt="icono"
                style={styles.icon}
              />
            </div>
          )}
          {child}
        </div>
      ))}
    </div>
  </div>
);

function DetallesPago({ setShowModal }) {
  const {
    ubicacion,
    setUbicacion,
    receptor,
    setReceptor,
    pagoType,
    setPagoType,
    tarjetasGuardadas,
    tarjetaTemporal,
  } = useContext(CarritoContext);

  const [mostrarModal, setMostrarModal] = useState(false);

  console.warn("tarjetasGuardadas", tarjetasGuardadas);

  const navigate = useNavigate();
  const handleClick = () => {
    if (setShowModal) {
      if (ubicacion === "" || receptor === "" || pagoType === "") {
        Swal.fire({
          icon: "warning",
          title: "Necesitas llenar todos los campos antes de continuar.",
          showConfirmButton: true,
        });
      } else {
        setShowModal(false);
        navigate("/resumen");
      }
    }
  };

  const opcionesMetodosPago = [
    ...tarjetasGuardadas.map((tarjeta) => {
      return {
        label: `**** **** **** ${tarjeta.last4} (${tarjeta.brand})`,
        value: tarjeta.token,
      };
    }),

    ...(tarjetaTemporal ? [{
      label: `**** **** **** ${tarjetaTemporal.last4} (${tarjetaTemporal.brand})`,
      value: tarjetaTemporal.token,
    }] : []),

    ...OPCIONES.METODOS_PAGO,
  ];

  const handleSelectPagoType = (value) => {
    setPagoType(value);
    if (value === "NuevaTarjeta") {
      setMostrarModal(true);
    }
  };

  return (
    <>
      <style>{bounceAnimation}</style>
      <div style={styles.contenedorGeneral}>
        <div style={styles.closeButton} onClick={() => setShowModal(false)}>
          X
        </div>
        <div style={styles.header}>Detalles de Pago</div>
        <div style={styles.content}>
          <Seccion titulo="Detalles de Entrega" styles={styles}>
            <DropDown
              title="Seleccionar ubicación"
              options={OPCIONES.UBICACIONES}
              onSelect={setUbicacion}
              selectedValue={ubicacion}
            />
            <div style={styles.divider} />
            <DropDown
              title="Seleccionar receptor"
              options={OPCIONES.USUARIOS}
              onSelect={setReceptor}
              selectedValue={receptor}
            />
          </Seccion>

          <Seccion titulo="Métodos de Pago" styles={styles}>
            <DropDown
              title="Seleccionar método de pago"
              options={opcionesMetodosPago}
              onSelect={handleSelectPagoType}
              selectedValue={pagoType}
            />
          </Seccion>

          <Seccion titulo="Extras" styles={styles}>
            <Carrusel />
          </Seccion>

          <div>
            <CarritoBtn
              text="SIGUIENTE"
              onClick={() => handleClick()}
              styles={styles.buttonStyles}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={mostrarModal}
        style={{
          content: {
            display: "flex",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          },
        }}
        onRequestClose={() => setMostrarModal(false)}
      >
        <AgregarTarjeta 
          onClose={() => setMostrarModal(false)} 
          setPagoType={setPagoType} 
        />
      </Modal>
    </>
  );
}
const styles = {
  contenedorGeneral: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    width: "30%",
    height: "90%",
    borderRadius: "20px",
    border: "4px solid #1b4965",
    animation: "bounceIn 0.6s ease-in-out",
  },
  header: {
    backgroundColor: "#1b4965",
    width: "100%",
    height: "10%",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#a2a19b52",
    width: "100%",
    height: "90%",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    overflowY: "scroll",
  },
  section: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    color: "#1b4965",
    marginBottom: "15px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "15px",
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },
  infoText: {
    color: "#1b4965",
    fontSize: "14px",
  },
  divider: {
    width: "100%",
    height: "2px",
    backgroundColor: "#1b4965",
    margin: "5px auto",
  },
  buttonStyles: {
    width: "100%",
    height: "60%",
  },
  parteExtras: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
  carruselExtra: {
    display: "flex",
    flexDirection: "column",
    height: "150px",
    width: "100%",
    transformStyle: "preserve-3d",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 0,
  },
  dropdownContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    width: "85%",
  },
  iconContainer: {
    minWidth: "40px",
    height: "40px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "25px",
    height: "25px",
    objectFit: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 5,
    color: "white",
    fontSize: "24px",
    height: "30px",
    width: "30px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1001,
  },
};

export default DetallesPago;
