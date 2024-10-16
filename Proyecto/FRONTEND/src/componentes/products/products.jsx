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
    </div>
  );
};

export default Products;
