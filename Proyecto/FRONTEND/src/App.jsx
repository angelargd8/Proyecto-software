import './App.css';
import AppRouter from './componentes/router.jsx';
import Nabvar from './componentes/navbar/navbar.jsx';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { CarritoProvider } from './componentes/carrito/carritoContext.jsx';
import FloatingButton from './componentes/floatingButton/floatingButton.jsx';
import Footer from './componentes/footer/footer.jsx';

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
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" | location.pathname === "/carrito";

  return (
    <>
      {!isAuthPage && <Nabvar />}
      <FloatingButton />
      <div className={`contenedor ${isAuthPage ? 'no-margin' : ''}`}>
        <AppRouter />
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;


