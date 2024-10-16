import { useCycle, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { IconToggle } from "./IconToggle";
import "./MobileNav.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function MobileNav({ spanColor, iconStyles }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(null);
  const [onScreen, setOnscreen] = useState(location.pathname);
  const [changed, setChanged] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isNull, setIsNull] = useState(true);
  //   Local Storage
  const userRol = localStorage.getItem("rol");
  const googleUser = localStorage.getItem("googleUser");
  const name = localStorage.getItem("name");
  const Googlename = localStorage.getItem("GoogleName");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (isOpen !== null) {
      setToggle(isOpen);
    }
  }, [isOpen]);

  const handleTouch = () => {
    setIsOpen((prev) => (prev === null ? true : !prev)); // Handles null state
  };

  useEffect(() => {
    setOnscreen(location.pathname);
  }, [location.pathname]);

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
    Swal.fire({
      title: `Sesión cerrada correctamente`,
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
    navigate("/home");
  };

  const handleLogOut = () => {
    if (isOpen === true) {
      setIsOpen(!isOpen);
    }
    localStorage.removeItem("rol");
    Swal.fire({
      title: `Sesión cerrada correctamente`,
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
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

  if (!isMobile) {
    return null;
  }

  return (
    <>
      <motion.nav
        className="mobileNav"
        initial={false}
        animate={toggle ? "open" : "closed"}
      >
        <IconToggle
          toggle={() => handleTouch()}
          spanColor={spanColor}
          extraStyles={iconStyles}
        />
      </motion.nav>

      <motion.ul
        variants={ULvariants}
        className="navList"
        style={{
          position: "absolute",
          pointerEvents: toggle ? "auto" : "none",
          top: 80,
          right: 20,
        }}
        animate={toggle ? "open" : "closed"}
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
        {userRol == null && googleUser == null && (
          <>
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
          </>
        )}
      </motion.ul>
    </>
  );
}

export default MobileNav;
