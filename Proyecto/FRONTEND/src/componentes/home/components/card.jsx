import "./card.css";
import PropTypes from "prop-types";
import useFetchImage from "../../../hooks/useFetchImage";

function Card({ title, imagen, onClick }) {
  const img = useFetchImage(imagen);

  return (
    <div className="card-category" onClick={onClick}>
      <div className="card-content-category">
        {img ? (
          <img
            className="imagen-category"
            src={img}
            alt="Imagen no disponible"
          />
        ) : (
          <div
            className="imagen-category skeleton"
            style={{ height: 500 }}
          ></div>
        )}
      </div>
      <h2 id="title-card">{title}</h2>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
