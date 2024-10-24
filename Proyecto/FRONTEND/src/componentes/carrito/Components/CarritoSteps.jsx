import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function CarritoSteps() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleDirecc = () => {
    navigate("/carrito");
  };

  const handleResumen = () => {
    navigate("/resumen");
  };

  const handlePago = () => {
    navigate("/pago");
  };

  const getBackColor = (pathname) => {
    if (location.pathname === pathname) {
      return "#1B4965";
    } else {
      return "transparent";
    }
  };

  const getColor = (pathname) => {
    if (location.pathname === pathname) {
      return "white";
    } else {
      return "#1B4965";
    }
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
          onClick={() => handleDirecc()}
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
          onClick={() => handlePago()}
        >
          Forma de Pago
        </div>
        <div> ------------- </div>
        <div
          style={{
            backgroundColor: getBackColor("/resumen"),
            color: getColor("/resumen"),
            ...styles.stepName,
          }}
          onClick={() => handleResumen()}
        >
          Último Paso
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
