import { useEffect, useState } from "react";
import "./cardCategoriaE.css";
import PropTypes from "prop-types";

function CardCategoria({ title, imagen, onClick }) {
  const [img, setImag] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      // let url = import.meta.env.VITE_APIPORT_IMAGE + imagen;
      // tests: 
      var url = process.env.VITE_APIPORT_IMAGE + imagen;
      const result = await fetch(url);
      setImag(result.url);
    };
    getImage();
  }, []);

  return (
    <div className="card-category-e" onClick={onClick}>
      <div className="card-content-category-e">
        <img className="imagen-category-e" src={img} alt="Imagen no disponible" />
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
