import React, { useState } from "react";
import CarritoBtn from "../Components/CarritoBtn";
import { motion } from "framer-motion";

const AgregarTarjeta = ({ onClose }) => {
  const [guardarTarjeta, setGuardarTarjeta] = useState(false);

  const handleCheckboxChange = () => {
    setGuardarTarjeta(!guardarTarjeta);
  };

  const isMobile = window.innerWidth < 768;

  const animationVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1-")
      .replace(/-$/, "");
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    e.target.value = formattedValue;
  };

  const formatExpirationDate = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.length >= 3) {
      return cleanedValue.slice(0, 2) + "/" + cleanedValue.slice(2, 4);
    }
    return cleanedValue;
  };

  const handleExpirationDateChange = (e) => {
    const formattedValue = formatExpirationDate(e.target.value);
    e.target.value = formattedValue;
  };

  return (
    <motion.div
      style={{
        ...styles.contenedorGeneral,
        width: isMobile ? "95%" : "40%",
        height: isMobile ? "50%" : "60%",
      }}
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <div style={styles.closeButton} onClick={onClose}>
        ×
      </div>
      <div style={styles.header}>Agregar Tarjeta</div>
      <div style={styles.content}>
        <div style={styles.form}>
          <div style={styles.row}>
            <label style={styles.label}>Número de Tarjeta:</label>
            <div style={styles.inputContainer}>
              <input
                type="text"
                name="numeroTarjeta"
                required
                style={styles.input}
                onChange={handleCardNumberChange}
                maxLength={19}
              />
            </div>
          </div>
          <div style={styles.row}>
            <label style={styles.label}>Fecha de Expiración:</label>
            <div style={styles.inputContainer}>
              <input
                type="text"
                name="fechaExpiracion"
                placeholder="MM/AA"
                required
                style={{ ...styles.input, ...styles.placeholder }}
                onChange={handleExpirationDateChange}
                maxLength={5}
              />
            </div>
          </div>
          <div style={styles.row}>
            <label style={styles.label}>CVC:</label>
            <div style={styles.inputContainer}>
              <input
                type="text"
                name="cvc"
                required
                style={styles.input}
                maxLength={3}
              />
            </div>
          </div>
          <div style={styles.row}>
            <label style={styles.label}>Nombre en la Tarjeta:</label>
            <div style={styles.inputContainer}>
              <input
                type="text"
                name="nombreTarjeta"
                required
                style={styles.input}
              />
            </div>
          </div>
          <div style={{ ...styles.row, gap: 10 }}>
            <label
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              Guardar tarjeta
            </label>
            <input
              type="checkbox"
              checked={guardarTarjeta}
              onChange={handleCheckboxChange}
            />
          </div>
          <CarritoBtn text={"Agregar"} />
        </div>
      </div>
    </motion.div>
  );
};

const styles = {
  contenedorGeneral: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    width: "40%",
    height: "60%",
    borderRadius: "20px",
    border: "4px solid #1b4965",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    width: "75%",
    gap: 10,
  },
  label: {
    display: "flex",
    width: "50%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },
  inputContainer: {
    display: "flex",
    width: "50%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
  },
  input: {
    display: "flex",
    width: "100%",
    height: "80%",
    color: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "grey",
  },
  placeholder: {
    "::placeholder": {
      color: "white",
    },
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

export default AgregarTarjeta;
