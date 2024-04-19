import './card.css';

function Card({title, content, imagen,click}){
    return (
        <div className="card" onClick={() => click(title)}>
            <h2>{title}</h2>
            <img className='imagen' src={imagen} alt="Imagen no disponible" />
            <p>{content}</p>
        </div>    
    )
}

export default Card;