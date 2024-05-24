import './cardProducto.css'
import Proptypes from 'prop-types'
import { useState } from 'react'

const CardProduct = ({text, description, image, precios, styleCard, styleImage}) => {

    const [quantity, setQuantity] = useState(0)
    const [isEditing, setIsEditing] = useState(false)

    const onHandlerClickButton = (type) => {
        switch(type){
            case "+":{
                setQuantity(prevQuantity => parseInt(prevQuantity, 10) + 1)
                return
            }
            case "-":{
                if(quantity > 0){
                    setQuantity(prevQuantity => parseInt(prevQuantity, 10) - 1)
                    return
                }
            }
            default:
                return
        }
    }

    const onChangeQuantity = (e) => {
        const value = e.target.value
        if (value === '' || (!isNaN(value) && parseInt(value, 10) >= 0)) {
            setQuantity(value)
        }
    }

    const onBlurQuantity = () => {
        if (quantity === '' || isNaN(parseInt(quantity, 10))) {
            setQuantity(0)
        }
        setIsEditing(false)
    }

    const onFocusQuantity = () => {
        setIsEditing(true)
    }

    const handleAddToCart = () => {
        alert(`Agregado ${quantity} ${text} al carrito`)
    }

    return (
        <div className="cardProducto" style={styleCard}>
            <div className='containerImage' style={styleImage}>
                <img className='imageProduct' src={image}></img>
            </div>
            <div className='containerInfo'>
                <div className='title'>
                    {text}
                </div>
                <div className='title' style={{fontWeight:'normal',wordWrap:'break-word', marginTop:"1%", fontSize:15}}>
                    {description}
                </div>
                <div className='title' style={{fontWeight:'normal',wordWrap:'break-word', marginTop:"1%", fontSize:15}}>
                    <div style={{fontWeight:'bold'}}>Precios:</div>
                    {precios && precios.map((precio, index) => {
                        return <div key={index}>{`${precio[0]}: Q ${precio[1]}.00`}</div>
                    })}
                </div>
            </div>
            <div className='addToCartContainer'>
                <div className='containerActions'>
                    <div className='button' style={{ fontSize:20, textAlign:'center',}} onClick={() => onHandlerClickButton("-")}>
                        -
                    </div>
                    <input
                        type="number"
                        className='button'
                        style={{backgroundColor:'white', color:'black', fontSize:20, borderRadius:"0%", border:"1px solid black", textAlign: 'center'}}
                        value={isEditing ? quantity : parseInt(quantity,10)}
                        onChange={onChangeQuantity}
                        onBlur = {onBlurQuantity}
                        onFocus={onFocusQuantity}
                    />
                    <div className='button' style={{ fontSize:20}} onClick={() => onHandlerClickButton("+")}>
                        +
                    </div>
                </div>
                <button className='addToCartButton' onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

CardProduct.propTypes = {
    text: Proptypes.string,
    styleCard: Proptypes.any,
    styleImage: Proptypes.any,
    description: Proptypes.any,
    image: Proptypes.any,
    precios: Proptypes.any
}

export default CardProduct