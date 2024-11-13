import "./cardProdEditar.css";
import Proptypes from "prop-types";
import { useState, useEffect } from "react";
import useFetchImage from "../../hooks/useFetchImage";

// eslint-disable-next-line react/prop-types
const CardProduct = ({
  id,
  title,
  description,
  image,
  precios,
  styleCard,
  styleImage,
  onEditProduct,
  onDeleteProduct,
}) => {
  const img = useFetchImage(image);

  return (
    <div className="cardProducto" style={styleCard}>
      <div className="containerImage" style={styleImage}>
        <img className="imageProduct" src={img}></img>
      </div>
      <div className="containerInfo">
        <div className="title">{title}</div>
        <div
          className="title"
          style={{
            fontWeight: "normal",
            wordWrap: "break-word",
            marginTop: "1%",
            fontSize: 15,
          }}
        >
          {description}
        </div>
        <div
          className="title"
          style={{
            fontWeight: "normal",
            wordWrap: "break-word",
            marginTop: "1%",
            fontSize: 15,
          }}
        >
          <div style={{ fontWeight: "bold" }}>Precios:</div>
          {precios &&
            precios.map((precio, index) => {
              // return <div key={index}>{`${precio[0]}: Q ${precio[1]}.00`}</div>;
              return (
                <div key={index}>{`${precio.name}: Q ${precio.price}.00`}</div>
              );
            })}
        </div>
      </div>
      <div className="addToCartContainer">
        <button className="editarButon" onClick={onEditProduct}>
          Editar
        </button>
        <button className="eliminarButon" onClick={onDeleteProduct}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  title: Proptypes.string,
  styleCard: Proptypes.any,
  styleImage: Proptypes.any,
  description: Proptypes.any,
  image: Proptypes.any,
  precios: Proptypes.any,
};

export default CardProduct;
