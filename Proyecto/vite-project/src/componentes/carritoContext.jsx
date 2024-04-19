import React, { createContext, useContext, useEffect , useState } from 'react'


const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
}

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const storedCarrito = localStorage.getItem('carrito')
    if (storedCarrito) {
        setCarrito(JSON.parse(storedCarrito))
    }
  }, [])

  const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto]
    setCarrito(nuevoCarrito)
    guardarCarritoStorage(nuevoCarrito)
  }

  const eliminarDelCarrito = (id) => {
    const nuevaCarrito = carrito.filter((producto) => producto.id !== id)
    setCarrito(nuevaCarrito)
    guardarCarritoStorage(nuevaCarrito)
  }

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  )
}