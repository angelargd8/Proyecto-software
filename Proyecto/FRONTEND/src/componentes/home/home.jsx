import Card from "./card.jsx";
import "./home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// aqui se muestran las categorías de productos

function Home() {
  const [listadoCards, setCards] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // ir al apartado de detalles
  const info = (title, cardInfo) => {
    navigate(`/detalles/${title}`, { state: { cardInfo } });
  };

  // cargar las cards
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
        card.name.toLowerCase().includes(searchItem.toLowerCase())
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
      <div className="container-categorias">
        <h1 className="categorias">Categorias</h1>
        <p className="bienvenida">Bienvenido a la página de inicio</p>
        <hr></hr>
        <div id="contenido-cartas">
          {listadoCards.map((elemento) => (
            <div key={elemento.idCategory} className="categor-card">
              <Card
                title={elemento.name}
                imagen={elemento.image}
                onClick={() => info(elemento.name, elemento)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
