import Card from "./card.jsx";
import './home.css';
import { useState, useEffect} from 'react';

function Home() {
  const [listadoCards, setCards] = useState([]);


  // cargar las cards
  function cargarCards(){
    setCards([
      {title: "Card 1", content: "Contenido de la tarjeta 1"},
      {title: "Card 2", content: "Contenido de la tarjeta 2"},
      {title: "Card 3", content: "Contenido de la tarjeta 3"},
      {title: "Card 4", content: "Contenido de la tarjeta 4"},
      {title: "Card 5", content: "Contenido de la tarjeta 5"},
    ]);
  }
  

  // mostrar un alert con el nombre de la card seleccionada
  function info(name){
    alert("Elegiste la card " + name);
  }

  useEffect(() => {
    cargarCards()
    }, [])  

  return (
    <div className="home">
      <h1>Home</h1>
      <p>Bienvenido a la página de inicio</p>
      <a href="/login">Cerrar sesión</a>
      {listadoCards.map((elemento) => {
        return <Card title={elemento.title} content={elemento.content} click={info} />
      })}

    </div>
  );
}

export default Home