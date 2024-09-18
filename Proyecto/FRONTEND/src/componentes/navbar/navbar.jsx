import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { IconToggle } from "./components/IconToggle";
import MobileNav from "./components/MobileNav";

function Nabvar() {
  //router
  const location = useLocation();
  //navegacion
  const navigate = useNavigate();
  //local storage
  const userRol = localStorage.getItem("rol");
  const googleUser = localStorage.getItem("googleUser");
  const name = localStorage.getItem("name");
  const Googlename = localStorage.getItem("GoogleName");
  //search
  const [searchItem, setSearchItem] = useState("");
  // Mobile navbar

  useEffect(() => {
    const handleScroll = () => {
      var navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHome = () => {
    navigate("/home");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleCarrito = () => {
    navigate("/carrito");
  };
  const handleContact = () => {
    navigate("/contact");
  };

  const handleLogOutGoogle = () => {
    localStorage.removeItem("googleUser");
    localStorage.removeItem("rol");
    alert("Sesión cerrada");
    navigate("/home");
  };

  const handleLogOut = () => {
    localStorage.removeItem("rol");
    alert("Sesión cerrada");
    navigate("/home");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleAddProduct = () => {
    navigate("/editarCategorias");
  };

  const handleConfig = () => {
    navigate("/configuracion");
  };

  /* search form */
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchItem.trim()) {
      navigate(`/home?search=${encodeURIComponent(searchItem)}`);
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/carrito" &&
        location.pathname !== "/pago" &&
        location.pathname !== "/resumen" && (
          <div className="nabvar-body" id="navbar">
            <div className="mobileNavContainer">
              <MobileNav spanColor={"white"} />
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <a className="navbar-brand" href="/">
                <h2 className="navbar-name">PICOLIN</h2>
              </a>
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 textos">
                    {/* Inicio */}
                    <li className="nav-item">
                      <a
                        className="nav-text"
                        aria-current="page"
                        href="/home"
                        onClick={handleHome}
                      >
                        Inicio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-text"
                        aria-current="page"
                        href="/contact"
                        onClick={handleContact}
                      >
                        Contáctanos
                      </a>
                    </li>
                  </ul>

                  <div className="items-end">
                    {/* Busqueda */}
                    <form
                      className="d-flex buscar"
                      role="search"
                      onSubmit={handleSearch}
                    >
                      <div className="input-container">
                        <input
                          className="form-control "
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          id="search-input"
                          value={searchItem}
                          onChange={(e) => setSearchItem(e.target.value)}
                        />
                        <button type="submit" id="boton-buscar">
                          <img
                            className="imagen-btn-search"
                            src="./src/assets/img/buscar.png"
                            alt="Buscar"
                          />
                        </button>
                      </div>
                    </form>

                    {/* Carrito */}
                    <button
                      type="buton"
                      onClick={handleCarrito}
                      id="boton"
                      title="carrito"
                    >
                      <img
                        className="imagen-btn-carrito"
                        src="./src/assets/img/carrito.png"
                        id="carrito-img"
                        href="/carrito"
                        onClick={handleCarrito}
                      />
                    </button>

                    {/* Manejo de sesión del Usuario */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle botonUser"
                            href="#"
                            id="navbarDropdown boton"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <button type="button" id="boton-user">
                              <div className="icono">
                                <img
                                  className="imagen-btn-user"
                                  src="./src/assets/img/user.png"
                                  alt="User"
                                />

                                {userRol === null && googleUser === null && (
                                  <label className="Nombre-label">
                                    Iniciar Sesión
                                  </label>
                                )}
                                {userRol !== null && (
                                  <label className="Nombre-label">{name}</label>
                                )}
                                {googleUser !== null && (
                                  <label className="Nombre-label">
                                    {Googlename}
                                  </label>
                                )}
                              </div>
                            </button>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="navbarDropdown"
                          >
                            {
                              /* Boton Inicio de sesion  */
                              userRol === null && googleUser === null && (
                                <a
                                  className="dropdown-item"
                                  onClick={handleLogin}
                                >
                                  Iniciar Sesión
                                </a>
                              )
                            }
                            {
                              /* permisos y cerrar sesión admin */
                              userRol === "Admin" && (
                                <div>
                                  <a
                                    className="dropdown-item"
                                    href="/editarCategorias"
                                    onClick={handleAddProduct}
                                  >
                                    Editar Productos
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="/signup"
                                    onClick={handleSignup}
                                  >
                                    Registrar
                                  </a>
                                  <a className="dropdown-item" 
                                  href="/configuracion"
                                  onClick={handleConfig}
                                  >
                                    Configuración
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a
                                    className="dropdown-item"
                                    onClick={handleLogOut}
                                  >
                                    Cerrar sesión
                                  </a>
                                </div>
                              )
                            }
                            {
                              /* cerrar sesión google user*/
                              googleUser !== null && (
                                <div>
                                  <a
                                    className="dropdown-item"
                                    onClick={handleLogOutGoogle}
                                  >
                                    Cerrar sesión
                                  </a>
                                </div>
                              )
                            }
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* fin Manejo de sesión del Usuario */}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
    </>
  );
}
export default Nabvar;
