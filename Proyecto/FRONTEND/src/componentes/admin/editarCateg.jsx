import CardCategoria from "./cardCategoriaE";
import "./editarCateg.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useGraphqlApi from "../../hooks/useGraphqlApi";
import Swal from "sweetalert2";

function EditCateg() {
  const [listadoCards, setCards] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { fetchData } = useGraphqlApi();

  // Ir al apartado de edición de productos
  const info = (title, cardInfo) => {
    navigate(`/editarProductos/${title}`, { state: { cardInfo } });
  };

  const editCategory = (title) => {
    navigate(`/editarCategoria/${title}`);
  };

  // Eliminar categoría
  const eliminarCategoria = async (id) => {
    const query = `
      mutation DeleteCategory($idCategory: Int!) {
        deleteCategory(idCategory: $idCategory) {
          message
          status  
        }
      }
    `;
    const data = await fetchData(query, { idCategory: id });

    if (data) {
      if (data.deleteCategory.status) {
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: data.deleteCategory.message,
        });
        cargarCards();
        setCards(newCards);
      } else {
        Swal.fire({
          icon: "warning",
          title: "Cuidado",
          text: data.deleteCategory.message,
        });
      }
    }
  };

  // Agregar categoría
  const agregarCategoria = () => {
    navigate("/agregarCategoria");
  };

  // Cargar las cards
  const cargarCards = async () => {
    const searchParams = new URLSearchParams(location.search);
    const searchItem = searchParams.get("search") || "";

    const query = `
      query GetCategories {
          getCategories {
            idCategory
            image
            name
          }
      }
    `;
    const data = await fetchData(query);

    if (data) {
      const cards = data.getCategories;
      if (searchItem.trim() === "") {
        setCards(cards);
      } else {
        const filteredCards = cards.filter((card) =>
          card.title.toLowerCase().includes(searchItem.toLowerCase())
        );
        setCards(filteredCards);
      }
    }
  };

  useEffect(() => {
    cargarCards();
  }, [location.search]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("search")) {
      searchParams.delete("search");
      navigate(`/home?${searchParams.toString()}`, { replace: true });
    }
  }, []);

  return (
    <div className="container-home">
      <div className="headerc">
        <h1>Editar Categorías</h1>
        <button className="agregar-categoria-button" onClick={agregarCategoria}>
          Agregar Categoría
        </button>
      </div>
      <div id="contenido-cartase">
        {listadoCards.map((elemento) => (
          <div
            key={elemento.idCategory}
            className="category-carde"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <CardCategoria title={elemento.name} imagen={elemento.image} />
            <button
              className="editar-button"
              onClick={() => info(elemento.name, elemento)}
            >
              Editar productos
            </button>
            <button
              className="eliminar-button"
              onClick={() => eliminarCategoria(elemento.idCategory)}
            >
              Eliminar Categoría
            </button>
            <button
              className="editar-button-categoria"
              onClick={() => editCategory(elemento.name)}
            >
              Editar Categoría
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditCateg;
