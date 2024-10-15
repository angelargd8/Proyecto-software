import { motion } from "framer-motion";
import { useState } from "react";
import "./DropList.css";

const DropList = ({ type }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handlePress = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
  };
  const isActive = (path) => location.pathname === path;

  const ubiData = ["Universidad del Valle de Guatemala", "Casa", "Trabajo"];
  const userData = [
    "Kimberly Daniela Morales Ortega",
    "Pablo Cesar Lopez Medina",
    "Francis Gabriela Aguilar Leal",
    "Enrique Fernando Echeverria Leal",
    "Briana Mayte Carrera Ortiz",
  ];
  const tarjetaData = [
    "Banco Industrial - 0101",
    "Banrural - 2347",
    "BAC - 8995",
  ];
  const pagoData = ["Desposito", "Efectivo"];
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };
  const ULvariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  const getDataType = (type) => {
    switch (type) {
      case "Ubication":
        return ubiData;
      case "User":
        return userData;
      case "Tarjeta":
        return tarjetaData;
      case "Pago":
        return pagoData;
      default:
        ubiData;
    }
  };

  const dataDisplayed = getDataType(type);
  return (
    <div className="dropList-container" id="dropList-container">
      <motion.ul
        variants={ULvariants}
        className="navList"
        style={{
          position: "absolute",
          pointerEvents: isOpen ? "auto" : "none",
          top: 80,
          right: 20,
        }}
        animate={isOpen ? "open" : "closed"}
      >
        {dataDisplayed.map((item, index) => (
          <motion.li
            key={index}
            id="dataItem"
            variants={itemVariants}
            onClick={handlePress}
            whileHover={{
              scale: 1.25,
              transition: { duration: 0.3 },
              backgroundColor: "rgb(217,217,214)",
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default DropList;
