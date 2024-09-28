import CardProduct from "../cardProduct/cardProd";
import { useParams } from "react-router-dom";
import "./products.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const { cardInfo } = location.state;
  const { idCategory } = cardInfo;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const url = import.meta.env.VITE_APIPORT;
      const query = `
            query GetItemsByCategory($idCategory: Int!) {
                getItemsByCategory(idCategory: $idCategory) {
                    name
                    description
                    idItems
                    quantity
                    image
                    prices {
                        name
                        price
                        quantity
                    }
                }
            }
        `;
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: {
              idCategory: idCategory,
            },
          }),
        });

        const data = await response.json();
        setProducts(data.data.getItemsByCategory);
      } catch (error) {}
    };

    getProducts();
  }, []);

  const { detail } = useParams();
  return (
    <div className="container">
      {detail == "Brillantina" && (
        // <>
        //   <CardProduct
        //     id={"1"}
        //     title={"Carton de brillantina Tierra"}
        //     description={"Cartones de brillantina de 40 sobre estilo tierra"}
        //     image={"../src/assets/img/Brillantina-tierra.jpg"}
        //     precios={[
        //       ["Unidad", 12, 1],
        //       ["Docena", 10, 12],
        //       ["millar", 9, 15],
        //     ]}
        //   ></CardProduct>
        //   <CardProduct
        //     id={"2"}
        //     title={"Carton de brillantina Surtida"}
        //     description={"Cartones de brillantina de 40 sobre estilo surtida"}
        //     image={"../src/assets/img/Brillantina-surtida.jpg"}
        //     precios={[
        //       ["Unidad", 12, 1],
        //       ["Docena", 10, 12],
        //     ]}
        //   ></CardProduct>
        //   <CardProduct
        //     id={"3"}
        //     title={"Carton de brillantina Tornasol"}
        //     description={"Cartones de brillantina de 40 sobre estilo tornasol"}
        //     image={"../src/assets/img/Brillantina-tornasol.jpg"}
        //     precios={[
        //       ["Unidad", 12, 1],
        //       ["Docena", 10, 12],
        //     ]}
        //   ></CardProduct>
        // </>
        <>
          {products.map((product, index) => {
            return (
              <CardProduct
                key={index}
                id={index}
                title={product.name}
                description={product.description}
                image={product.image}
                precios={product.prices}
              />
            );
          })}
        </>
      )}
      {detail == "Ojos" && (
        <>
          <CardProduct
            id={"1"}
            title={"Carton ojitos pequeños"}
            description={"Cartones de ojos de 20 sobres tamaño pequeño"}
            image={"../src/assets/img/Ojos/OJITOS NO 1.jpg"}
            precios={[
              ["Unidad", 12, 12],
              ["Docena", 10],
            ]}
          ></CardProduct>
          <CardProduct
            id={"2"}
            title={"Carton ojitos grandes"}
            description={"Cartones de ojos de 20 sobres tamaño grande"}
            image={"../src/assets/img/Ojos/OJITOS 2.jpg"}
            precios={[
              ["Unidad", 12],
              ["Docena", 10],
            ]}
          ></CardProduct>
        </>
      )}
      {detail == "Añelina" && (
        <>
          <CardProduct
            id={"1"}
            title={"Carton de añelina"}
            description={"Cartones de añelina de 40 sobres de colores"}
            image={"../src/assets/img/Colorante/AÑELINA.jpg"}
            precios={[
              ["Unidad", 50],
              ["Docena", 45],
            ]}
          ></CardProduct>
          <CardProduct
            id={"2"}
            title={"Carton de colorante vegetal"}
            description={"Carton de colorante vegetal de 40 sobres de colores"}
            image={"../src/assets/img/Colorante/COLORANTE VEGETAL.jpg"}
            precios={[
              ["Unidad", 70],
              ["Docena", 65],
            ]}
          ></CardProduct>
        </>
      )}
      {detail == "Pulseras" && (
        <>
          <CardProduct
            id={"1"}
            title={"Carton de añelina"}
            description={"Cartones de añelina de 40 sobres de colores"}
            image={"../src/assets/img/Colorante/AÑELINA.jpg"}
            precios={[
              ["Unidad", 50],
              ["Docena", 45],
            ]}
          ></CardProduct>
          <CardProduct
            id={"2"}
            title={"Carton de colorante vegetal"}
            description={"Carton de colorante vegetal de 40 sobres de colores"}
            image={"../src/assets/img/Colorante/COLORANTE VEGETAL.jpg"}
            precios={[
              ["Unidad", 70],
              ["Docena", 65],
            ]}
          ></CardProduct>
        </>
      )}
      {detail == "Flores" && (
        <>
          <CardProduct
            id={"1"}
            title={"Carton de añelina"}
            description={"Cartones de añelina de 40 sobres de colores"}
            image={"../src/assets/img/Colorante/AÑELINA.jpg"}
            precios={[
              ["Unidad", 50],
              ["Docena", 45],
            ]}
          ></CardProduct>
          <CardProduct
            id={"2"}
            title={"Carton de colorante vegetal"}
            description={"Carton de colorante vegetal de 40 sobres de colores"}
            image={"../src/assets/img/Colorante/COLORANTE VEGETAL.jpg"}
            precios={[
              ["Unidad", 70],
              ["Docena", 65],
            ]}
          ></CardProduct>
        </>
      )}
    </div>
  );
};

export default Products;
