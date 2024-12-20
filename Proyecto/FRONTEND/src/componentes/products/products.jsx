import CardProduct from "../cardProduct/cardProd";
import { useParams } from "react-router-dom";
import "./products.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useGraphqlApi from "../../hooks/useGraphqlApi";
import EmptyCardProd from "../cardProduct/components/EmptyCardProd";
import useWindowSize from "../../hooks/useWindowDimensions";

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const { fetchData, loading } = useGraphqlApi();
  const { cardInfo } = location.state;
  const { idCategory } = cardInfo;

  useEffect(() => {
    const getProducts = async () => {
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
      const data = await fetchData(query, { idCategory: idCategory });
      if (data) {
        setProducts(data.getItemsByCategory);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container">
      {loading == false && products.length > 0 ? (
        products.map((product, index) => {
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
        })
      ) : loading ? (
        <EmptyCardProd />
      ) : (
        <div
          style={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 300,
              height: 300,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/img/noData2.png"
              alt="No hay productos"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <h2 style={{ alignSelf: "center" }}>
            Actualmente no hay productos para esta categoria
          </h2>
        </div>
      )}
    </div>
  );
};

export default Products;
