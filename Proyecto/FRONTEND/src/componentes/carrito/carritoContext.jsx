import React, { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { precioXProducto } from "./resumenComponents/finalTicket";

export const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [ubicacion, setUbicacion] = useState("");
  const [receptor, setReceptor] = useState("");
  const [pagoType, setPagoType] = useState("");

  const [carrito, setCarrito] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [tarjetasGuardadas, setTarjetasGuardadas] = useState([]);
  const [tarjetaTemporal, setTarjetaTemporal] = useState(null);

  useEffect(() => {
    const storedCarrito = localStorage.getItem("carrito");
    if (storedCarrito) {
      setCarrito(JSON.parse(storedCarrito));
    }

    const storedUbicacion = localStorage.getItem("ubicacion");
    if (storedUbicacion) {
      setUbicacion(storedUbicacion);
    }

    const storedReceptor = localStorage.getItem("receptor");
    if (storedReceptor) {
      setReceptor(storedReceptor);
    }

    const storedPagoType = localStorage.getItem("pagoType");
    if (storedPagoType) {
      setPagoType(storedPagoType);
    }

    const storedTickets = localStorage.getItem("tickets");
    if (storedTickets) {
      const parsedTickets = JSON.parse(storedTickets);
      setTickets(parsedTickets);
      console.warn("Tickets guardados actualmente:", parsedTickets);
    }

    const storedTarjetas = localStorage.getItem("tarjetasGuardadas");
    if (storedTarjetas) {
      setTarjetasGuardadas(JSON.parse(storedTarjetas));
    }
  }, []);

  const guardarCarritoStorage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const agregarAlCarrito = (producto, nuevaCantidad) => {
    console.log(producto);
    const existingIndex = carrito.findIndex((item) => item.id === producto.id);
    console.log(existingIndex);
    if (existingIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      const updatedCarrito = [...carrito];
      updatedCarrito[existingIndex].quantity = nuevaCantidad;
      setCarrito(updatedCarrito);
      guardarCarritoStorage(updatedCarrito);
    } else {
      // Si el producto no está en el carrito, agrégalo
      const nuevoCarrito = [...carrito, producto];
      setCarrito(nuevoCarrito);
      guardarCarritoStorage(nuevoCarrito);
    }

    console.log("Estado del carrito después de agregar:", carrito);
  };

  const eliminarDelCarrito = (id, title) => {
    Swal.fire({
      title: `¿Deseas eliminar ${title} del carrito?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Se eliminó ${title} del carrito`,
          icon: "success",
        });
        const nuevaCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(nuevaCarrito);
        guardarCarritoStorage(nuevaCarrito);
      }
    });
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    guardarCarritoStorage([]);
  };

  const guardarUbicacionStorage = (ubicacion) => {
    localStorage.setItem("ubicacion", ubicacion);
  };

  const guardarReceptorStorage = (receptor) => {
    localStorage.setItem("receptor", receptor);
  };

  const guardarPagoTypeStorage = (pagoType) => {
    localStorage.setItem("pagoType", pagoType);
  };

  const guardarTicketsStorage = (tickets) => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  };

  const obtenerUltimoTicketId = () => {
    const storedId = localStorage.getItem("ultimoTicketId");
    return storedId ? parseInt(storedId, 10) : 0;
  };

  const guardarUltimoTicketId = (id) => {
    localStorage.setItem("ultimoTicketId", id);
  };

  const agregarTicket = () => {
    const nuevoId = obtenerUltimoTicketId() + 1;
    const nuevoTicket = {
      id: nuevoId,
      ubicacion,
      receptor,
      productos: carrito,
      pagoType,
      total: carrito.reduce(
        (acc, producto) =>
          acc + precioXProducto(producto.quantity, producto.precios),
        0
      ),
    };
    const nuevosTickets = [...tickets, nuevoTicket];
    setTickets(nuevosTickets);
    guardarTicketsStorage(nuevosTickets);
    guardarUltimoTicketId(nuevoId);
  };

  const limpiarTicket = () => {
    setUbicacion("");
    setReceptor("");
    setPagoType("");
    localStorage.removeItem("ubicacion");
    localStorage.removeItem("receptor");
    localStorage.removeItem("pagoType");
  };

  const agregarTarjeta = (tarjeta, guardar) => {
    if (guardar) {
      const nuevasTarjetas = [...tarjetasGuardadas, tarjeta];
      setTarjetasGuardadas(nuevasTarjetas);
      localStorage.setItem("tarjetasGuardadas", JSON.stringify(nuevasTarjetas));
    } else {
      setTarjetaTemporal(tarjeta);
    }
    console.log("Tarjeta guardada con token:", tarjeta);
  };

  const limpiarTarjetaTemporal = () => {
    setTarjetaTemporal(null);
  };

  const limpiarTarjetasGuardadas = () => {
    setTarjetasGuardadas([]);
    localStorage.removeItem("tarjetasGuardadas");
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        limpiarCarrito,
        limpiarTicket,
        setCarrito,
        guardarCarritoStorage,
        ubicacion,
        setUbicacion: (value) => {
          setUbicacion(value);
          guardarUbicacionStorage(value);
        },
        receptor,
        setReceptor: (value) => {
          setReceptor(value);
          guardarReceptorStorage(value);
        },
        pagoType,
        setPagoType: (value) => {
          setPagoType(value);
          guardarPagoTypeStorage(value);
        },
        agregarTicket,
        obtenerUltimoTicketId,
        agregarTarjeta,
        tarjetasGuardadas,
        tarjetaTemporal,
        limpiarTarjetaTemporal,
        limpiarTarjetasGuardadas,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
