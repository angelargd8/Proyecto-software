import Card from "./card.jsx";
import './home.css';
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom"

function Home() {
  const [listadoCards, setCards] = useState([])
  const location = useLocation()
  const navigate = useNavigate()


  // ir al apartado de detalles
  const info = (title, cardInfo) => {
    navigate(`/detalles/${title}`,{ state: { cardInfo } })
  }

  // cargar las cards
  const cargarCards = () => {
    const searchParams = new URLSearchParams(location.search)
    const searchItem = searchParams.get('search') || ''

    const cards = [
      {id: 1, title: "Cartulina", content: "Q3.75", imagen: "../src/assets/img/cartulina.jpg"},
      {id: 2, title: "Cuaderno", content: "Q48.75", imagen: "../src/assets/img/cuadernos.png"},
      {id: 3, title: "Pegatinas", content: "Q12.00", imagen: "../src/assets/img/pegatinas.jpg"},
      {id: 4, title: "plumas", content: "Q24.50", imagen: "../src/assets/img/plumas.jpg"},
      {id: 5, title: "Ojitos locos", content: "Q12.00", imagen: "../src/assets/img/ojosmoviles.jpeg"},
    ]

    if (searchItem.trim() === ''){
      setCards(cards)
    } else {
      const filteredCards = cards.filter(card => card.title.toLowerCase().includes(searchItem.toLowerCase()))
      setCards(filteredCards)
    }
  }

  useEffect(() => {
    cargarCards()
  }, [location.search])  

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    if (searchParams.get('search')) {
      searchParams.delete('search')
      navigate(`/home?${searchParams.toString()}`, { replace: true })
    }
  }, [])

  return (
    <div className="home">
      <h1>Home</h1>
      <p>Bienvenido a la página de inicio</p>
      {listadoCards.map((elemento) => (
        <Card key={elemento.id} title={elemento.title} content={elemento.content} imagen={elemento.imagen} onClick={() => info(elemento.title, elemento)}/>
      ))}

    </div>
  );
}

export default Home