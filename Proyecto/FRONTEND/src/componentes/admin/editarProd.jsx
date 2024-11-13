import CardProduct from "./cardProdEditar";
import { useParams } from "react-router-dom";
import "./editarProd.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGraphqlApi from "../../hooks/useGraphqlApi";

const EditarProd = () => {
  const location = useLocation();
  const { cardInfo } = location.state;
  const { idCategory } = cardInfo;
  const { fetchData, loading } = useGraphqlApi();

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/agregarProducto", { state: { id: idCategory } });
  };

  const handleDeleteProduct = (idItem) => {
    console.log("Eliminar producto", idItem);
  };

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

  const { detail } = useParams();
  return (
    <div className="container">
      <h1>Editar Productos</h1>
      <button className="agregarProductoButton" onClick={handleAddProduct}>
        Agregar Producto
      </button>
      {detail == "Brillantina" && (
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
                onEditProduct={() => {}}
                onDeleteProduct={() => handleDeleteProduct(product.idItems)}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default EditarProd;
