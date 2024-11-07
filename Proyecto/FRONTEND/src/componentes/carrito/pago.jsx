import "./pago.css";
import "bootstrap/dist/css/bootstrap.css";
import Carrusel from "./PagoComponents/carrusel";
import React, { useState, useEffect } from "react";
import MobileHdr from "./Components/MobileHdr";
import CarritoBtn from "./Components/CarritoBtn";
import CarritoSteps from "./Components/CarritoSteps";
import DetallesPago from "./PagoComponents/detallesPago";
function Pago() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <>
      <div className="contenedor-pago">
        <MobileHdr title={"Detalles de Pedido"} lastPath={"/carrito"} />
        {!isMobile && <DetallesPago />}
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
                {" "}
                Detalles de Entrega
              </h5>
              <div className="ubicacion">
                <div className="fotoubi"></div>
                <div className="nombreUbi">
                  Universidad del Valle de Guatemala
                </div>
              </div>
              <div className="divisionLine"></div>
              <div className="receptor">
                <div className="fotoRec"></div>
                <div className="nombreRec">Kimberly Daniela Morales Ortega</div>
              </div>
            </div>
            <div className="PartePago">
              <h5 style={{ position: "absolute", bottom: "100%" }}>
                {" "}
                Metodos de Pago
              </h5>
              <div className="ubicacion">
                <div className="fotoTarj"></div>
                <div className="nombreUbi">Tarjeta de Credito/Debito</div>
              </div>
              <div className="divisionLine" style={{ height: "1.8%" }}></div>
              <div className="receptor">
                <div className="fotoEfct"></div>
                <div className="nombreRec">Efectivo</div>
              </div>
            </div>
            <div className="ParteExtras">
              <h5 style={{ position: "absolute", bottom: "100%" }}>Extras</h5>
              <div className="carruselExtra">
                <Carrusel />
              </div>
            </div>

            <div className="mobileButtonCont">
              <CarritoBtn text={"SIGUIENTE"} nextPath={"/resumen"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pago;
