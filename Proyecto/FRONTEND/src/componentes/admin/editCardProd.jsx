import './editCardProd.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Swal from 'sweetalert2';

const CardProductEdit = ({ id, title, description, image, precios }) => {
    const [quantity, setQuantity] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    const onHandlerClickButton = (type) => {
        switch (type) {
            case "+":
                setQuantity(prevQuantity => parseInt(prevQuantity, 10) + 1);
                return;
            case "-":
                if (quantity > 0) {
                    setQuantity(prevQuantity => parseInt(prevQuantity, 10) - 1);
                    return;
                }
            default:
                return;
        }
    };

    const onChangeQuantity = (e) => {
        const value = e.target.value;
        if (value === '' || (!isNaN(value) && parseInt(value, 10) >= 0)) {
            setQuantity(value);
        }
    };

    const onBlurQuantity = () => {
        if (quantity === '' || isNaN(parseInt(quantity, 10))) {
            setQuantity(0);
        }
        setIsEditing(false);
    };

    const onFocusQuantity = () => {
        setIsEditing(true);
    };

    const handleEditProduct = () => {
        alert(`Producto ${title} editado`);
    };

    const handleDeleteProduct = () => {
        alert(`Producto ${title} eliminado`);
    };

    const handleChangeCategory = () => {
        alert(`Categoría del producto ${title} cambiada`);
    };

    const handleChangeImage = () => {
        alert(`Imagen del producto ${title} cambiada`);
    };

    return (
        <div className="cardProductoEdit">
            <div className="containerImage">
                <img className="imageProduct" src={image} alt={title} />
                <button className="changeImageButton" onClick={handleChangeImage}>Cambiar Imagen</button>
            </div>
            <div className="containerInfo">
                <input type="text" className="inputField" defaultValue={title} placeholder="Nombre del Producto" />
                <textarea className="inputField" defaultValue={description} placeholder="Descripción del Producto"></textarea>
                <div className="title" style={{ fontWeight: 'normal', marginTop: '1%', fontSize: 15 }}>
                    <div style={{ fontWeight: 'bold' }}>Precios:</div>
                    {precios && precios.map((precio, index) => (
                        <div key={index}>{`${precio[0]}: Q ${precio[1]}.00`}</div>
                    ))}
                </div>
            </div>
            <div className="addToCartContainer">
                <div className="containerActions">
                    <div className="button" onClick={() => onHandlerClickButton("-")}>-</div>
                    <input
                        type="number"
                        className="button"
                        value={isEditing ? quantity : parseInt(quantity, 10)}
                        onChange={onChangeQuantity}
                        onBlur={onBlurQuantity}
                        onFocus={onFocusQuantity}
                    />
                    <div className="button" onClick={() => onHandlerClickButton("+")}>+</div>
                </div>
                <button className="editButton" onClick={handleEditProduct}>Editar Producto</button>
                <button className="deleteButton" onClick={handleDeleteProduct}>Eliminar Producto</button>
                <button className="changeCategoryButton" onClick={handleChangeCategory}>Cambiar Categoría</button>
            </div>
        </div>
    );
};

CardProductEdit.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    precios: PropTypes.array
};

export default CardProductEdit;