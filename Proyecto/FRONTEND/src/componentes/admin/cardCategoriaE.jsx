import { useEffect, useState } from "react";
import "./cardCategoriaE.css";
import PropTypes from "prop-types";
import useFetchImage from "../../hooks/useFetchImage";

function CardCategoria({ title, imagen, onClick }) {
  const img = useFetchImage(imagen);

  return (
    <div className="card-category-e" onClick={onClick}>
      <div className="card-content-category-e">
        {img ? (
          <img
            className="imagen-category-e"
            src={img}
            alt="Imagen no disponible"
          />
        ) : (
          <div className="skeleton" style={{ width: "100%", height: "100%" }} />
        )}
      </div>

      <h2 id="title-carde">{title}</h2>
    </div>
  );
}

CardCategoria.propTypes = {
  title: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardCategoria;
