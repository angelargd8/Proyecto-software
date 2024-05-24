import CardProduct from "../cardProduct"
import './products.css'

const Products = () => {
    return (
        <div className="container">
            <CardProduct id={"1"} title={"Carton de brillantina Tierra"} description={'Cartones de brillantina de 40 sobre estilo tierra'} image={'../src/assets/img/Brillantina-tierra.jpg'} precios={[["Unidad",12],["Docena",10]]}></CardProduct>
            <CardProduct id={"2"} title={"Carton de brillantina Surtida"} description={'Cartones de brillantina de 40 sobre estilo surtida'} image={'../src/assets/img/Brillantina-surtida.jpg'} precios={[["Unidad",12],["Docena",10]]} ></CardProduct>
            <CardProduct id={"3"} title={"Carton de brillantina Tornasol"} description={'Cartones de brillantina de 40 sobre estilo tornasol'} image={'../src/assets/img/Brillantina-tornasol.jpg'} precios={[["Unidad",12],["Docena",10]]}></CardProduct>
        </div>
    )
}

export default Products