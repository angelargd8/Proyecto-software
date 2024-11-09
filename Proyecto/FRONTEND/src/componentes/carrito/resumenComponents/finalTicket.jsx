import { CarritoContext } from "../carritoContext";
import { useContext } from "react";

const FinalTicket = () => {
  const { ubicacion, receptor, pagoType } = useContext(CarritoContext);
  return (
    <>
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
    </>
  );
};

const styles = {
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

export default FinalTicket;
