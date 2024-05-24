import CardProduct from "../cardProduct"
import './products.css'

const Products = () => {
    return (
        <div className="container">
            <CardProduct text={"Carton de brillantina Tierra"} image={'../src/assets/img/Brillantina-tierra.jpg'} description={'Cartones de brillantina de 40 sobre estilo tierra'} precios={[["Unidad",12],["Docena",10]]}></CardProduct>
            <CardProduct text={"Carton de brillantina Surtida"} image={'../src/assets/img/Brillantina-surtida.jpg'} description={'Cartones de brillantina de 40 sobre estilo surtida'} precios={[["Unidad",12],["Docena",10]]}></CardProduct>
            <CardProduct text={"Carton de brillantina Tornasol"} image={'../src/assets/img/Brillantina-tornasol.jpg'} description={'Cartones de brillantina de 40 sobre estilo tornasol'} precios={[["Unidad",12],["Docena",10]]}></CardProduct>
        </div>
    )
}

export default Products