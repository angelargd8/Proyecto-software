import CardProduct from "../cardProduct/cardProd"
import { useParams } from "react-router-dom"
import './products.css'

const Products = () => {
    const { detail } = useParams();
    console.log(detail)
    return (
        <div className="container">
            {detail == 'Brillantina' && (
                <>
                <CardProduct id={"1"} title={"Carton de brillantina Tierra"} description={'Cartones de brillantina de 40 sobre estilo tierra'} image={'../src/assets/img/Brillantina-tierra.jpg'} precios={[["Unidad",12, 1],["Docena",10,12],["millar", 9, 15]]}></CardProduct>
                <CardProduct id={"2"} title={"Carton de brillantina Surtida"} description={'Cartones de brillantina de 40 sobre estilo surtida'} image={'../src/assets/img/Brillantina-surtida.jpg'} precios={[["Unidad",12, 1],["Docena",10, 12]]} ></CardProduct>
                <CardProduct id={"3"} title={"Carton de brillantina Tornasol"} description={'Cartones de brillantina de 40 sobre estilo tornasol'} image={'../src/assets/img/Brillantina-tornasol.jpg'} precios={[["Unidad",12, 1],["Docena",10, 12]]}></CardProduct>
                </>
            )}
            {detail == 'Ojos' && (
                <>
                <CardProduct id={"1"} title={"Carton ojitos pequeños"} description={'Cartones de ojos de 20 sobres tamaño pequeño'} image={'../src/assets/img/Ojos/OJITOS NO 1.jpg'} precios={[["Unidad",12, 12],["Docena",10]]}></CardProduct>
                <CardProduct id={"2"} title={"Carton ojitos grandes"} description={'Cartones de ojos de 20 sobres tamaño grande'} image={'../src/assets/img/Ojos/OJITOS 2.jpg'} precios={[["Unidad",12],["Docena",10]]} ></CardProduct>
                </>
            )}
            {detail == 'Añelina' && (
                <>
                    <CardProduct id={"1"} title={"Carton de añelina"} description={'Cartones de añelina de 40 sobres de colores'} image={'../src/assets/img/Colorante/AÑELINA.jpg'} precios={[["Unidad",50],["Docena",45]]}></CardProduct>
                    <CardProduct id={"2"} title={"Carton de colorante vegetal"} description={'Carton de colorante vegetal de 40 sobres de colores'} image={'../src/assets/img/Colorante/COLORANTE VEGETAL.jpg'} precios={[["Unidad",70],["Docena",65]]} ></CardProduct>
                </>
            )}
            {detail == 'Pulseras' && (
                <>
                    <CardProduct id={"1"} title={"Carton de añelina"} description={'Cartones de añelina de 40 sobres de colores'} image={'../src/assets/img/Colorante/AÑELINA.jpg'} precios={[["Unidad",50],["Docena",45]]}></CardProduct>
                    <CardProduct id={"2"} title={"Carton de colorante vegetal"} description={'Carton de colorante vegetal de 40 sobres de colores'} image={'../src/assets/img/Colorante/COLORANTE VEGETAL.jpg'} precios={[["Unidad",70],["Docena",65]]} ></CardProduct>
                </>
            )}
            {detail == 'Flores' && (
                <>
                    <CardProduct id={"1"} title={"Carton de añelina"} description={'Cartones de añelina de 40 sobres de colores'} image={'../src/assets/img/Colorante/AÑELINA.jpg'} precios={[["Unidad",50],["Docena",45]]}></CardProduct>
                    <CardProduct id={"2"} title={"Carton de colorante vegetal"} description={'Carton de colorante vegetal de 40 sobres de colores'} image={'../src/assets/img/Colorante/COLORANTE VEGETAL.jpg'} precios={[["Unidad",70],["Docena",65]]} ></CardProduct>
                </>
            )}
        </div>
    )
}

export default Products