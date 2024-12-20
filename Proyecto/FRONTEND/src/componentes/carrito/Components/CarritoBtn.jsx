import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./CarritoBtn.css";
import { useState } from "react";
function CarritoBtn({ text, nextPath, styles, onClick }) {
  const navigate = useNavigate();

  const handleFunction = () => {
    navigate(`${nextPath}`);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (nextPath) {
      navigate(nextPath);
    }
  };

  const handlePagar = () => {
    navigate("/pago");
    // let mensaje = "Saludos.\nMe gustaría hacer un pedido de:\n";
    // carrito.forEach((producto) => {
    //   mensaje += `${producto.quantity} -- ${producto.title}\n`;
    // });
    // var url = `https://wa.me/50237067222?text=${encodeURIComponent(mensaje)}`;
    // window.open(url, '_blank');
  };
  return (
    <>
      <motion.button
        className="pagobtn"
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        style={styles}
      >
        {" "}
        {text}{" "}
      </motion.button>
    </>
  );
}

export default CarritoBtn;
