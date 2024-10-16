import "./App.css";
import AppRouter from "./componentes/router.jsx";
import Nabvar from "./componentes/navbar/navbar.jsx";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { CarritoProvider } from "./componentes/carrito/carritoContext.jsx";
import FloatingButton from "./componentes/floatingButton/floatingButton.jsx";
import Footer from "./componentes/footer/footer.jsx";

function App() {
  return (
    <div className="AppContainer">
      <CarritoProvider>
        <Router>
          <AppContent />
        </Router>
      </CarritoProvider>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isPageWithNoNav =
    (location.pathname === "/login") |
    (location.pathname === "/signup") |
    (location.pathname === "/carrito") |
    (location.pathname === "/pago");

  const isPageWithNoFooter =
    (location.pathname === "/login") |
    (location.pathname === "/signup") |
    (location.pathname === "/carrito") |
    (location.pathname === "/configuracion") |
    (location.pathname === "/pago") |
    (location.pathname === "/resumen") |
    (location.pathname === "/editarCategorias") |
    (location.pathname === "/detalles") |
    (location.pathname === "/agregarProducto") |
    (location.pathname === "/agregarCategoria");
    
  return (
    <>
      {!isPageWithNoNav && <Nabvar />}
      <FloatingButton />
      <div className={`contenedor ${isPageWithNoNav ? "no-margin" : ""}`}>
        <AppRouter />
      </div>
      {!isPageWithNoFooter && <Footer />}
    </>
  );
}

export default App;
