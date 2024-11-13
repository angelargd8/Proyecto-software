import "./cardProducto.css";
import Proptypes from "prop-types";
import { useState, useEffect } from "react";
import { useCarrito } from "../carrito/carritoContext";
import Button from "../Button";
import Swal from "sweetalert2";
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
}) => {
  // console.log(precios);
  const [quantity, setQuantity] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const { agregarAlCarrito } = useCarrito();
  const img = useFetchImage(image);

  const onHandlerClickButton = (type) => {
    switch (type) {
      case "+": {
        setQuantity((prevQuantity) => parseInt(prevQuantity, 10) + 1);
        return;
      }
      case "-": {
        if (quantity > 0) {
          setQuantity((prevQuantity) => parseInt(prevQuantity, 10) - 1);
          return;
        }
      }
      default:
        return;
    }
  };

  const onChangeQuantity = (e) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(value) && parseInt(value, 10) >= 0)) {
      setQuantity(value);
    }
  };

  const onBlurQuantity = () => {
    if (quantity === "" || isNaN(parseInt(quantity, 10))) {
      setQuantity(0);
    }
    setIsEditing(false);
  };

  const onFocusQuantity = () => {
    setIsEditing(true);
  };

  const handleAddToCart = () => {
    if (quantity != 0) {
      const producto = { id, title, description, image, quantity, precios };
      agregarAlCarrito(producto, quantity);
      Swal.fire({
        icon: "success",
        title: `Se agregó ${quantity} ${title} al carrito`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="cardProducto" style={styleCard}>
      <div className="containerImage" style={styleImage}>
        {img ? (
          <img className="imageProduct" src={img}></img>
        ) : (
          <div className="imageProduct" style={{ width: 600 }}>
            <div
              className="skeleton"
              style={{ height: "100%", width: 180 }}
            ></div>
          </div>
        )}
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
        <div className="containerActions">
          <div
            className="button"
            style={{ fontSize: 20, textAlign: "center" }}
            onClick={() => onHandlerClickButton("-")}
          >
            -
          </div>
          <input
            type="number"
            className="button"
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: 20,
              borderRadius: "0%",
              border: "1px solid black",
              textAlign: "center",
            }}
            value={isEditing ? quantity : parseInt(quantity, 10)}
            onChange={onChangeQuantity}
            onBlur={onBlurQuantity}
            onFocus={onFocusQuantity}
          />
          <div
            className="button"
            style={{ fontSize: 20 }}
            onClick={() => onHandlerClickButton("+")}
          >
            +
          </div>
        </div>
        <Button onClick={handleAddToCart}>Agregar al carrito</Button>
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
