import React, { useState } from "react";
import CarritoBtn from "../Components/CarritoBtn";
import { motion } from "framer-motion";
import { useCarrito } from "../carritoContext";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const AgregarTarjeta = ({ onClose, setPagoType }) => {
  const [guardarTarjeta, setGuardarTarjeta] = useState(false);
  const { agregarTarjeta } = useCarrito();
  const stripe = useStripe();
  const elements = useElements();

  const handleCheckboxChange = () => {
    setGuardarTarjeta(!guardarTarjeta);
  };

  const isMobile = window.innerWidth < 768;

  const animationVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const handleAgregarTarjeta = async () => {
    if (!stripe || !elements) {
      Swal.fire({
        icon: "error",
        title: "Stripe no está listo.",
        showConfirmButton: true,
      });
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    try {
      const { token, error } = await stripe.createToken(cardElement);
  
      if (error) {
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: true,
        });
      } else {
        const last4 = token.card.last4; // Últimos 4 dígitos de la tarjeta
        const brand = token.card.brand; // Marca de la tarjeta (Visa, MasterCard, etc.)
  
        Swal.fire({
          icon: "success",
          title: "Tarjeta agregada correctamente.",
          text: `**** **** **** ${last4} (${brand})`,
          showConfirmButton: true,
        }).then(() => {
          console.log("Token generado:", token);
          console.log("Últimos 4 dígitos:", last4);
          console.log("Marca de la tarjeta:", brand);
          agregarTarjeta({ last4, brand, token: token.id }, guardarTarjeta);
          setPagoType(token.id);
          onClose();
        });
      }
    } catch (error) {
      console.error("Error al procesar la tarjeta:", error);
      Swal.fire({
        icon: "error",
        title: "Hubo un problema al procesar la tarjeta.",
        showConfirmButton: true,
      });
    }
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
        X
      </div>
      <div style={styles.header}>Agregar Tarjeta</div>
      <div style={styles.content}>
        <div style={styles.form}>
          <div style={styles.row}>
            <label style={styles.label}>Datos de Tarjeta:</label>
          </div>
          <div style={styles.inputContainer}>
            <CardElement
              options={{
                style: {
                  base: {
                    color: "#000000",
                    fontSize: "16px",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#fa755a" },
                },
              }}
            />
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
          <CarritoBtn text={"Agregar"} onClick={handleAgregarTarjeta} />
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
    padding: "20px",  // Se agregó padding para dar espacio al contenido
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
    height: "auto",  // Permite que la altura se ajuste al contenido
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
    marginBottom: "15px",  // Espacio entre cada elemento
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",  // Espacio entre los elementos del formulario
    width: "100%",  // Utiliza todo el ancho disponible
  },
  label: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "16px",  // Tamaño de fuente para el label
    color: "#333",
    width: "100%",  // Asegura que el label ocupe todo el ancho
  },
  inputContainer: {
    position: "relative",
    width: "100%",  // Asegura que el campo de tarjeta ocupe todo el ancho disponible
    maxWidth: "400px",  // Limita el ancho máximo para que no sea demasiado grande en pantallas grandes
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
