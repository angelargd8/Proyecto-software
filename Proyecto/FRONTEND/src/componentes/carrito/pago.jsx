import "./pago.css";
import "bootstrap/dist/css/bootstrap.css";
import Carrusel from "./PagoComponents/carrusel";
import React, { useState } from "react";
import MobileHdr from "./Components/MobileHdr";
import CarritoBtn from "./Components/CarritoBtn";
import CarritoSteps from "./Components/CarritoSteps";
import DropDown from "./PagoComponents/dropDown";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

function Pago() {
  const [ubicacion, setUbicacion] = useState("");
  const [receptor, setReceptor] = useState("");
  const [pagoType, setPagoType] = useState("");

  const navigate = useNavigate();

  const handleNext = () => {
    if (ubicacion === "" || receptor === "" || pagoType === "") {
      Swal.fire({
        icon: "warning",
        title: "Necesitas llenar todos los campos antes de continuar.",
        showConfirmButton: true,
      });
    } else {
      navigate("/resumen");
    }
  };

  const UBICACIONES = [
    { label: "Universidad del Valle de Guatemala", value: "uvg" },
    { label: "Casa", value: "casa" },
    { label: "Trabajo", value: "trabajo" },
    { label: "Otro...", value: "otro" },
  ];

  const RECEPTORES = [
    { label: "Kimberly Daniela Morales Ortega", value: "kim" },
    { label: "Enrique Fernando Echeverria Leal", value: "fer" },
    { label: "Diego Garcia del Valle", value: "diego" },
    { label: "Otro...", value: "otro" },
  ];

  const METODOS_PAGO = [
    { label: "Tarjeta de Crédito/Débito", value: "tarjeta" },
    { label: "Efectivo", value: "efectivo" },
    { label: "Depósito Bancario", value: "deposito" },
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
