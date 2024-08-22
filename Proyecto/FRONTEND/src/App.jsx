import './App.css'
import AppRouter from './componentes/router.jsx'
import Nabvar from './componentes/navbar/navbar.jsx'
//import { useState } from 'react'
//import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'; 
import { CarritoProvider } from './componentes/carrito/carritoContext.jsx';

function App() {
  //const [rutaActual, setRutaActual] = useState("app")
  return (
    <CarritoProvider>
    <Router> 
      <Nabvar/>
      <div className="contenedor">
        <AppRouter/>
      </div>
      </Router>
    </CarritoProvider>
  )
}

export default App
