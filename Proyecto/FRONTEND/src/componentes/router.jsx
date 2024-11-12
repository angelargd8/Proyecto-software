import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./log/login.jsx";
import Home from "./home/home.jsx";
import SingUp from "./log/signup.jsx";
import Carrito from "./carrito/carrito.jsx";
import AgregarProducto from "./admin/AgregarProducto/agregarProd.jsx";
import EditarProds from "./admin/editarProd.jsx";
import EditarCateg from "./admin/editarCateg.jsx";
import Pago from "./carrito/pago.jsx";
import Products from "./products/products.jsx";
import Resumen from "./carrito/resumen.jsx";
import AgregarCateg from "./admin/AgregarCategoria/agregarCateg.jsx";
import Contact from "./contact/contact.jsx";
import Configuracion from "./config/configuracion.jsx";
import { useLocation, useNavigate } from "react-router-dom";

function AppRouter() {
  const userRol = localStorage.getItem("rol");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SingUp />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/pago" element={<Pago />} />
      <Route path="/resumen" element={<Resumen />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/configuracion" element={<Configuracion />} />
      <Route path="/" element={<Home />} />
      {userRol === "Admin" ? (
        (console.log(userRol),
        (
          <>
            <Route path="/agregarProducto" element={<AgregarProducto />} />
            <Route path="/agregarCategoria" element={<AgregarCateg />} />
            <Route path="/editarCategorias" element={<EditarCateg />} />
            <Route path="/editarProductos/:detail" element={<EditarProds />} />
          </>
        ))
      ) : (
        <Route path="/home" element={<Home />} />
      )}
      <Route path="/detalles/:detail" element={<Products />} />
    </Routes>
  );
}
export default AppRouter;
