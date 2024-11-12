import React from "react";
import Card from "./components/card.jsx";
import "./home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useGraphqlApi from "../../hooks/useGraphqlApi.jsx";
import EmptyCardDisplay from "./components/EmptyCardDisplay";

// aqui se muestran las categorías de productos

function Home() {
  const [listadoCards, setCards] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { fetchData, loading } = useGraphqlApi();

  // ir al apartado de detalles
  const info = (title, cardInfo) => {
    navigate(`/detalles/${title}`, { state: { cardInfo } });
  };

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  // cargar las cards
  const cargarCards = async () => {
    const searchParams = new URLSearchParams(location.search);
    const searchItem = searchParams.get("search") || "";

    // tests:
    // var url = process.env.VITE_APIPORT;
    const query = `
      query GetCategories {
          getCategories {
            idCategory
            image
            name
          }
      }
    `;

    let data = await fetchData(query);
    if (data) {
      const cards = data.getCategories;
      if (searchItem.trim() === "") {
        setCards(cards);
      } else {
        const filteredCards = cards.filter((card) =>
          card.name.toLowerCase().includes(searchItem.toLowerCase())
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
      <div className="inner-container">
        <h1 className="categorias">Categorias</h1>
        <p className="bienvenida">Bienvenido a la página de inicio</p>
        <hr></hr>
        <div id="contenido-cartas">
          {loading === false
            ? listadoCards.map((elemento) => (
                <div key={elemento.idCategory} className="categor-card">
                  <Card
                    title={elemento.name}
                    imagen={elemento.image}
                    onClick={() => info(elemento.name, elemento)}
                  />
                </div>
              ))
            : Array.from({ length: 3 }, (_, index) => (
                <EmptyCardDisplay key={index} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
