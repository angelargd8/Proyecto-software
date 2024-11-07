import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./carrusel.css";

const Carrusel = ({ styles }) => {
  const [selectedItem, setSelectedItem] = useState("item-1");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedItem(e.target.id);
  };

  const handleGoBuy = () => {
    Navigate("/carrito");
  };

  return (
    <div className="carrusel-container" style={styles}>
      <input
        type="radio"
        name="slider-1"
        id="item-1"
        checked={selectedItem === "item-1"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="slider-2"
        id="item-2"
        checked={selectedItem === "item-2"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="slider-3"
        id="item-3"
        checked={selectedItem === "item-3"}
        onChange={handleChange}
      />
      <div className="cards">
        <label
          className="card"
          htmlFor="item-1"
          id="song-1"
          style={{ padding: 0 }}
          onClick={handleGoBuy()}
        >
          <img src="../src/assets/img/Brillantina-surtida.jpg" alt="song" />
          Brillantina Surtida
        </label>
        <label
          className="card"
          htmlFor="item-2"
          id="song-2"
          style={{ padding: 0 }}
        >
          <img src="../src/assets/img/ojosmoviles.jpeg" alt="song" />
          Ojos Moviles
        </label>
        <label
          className="card"
          htmlFor="item-3"
          id="song-3"
          style={{ padding: 0 }}
        >
          <img src="../src/assets/img/pegatinas.jpg" alt="song" />
          Pegatinas
        </label>
      </div>
    </div>
  );
};

export default Carrusel;
