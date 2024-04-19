import Card from "./card.jsx";
import './home.css';
import { useState, useEffect} from 'react';

function Home() {
  const [listadoCards, setCards] = useState([]);


  // cargar las cards
  function cargarCards(){
    setCards([
      {title: "Cartulina", content: "Contenido de la tarjeta 1", imagen: "../src/assets/img/cartulina.jpg"},
      {title: "Cuaderno", content: "Contenido de la tarjeta 2", imagen: "../src/assets/img/cuadernos.png"},
      {title: "Pegatinas", content: "Contenido de la tarjeta 3", imagen: "../src/assets/img/pegatinas.jpg"},
      {title: "plumas", content: "Contenido de la tarjeta 4", imagen: "../src/assets/img/plumas.jpg"},
      {title: "Ojitos locos", content: "Contenido de la tarjeta 5", imagen: "../src/assets/img/ojosmoviles.jpeg"},
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
        return <Card title={elemento.title} content={elemento.content} imagen={elemento.imagen} click={info} />
      })}

    </div>
  );
}

export default Home