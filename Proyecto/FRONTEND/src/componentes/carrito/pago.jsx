import "./pago.css";
import "bootstrap/dist/css/bootstrap.css";
import Carrusel from "./PagoComponents/carrusel";
import React, { useState, useEffect, useContext } from "react";
import MobileHdr from "./Components/MobileHdr";
import CarritoBtn from "./Components/CarritoBtn";
import CarritoSteps from "./Components/CarritoSteps";
import DropDown from "./PagoComponents/dropDown";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import { CarritoContext } from "./carritoContext";

function Pago() {
  const [ubicacion, setUbicacion] = useState("");
  const [receptor, setReceptor] = useState("");
  const [pagoType, setPagoType] = useState("");

  const navigate = useNavigate();
  const { carrito } = useContext(CarritoContext);

  useEffect(() => {
    if (carrito.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "¡El carrito está vacío, ¡Agrega algo a tu carrito!",
        showConfirmButton: true,
      }).then(() => {
        navigate("/carrito");
      });
    }
  }, [carrito, navigate]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      Swal.fire({
        icon: "info",
        title: "Lo siento :(",
        text: "Esta página no está disponible en versión desktop",
        confirmButtonText: "Aceptar",
      });
    }
  }, []);

  const handleNext = () => {
    if (ubicacion === "" || receptor === "" || pagoType === "") {
      Swal.fire({
        icon: "warning",
        title: "Necesitas llenar todos los campos antes de continuar.",
        confirmButtonText: "Aceptar",
      });
    } else {
      navigate("/resumen");
    }
  };

  const UBICACIONES = [
    { label: "Universidad del Valle de Guatemala", value: "uvg" },
    { label: "Casa", value: "casa" },
    { label: "Trabajo", value: "trabajo" },
    { label: "Agregar ubicación...", value: "NuevaUbicacion" },
  ];

  const RECEPTORES = [
    { label: "Kimberly Daniela Morales Ortega", value: "kim" },
    { label: "Enrique Fernando Echeverria Leal", value: "fer" },
    { label: "Diego Garcia del Valle", value: "diego" },
    { label: "Agregar receptor...", value: "NuevoReceptor" },
  ];

  const METODOS_PAGO = [
    { label: "Agregar tarjeta...", value: "NuevaTarjeta" },
    { label: "Efectivo", value: "efectivo" },
  ];

  return (
    <>
      <div className="contenedor-pago">
        <MobileHdr title={"Detalles de Pedido"} lastPath={"/carrito"} />
        <div className="MidyBotmPago">
          <CarritoSteps />

          <div className="middleP">
            <div className="ParteVenta">
              <h5
                style={{
                  position: "absolute",
                  bottom: "100%",
                }}
              >
                Detalles de Entrega
              </h5>
              <div className="ubicacion">
                <div className="fotoubi"></div>
                <DropDown
                  title="Selecciona ubicación"
                  options={UBICACIONES}
                  onSelect={setUbicacion}
                  innerContainerStyles={{ padding: 5, border: "none" }}
                  outerContainerStyles={{ marginLeft: 10 }}
                />
              </div>
              <div className="divisionLine"></div>
              <div className="receptor">
                <div className="fotoRec"></div>
                <DropDown
                  title="Selecciona receptor"
                  options={RECEPTORES}
                  onSelect={setReceptor}
                  innerContainerStyles={{ padding: 5, border: "none" }}
                  outerContainerStyles={{ marginLeft: 10 }}
                />
              </div>
            </div>
            <div className="PartePago">
              <h5 style={{ position: "absolute", bottom: "100%" }}>
                Metodos de Pago
              </h5>
              <div className="ubicacion">
                <div className="fotoTarj"></div>
                <DropDown
                  title="Metodo de Pago"
                  options={METODOS_PAGO}
                  onSelect={setPagoType}
                  innerContainerStyles={{ padding: 5, border: "none" }}
                  outerContainerStyles={{ marginLeft: 10 }}
                />
              </div>
            </div>
            <div className="ParteExtras">
              <h5
                style={{
                  position: "absolute",
                  bottom: "100%",
                  marginBottom: 20,
                }}
              >
                Extras
              </h5>
              <div className="carruselExtra">
                <Carrusel />
              </div>
            </div>

            <div className="mobileButtonCont">
              <CarritoBtn text={"SIGUIENTE"} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pago;
