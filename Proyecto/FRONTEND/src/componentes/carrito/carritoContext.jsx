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

  const agregarAlCarrito = (producto, nuevaCantidad) => {
    console.log(producto)
    const existingIndex = carrito.findIndex((item) => item.id === producto.id)
    console.log(existingIndex)
    if (existingIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      const updatedCarrito = [...carrito]
      updatedCarrito[existingIndex].quantity = nuevaCantidad
      setCarrito(updatedCarrito)
      guardarCarritoStorage(updatedCarrito)
    } else {
      // Si el producto no está en el carrito, agrégalo
      const nuevoCarrito = [...carrito, producto]
      setCarrito(nuevoCarrito)
      guardarCarritoStorage(nuevoCarrito)
    }

    console.log('Estado del carrito después de agregar:', carrito)
  }

  const eliminarDelCarrito = (id) => {
    if(window.confirm("Se eliminara este producto del carrito, estas seguro de continuar?")){  
      const nuevaCarrito = carrito.filter((producto) => producto.id !== id)
      setCarrito(nuevaCarrito)
      guardarCarritoStorage(nuevaCarrito)
    }
  }

  const limpiarCarrito = () => {
    setCarrito([])
    localStorage.removeItem('carrito')
  }

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, setCarrito, guardarCarritoStorage }}>
      {children}
    </CarritoContext.Provider>
  )
}