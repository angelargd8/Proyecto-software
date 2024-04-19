import React, { createContext, useContext, useState } from 'react'


const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
}

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  )
}