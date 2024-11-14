import { useState } from "react";
import React, { useEffect } from "react";
import useIsMobile from "../../hooks/useDevice";
import "./navbar.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import MobileNav from "./components/MobileNav";
import { SwapHorizontalOutline, ClipboardOutline , PersonAddOutline, Add} from "react-ionicons";

const navbarPages = [
  { name: "Inicio", link: "/home" },
  { name: "Contáctanos", link: "/contact" },
];

const menuActionsAdmin = [{ name: "Configuración", link: "/configuracion" }];

const hideNavBarOnPaths = [
  "/login",
  "/signup",
  "/carrito",
  "/pago",
  "/resumen",
];

const NavBar2 = () => {
  const { width } = useWindowDimensions();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inUseMenuActions, setInUseMenuActions] = useState([
    { name: "Iniciar Sesión", link: "/login" },
    { name: "Contactanos", link: "/contact" },
  ]);
  const [displayName, setDisplayName] = useState("Iniciar Sesión");
  const [searchItem, setSearchItem] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const userRol = localStorage.getItem("rol");
  const googleUser = localStorage.getItem("googleUser");
  const name = localStorage.getItem("name");
  const Googlename = localStorage.getItem("GoogleName");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    Este useEffect es para habilitar opciones de menu dependiendo del rol del usuario
  */
  useEffect(() => {
    if (userRol === null) {
      setInUseMenuActions([{ name: "Iniciar Sesión", link: "/login" }]);
      return;
    }

    if (userRol === "Admin") {
      setInUseMenuActions([
        ...menuActionsAdmin,
        { name: "Cerrar Sesión", link: "/logout" },
      ]);
    } else {
      const isGoogleUser = googleUser !== null;
      setInUseMenuActions([
        {
          name: "Cerrar Sesión",
          link: isGoogleUser ? "/logoutGoogle" : "/logout",
        },
      ]);
    }
  }, [userRol]);

  /*
    Este useEffect es para cambiar el nombre de usuario
  */
  useEffect(() => {
    if (googleUser) {
      setDisplayName(Googlename);
    } else {
      if (name) setDisplayName(name);
      else setDisplayName("Iniciar Sesión");
    }
  }, [googleUser, name, Googlename]);

  /* Abrir y cerrar menu */
  const toggleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /* Navegar a una pagina */
  const handleNavigatePage = (link) => {
    setIsMenuOpen(false);
    if (link === "/logout" || link === "/logoutGoogle") {
      handleLogOut();
    } else {
      navigate(link);
    }
  };

  /* Cerrar sesión */
  const handleLogOut = () => {
    Swal.fire({
      title: `¿Seguro que quieres cerrar sesión?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("rol");
        localStorage.removeItem("googleUser");
        localStorage.removeItem("GoogleName");
        localStorage.removeItem("name");

        Swal.fire({
          title: `Sesión cerrada correctamente`,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/home");
      }
    });
  };

  /* Busqueda */
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchItem.trim()) {
      navigate(`/home?search=${encodeURIComponent(searchItem)}`);
    } else {
      navigate("/home");
    }
  };

  const isMobile = useIsMobile();
  return (
    <div style={{ width: "100%" }}>
      {hideNavBarOnPaths.includes(location.pathname) ? null : (
        <>
          {/* 
            Este div es para que siempre existan los 100px de espacio del navbar
            ya que esta en position: "fixed" es como un absolute y este height 100
            Ayuda a hacer un falso navbar relative
          */}
          <div style={{ height: 100 }}></div>
          <div
            className="navbar-general-container"
            style={{
              background:
                scrollPosition == 0 ? "#1f3350" : "rgba(128, 128, 128, 0.5)",
              backdropFilter: scrollPosition == 0 ? "none" : "blur(10px)",
              height: scrollPosition == 0 ? 100 : 80,
              width: width,
            }}
          >
            {!isMobile && (
              <>
                {/* Parte Izquierda del navbar */}
                <div className="navbar-picolin-text">PICOLIN</div>
                {navbarPages.map((page) => (
                  <div
                    className="navbar-text"
                    onClick={() => {
                      handleNavigatePage(page.link);
                    }}
                  >
                    {page.name}
                  </div>
                ))}

                {/* Parte Derecha del navbar */}
                <div className="user-actions-container">
                  <form onSubmit={(e) => handleSearch(e)}>
                    <div className="search-bar-container">
                      <input
                        type="text"
                        placeholder="Search"
                        value={searchItem}
                        onChange={(e) => {
                          setSearchItem(e.target.value);
                        }}
                      />
                      <img src="/img/buscar.png" alt="Buscar" />
                    </div> 
                  </form>


                  {(location.pathname === "/home" || location.pathname === "/contact") ? (
                    // Vista de Cliente: Carrito
                    <div
                      onClick={() => {
                        handleNavigatePage("/carrito");
                      }}
                      className="carrito-navbar-container"
                    >
                      <img
                        src="/img/carrito.png"
                        id="carrito-img"
                        href="/carrito"
                      />
                      <div>Carrito</div>
                    </div>
                  ) :
                  userRol === "Admin" &&
                  (location.pathname === "/home"  || location.pathname === "/editarCategorias") ?
                  (
                    // Vista de Admin: Registros de Ventas
                    <div className="containerRowNav">
                      <div
                      onClick={() => {
                        handleNavigatePage("/registroVentas");
                      }}
                      className="carrito-navbar-container"
                    >
                      <ClipboardOutline
                        color={"#ffffff"}
                        height="30px"
                        width="30px"
                      />
                      <div>Registros de Ventas</div>
                    </div>

                    <div
                    onClick={() => {
                      handleNavigatePage("/signup");
                    }}
                    className="carrito-navbar-container">                     
                      <PersonAddOutline
                        color={"#ffffff"}
                        height="30px"
                        width="30px"
                      />
                      <div>Registro de Usuarios</div>
                    </div>
                    </div>
                  ) : null}

                  {userRol === "Admin" &&
                    (location.pathname === "/home" || location.pathname === "/editarCategorias"  || location.pathname === "/contact") && (
                      <div
                        className="toggle-admin-view-button"
                        onClick={() => {
                          if (location.pathname === "/home" || location.pathname === "/contact") {
                            navigate("/editarCategorias");
                          } else {
                            navigate("/home");
                          }
                        }}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <SwapHorizontalOutline
                          color={"#fffff"}
                          height="30px"
                          width="30px"
                        />
                        <p style={{ margin: "5px 0", fontSize: "12px", fontWeight: "bold" }}>
                          {location.pathname === "/home" || location.pathname === "/contact" ? "Ir a Vista Admin" : "Ir a Vista Usuario"}
                        </p>
                      </div>
                    )}

                  <div
                    className="navbar-user-container"
                    onClick={toggleOpenMenu}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <img src="/img/user.png" alt="User" />
                      <div
                        className="navbar-user-triangle"
                        style={{
                          transform: isMenuOpen
                            ? "rotate(-180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </div>
                    <div className="navbar-user-name-text">{displayName}</div>
                  </div>

                  {isMenuOpen && (
                    <div
                      className={`menu-navbar-container ${
                        isMenuOpen ? "appear" : ""
                      }`}
                      style={{
                        opacity: isMenuOpen ? 1 : 0,
                        top: scrollPosition == 0 ? 80 : 70,
                      }}
                    >
                      {inUseMenuActions.map((action) => (
                        <div
                          className="menu-navbar-text"
                          onClick={() => {
                            handleNavigatePage(action.link);
                          }}
                        >
                          {action.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
            <MobileNav
              spanColor={"white"}
              iconStyles={{
                width: 30,
                height: 30,
                marginTop: scrollPosition == 0 ? 50 : 30,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar2;
