import './cardProducto.css'
import Proptypes from 'prop-types'
import { useState } from 'react'

const CardProduct = ({text, description, image, precios, styleCard, styleImage}) => {

    const [quantity, setQuantity] = useState(0);

    const onHandlerClickButton = (type) => {
        switch(type){
            case "+":{
                let prevQuantity = quantity
                setQuantity(prevQuantity + 1)
                return
            }
            case "-":{
                if(quantity != 0){
                    let prevQuantity = quantity
                    setQuantity(prevQuantity - 1)
                    return
                }
            }
        }
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
                        return <div key={index}>{`${precio[0]}: ${precio[1]}`}</div>
                    })}
                </div>
            </div>
            <div className='containerActions'>
                <div className='button' style={{ fontSize:20, textAlign:'center',}} onClick={() => onHandlerClickButton("-")}>
                    -
                </div>
                <div className='button' style={{backgroundColor:'white', color:'black', fontSize:20, borderRadius:"0%", border:"1px solid black"}}>
                    {quantity}
                </div>
                <div className='button' style={{ fontSize:20}} onClick={() => onHandlerClickButton("+")}>
                    +
                </div>
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