import { Navigate, useNavigate } from "react-router-dom";
import MobileHdr from "./Components/MobileHdr";
import CarritoSteps from "./Components/CarritoSteps";
import React from "react";

const Resumen = () => {
  const navigate = useNavigate();

  const handlePago = () => {
    navigate("/pago");
  };

  const handleDirecc = () => {
    navigate("/carrito");
  };

  return (
    <>
      <div style={styles.contenedorGeneral}>
        <MobileHdr title={"Resumen de Pedido"} lastPath={"/pago"} />
        <CarritoSteps />
        <div className="content"></div>
      </div>
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
};

export default Resumen;
