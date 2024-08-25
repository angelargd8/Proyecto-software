import Card from "../home/card";
import "./editarCateg.css";
import { useState, useEffect } from "react";
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
    const newCards = listadoCards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  // Agregar categoría
  const agregarCategoria = () => {
    navigate("/agregarCategoria");
  };

  // Cargar las cards
  const cargarCards = async () => {
    const searchParams = new URLSearchParams(location.search);
    const searchItem = searchParams.get("search") || "";

    const url = import.meta.env.VITE_APIPORT;
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
      <div className="header">
        <h1>Editar Categorías</h1>
        <button className="agregar-categoria-button" onClick={agregarCategoria}>
          Agregar Categoría
        </button>
      </div>
      <div id="contenido-cartas">
        {listadoCards.map((elemento) => (
          <div key={elemento.idCategory} className="category-card">
            <Card
              title={elemento.name}
              imagen={elemento.image}
              onClick={() => info(elemento.name, elemento)}
            />
            <button
              className="eliminar-button"
              onClick={() => eliminarCategoria(elemento.idCategory)}
            >
              Eliminar Categoría
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditCateg;
