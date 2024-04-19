import Card from "./card.jsx";
import './home.css';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {
  const [listadoCards, setCards] = useState([]);
  const navigate = useNavigate()


  // ir al apartado de detalles
  const info = (title, cardInfo) => {
    navigate(`/detalles/${title}`,{ state: { cardInfo } })
  }

  // cargar las cards
  function cargarCards(){
    setCards([
      {title: "Cartulina", content: "Q3.75", imagen: "../src/assets/img/cartulina.jpg"},
      {title: "Cuaderno", content: "Q48.75", imagen: "../src/assets/img/cuadernos.png"},
      {title: "Pegatinas", content: "Q12.00", imagen: "../src/assets/img/pegatinas.jpg"},
      {title: "plumas", content: "Q24.50", imagen: "../src/assets/img/plumas.jpg"},
      {title: "Ojitos locos", content: "Q12.00", imagen: "../src/assets/img/ojosmoviles.jpeg"},
    ]);
  }

  useEffect(() => {
    cargarCards()
    }, [])  

  return (
    <div className="home">
      <h1>Home</h1>
      <p>Bienvenido a la página de inicio</p>
      <a href="/login">Cerrar sesión</a>
      {listadoCards.map((elemento) => (
        <Card key={elemento.title} title={elemento.title} content={elemento.content} imagen={elemento.imagen} click={() => info(elemento.title,elemento)} />
      ))}

    </div>
  );
}

export default Home