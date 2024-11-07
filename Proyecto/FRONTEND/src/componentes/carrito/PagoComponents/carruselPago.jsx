import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./carruselPago.css";

const CarruselPago = () => {
  const [selectedItem, setSelectedItem] = useState("item-1");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedItem(e.target.id);
  };

  const handleGoBuy = (productoId) => {
    if (productoId === selectedItem) {
      navigate("/home");
    } else {
      setSelectedItem(productoId);
    }
  };

  const productos = [
    {
      id: "item-1",
      imagen: "../src/assets/img/Brillantina-surtida.jpg",
      nombre: "Brillantina Surtida",
    },
    {
      id: "item-2",
      imagen: "../src/assets/img/ojosmoviles.jpeg",
      nombre: "Ojos Moviles",
    },
    {
      id: "item-3",
      imagen: "../src/assets/img/pegatinas.jpg",
      nombre: "Pegatinas",
    },
  ];

  return (
    <div className="carrusel-extras">
      {productos.map((producto) => (
        <input
          key={producto.id}
          type="radio"
          name="slider"
          id={producto.id}
          checked={selectedItem === producto.id}
          onChange={handleChange}
        />
      ))}

      <div className="cards-extras">
        {productos.map((producto) => (
          <label
            key={producto.id}
            className="card-extra"
            htmlFor={producto.id}
            id={`producto-${producto.id}`}
            onClick={() => handleGoBuy(producto.id)}
          >
            <img src={producto.imagen} alt={producto.nombre} />
            <span className="producto-nombre">{producto.nombre}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CarruselPago;
