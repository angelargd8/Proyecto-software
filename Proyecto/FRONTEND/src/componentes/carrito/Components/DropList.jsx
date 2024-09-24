const DropList = () => {
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

  const pago = ["Desposito", "Efectivo"];

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
        <motion.li
          variants={itemVariants}
          onClick={handleHome}
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.3 },
          }}
          style={{
            fontWeight: isActive("/home") ? 600 : "normal",
            scale: isActive("/home") ? 1.15 : 1,
          }}
        >
          Inicio
        </motion.li>
        <motion.li
          variants={itemVariants}
          onClick={handleContact}
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.3 },
          }}
          style={{
            fontWeight: isActive("/contact") ? 600 : "normal",
            scale: isActive("/contact") ? 1.15 : 1,
          }}
        >
          Contáctanos
        </motion.li>
        <motion.li
          variants={itemVariants}
          onClick={handleCarrito}
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.3 },
          }}
          style={{
            fontWeight: isActive("/carrito") ? 600 : "normal",
            scale: isActive("/carrito") ? 1.15 : 1,
          }}
        >
          Carrito
        </motion.li>
        <motion.li
          variants={itemVariants}
          onClick={handleLogin}
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.3 },
          }}
          style={{
            fontWeight: isActive("/login") ? 600 : "normal",
            scale: isActive("/login") ? 1.15 : 1,
          }}
        >
          Login
        </motion.li>
        <motion.li
          variants={itemVariants}
          onClick={handleSignup}
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.3 },
          }}
          style={{
            fontWeight: isActive("/signup") ? 600 : "normal",
            scale: isActive("/signup") ? 1.15 : 1,
          }}
        >
          Sign Up
        </motion.li>
      </motion.ul>
    </div>
  );
};
