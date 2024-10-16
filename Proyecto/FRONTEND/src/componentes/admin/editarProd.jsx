import "./editarProd.css";
import { useState } from "react";
import Proptypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const EditarProds = ({ precios, styleCard, styleImage }) => {
  const location = useLocation();
  const { cardInfo } = location.state;
  console.log(cardInfo);
  const { idCategory, title, content, image } = cardInfo;

  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const [editImage] = useState(image);
  const [editPrecios, setEditPrecios] = useState(precios);
  const navigate = useNavigate();

  const handleEditProduct = () => {
    const editedProduct = {
      id: id,
      title: editTitle,
      content: editContent,
      image: editImage,
      precios: editPrecios,
    };

    console.log("Producto editado:", editedProduct);
  };

  const handleAddProduct = () => {
    navigate("/agregarProducto", { state: { id: idCategory } });
  };

  return (
    <div className="bigSquare">
      
      <h1>Editar productos</h1>
      <button className="agregarProductoButton" onClick={handleAddProduct}>
        Agregar Producto
      </button>
      <div className="cardProducto" style={styleCard}>
        <div className="containerImage" style={styleImage}>
          <img className="imageProduct" src={editImage} alt={editTitle}></img>
        </div>
        <div className="containerInfo">
          <div className="title">
            <label htmlFor="editTitle">Título:</label>
            <input
              type="text"
              id="editTitle"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
          <div className="title">
            <label htmlFor="editContent">Contenido:</label>
            <textarea
              id="editContent"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          </div>
          <div className="title">
            <label htmlFor="editPrecios">Precios:</label>
            {editPrecios &&
              editPrecios.map((precio, index) => (
                <div key={index}>
                  <label htmlFor={`precio${index}`}>{precio[0]}:</label>
                  <input
                    type="text"
                    id={`precio${index}`}
                    value={precio[1]}
                    onChange={(e) => {
                      const newPrecios = [...editPrecios];
                      newPrecios[index][1] = e.target.value;
                      setEditPrecios(newPrecios);
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="addToCartContainer">
          <button className="addToCartButton" onClick={handleEditProduct}>
            Editar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

EditarProds.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  precios: Proptypes.array.isRequired,
  styleCard: Proptypes.object,
  styleImage: Proptypes.object,
};

export default EditarProds;
