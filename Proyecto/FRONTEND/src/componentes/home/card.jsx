import { useEffect, useState } from "react";
import "./card.css";
import PropTypes from "prop-types";

function Card({ title, imagen, onClick }) {
  const [img, setImag] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      //let url = import.meta.env.VITE_APIPORT_IMAGE + imagen;
      // tests: 
      var url = process.env.VITE_APIPORT_IMAGE + imagen;
      const result = await fetch(url);
      setImag(result.url);
    };
    getImage();
  }, []);

  return (
    <div className="card-category" onClick={onClick}>
      <div className="card-content-category">
        <img className="imagen-category" src={img} alt="Imagen no disponible" />
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
