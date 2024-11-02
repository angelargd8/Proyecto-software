import CardCategoria from "./cardCategoriaE";
import "./editarCateg.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function EditCateg() {
  const [listadoCards, setCards] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Ir al apartado de edición de productos
  const info = (title, cardInfo) => {
    navigate(`/editarProductos/${title}`, { state: { cardInfo } });
  };

  // Eliminar categoría
  const eliminarCategoria = (id) => {
    const newCards = [...listadoCards].filter((card) => card.idCategory !== id);
    setCards(newCards);
    console.log(id, newCards);
  };

  // Agregar categoría
  const agregarCategoria = () => {
    navigate("/agregarCategoria");
  };

  // Cargar las cards
  const cargarCards = async () => {
    const searchParams = new URLSearchParams(location.search);
    const searchItem = searchParams.get("search") || "";

    // const url = import.meta.env.VITE_APIPORT;
    // tests: 
    var url = process.env.VITE_APIPORT;
    const query = `
      query GetCategories {
          getCategories {
            idCategory
            image
            name
          }
      }
    `;
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    let data = await result.json();
    const cards = data.data.getCategories;

    if (searchItem.trim() === "") {
      setCards(cards);
    } else {
      const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(searchItem.toLowerCase())
      );
      setCards(filteredCards);
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
          <div key={elemento.idCategory} className="category-carde">
            <CardCategoria
              title={elemento.name}
              imagen={elemento.image}
              
            />
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
              Eliminar 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditCateg;
