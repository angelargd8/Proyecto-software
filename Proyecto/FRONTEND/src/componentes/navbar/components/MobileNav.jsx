import { useCycle, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { IconToggle } from "./IconToggle";
import "./MobileNav.css";
import { useState } from "react";

function MobileNav({ spanColor }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  //   Local Storage
  const userRol = localStorage.getItem("rol");
  const googleUser = localStorage.getItem("googleUser");
  const name = localStorage.getItem("name");
  const Googlename = localStorage.getItem("GoogleName");

  const handleHome = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
    navigate("/home");
  };

  const handleLogin = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
    navigate("/login");
  };

  const handleCarrito = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
    navigate("/carrito");
  };

  const handleContact = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
    navigate("/contact");
  };

  const handleLogOutGoogle = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
    localStorage.removeItem("googleUser");
    localStorage.removeItem("rol");
    alert("Sesión cerrada");
    navigate("/home");
  };

  const handleLogOut = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
    localStorage.removeItem("rol");
    alert("Sesión cerrada");
    navigate("/home");
  };

  const handleSignup = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
    navigate("/signup");
  };

  const handleAddProduct = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
    navigate("/editarCategorias");
  };

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
    <>
      <motion.nav
        className="mobileNav"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <IconToggle toggle={() => setIsOpen(!isOpen)} spanColor={spanColor} />
      </motion.nav>

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
        >
          Carrito
        </motion.li>
        {userRol == null && googleUser == null && (
          <>
            <motion.li
              variants={itemVariants}
              onClick={handleLogin}
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.3 },
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
            >
              Sign Up
            </motion.li>
          </>
        )}
      </motion.ul>
    </>
  );
}

export default MobileNav;
