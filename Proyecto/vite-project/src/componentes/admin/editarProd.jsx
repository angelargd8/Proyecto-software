import EditCardProduct from "./editCardProd";
import { useParams } from "react-router-dom";
import './editarProd.css';

const EditarProd = () => {
    const { detail } = useParams();
    console.log(detail);
    return (
        <div className="container-edit-prod">
            {detail == 'Brillantina' && (
                <>
                    <EditCardProduct id={"1"} title={"Carton de brillantina Tierra"} description={'Cartones de brillantina de 40 sobre estilo tierra'} image={'../src/assets/img/Brillantina-tierra.jpg'} precios={[["Unidad",12],["Docena",10]]}></EditCardProduct>
                    <EditCardProduct id={"2"} title={"Carton de brillantina Surtida"} description={'Cartones de brillantina de 40 sobre estilo surtida'} image={'../src/assets/img/Brillantina-surtida.jpg'} precios={[["Unidad",12],["Docena",10]]} ></EditCardProduct>
                    <EditCardProduct id={"3"} title={"Carton de brillantina Tornasol"} description={'Cartones de brillantina de 40 sobre estilo tornasol'} image={'../src/assets/img/Brillantina-tornasol.jpg'} precios={[["Unidad",12],["Docena",10]]}></EditCardProduct>
                </>
            )}
            {detail == 'Ojos' && (
                <>
                    <EditCardProduct id={"1"} title={"Carton ojitos pequeños"} description={'Cartones de ojos de 20 sobres tamaño pequeño'} image={'../src/assets/img/Ojos/OJITOS NO 1.jpg'} precios={[["Unidad",12],["Docena",10]]}></EditCardProduct>
                    <EditCardProduct id={"2"} title={"Carton ojitos grandes"} description={'Cartones de ojos de 20 sobres tamaño grande'} image={'../src/assets/img/Ojos/OJITOS 2.jpg'} precios={[["Unidad",12],["Docena",10]]} ></EditCardProduct>
                </>
            )}
            {detail == 'Añelina' && (
                <>
                    <EditCardProduct id={"1"} title={"Carton de añelina"} description={'Cartones de añelina de 40 sobres de colores'} image={'../src/assets/img/Colorante/AÑELINA.jpg'} precios={[["Unidad",50],["Docena",45]]}></EditCardProduct>
                    <EditCardProduct id={"2"} title={"Carton de colorante vegetal"} description={'Carton de colorante vegetal de 40 sobres de colores'} image={'../src/assets/img/Colorante/COLORANTE VEGETAL.jpg'} precios={[["Unidad",70],["Docena",65]]} ></EditCardProduct>
                </>
            )}
            {detail == 'Pulseras' && (
                <>
                    <EditCardProduct id={"1"} title={"Carton de añelina"} description={'Cartones de añelina de 40 sobres de colores'} image={'../src/assets/img/Colorante/AÑELINA.jpg'} precios={[["Unidad",50],["Docena",45]]}></EditCardProduct>
                    <EditCardProduct id={"2"} title={"Carton de colorante vegetal"} description={'Carton de colorante vegetal de 40 sobres de colores'} image={'../src/assets/img/Colorante/COLORANTE VEGETAL.jpg'} precios={[["Unidad",70],["Docena",65]]} ></EditCardProduct>
                </>
            )}
            {detail == 'Flores' && (
                <>
                    <EditCardProduct id={"1"} title={"Carton de añelina"} description={'Cartones de añelina de 40 sobres de colores'} image={'../src/assets/img/Colorante/AÑELINA.jpg'} precios={[["Unidad",50],["Docena",45]]}></EditCardProduct>
                    <EditCardProduct id={"2"} title={"Carton de colorante vegetal"} description={'Carton de colorante vegetal de 40 sobres de colores'} image={'../src/assets/img/Colorante/COLORANTE VEGETAL.jpg'} precios={[["Unidad",70],["Docena",65]]} ></EditCardProduct>
                </>
            )}
        </div>
    );
};

export default EditarProd;
