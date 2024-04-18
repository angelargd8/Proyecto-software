import './App.css'
import Router from './componentes/router.jsx'
import Nabvar from './componentes/navbar.jsx'
import { useState } from 'react'
//import { useEffect, useState } from 'react'

function App() {
  const [rutaActual, setRutaActual] = useState("app")
  return (
    <>
      <Nabvar setRutaActual={setRutaActual}/>
      <div className="contenedor">
        <Router ruta={rutaActual} setRutaActual={setRutaActual} />
      </div>
    </>
  )
}

export default App
