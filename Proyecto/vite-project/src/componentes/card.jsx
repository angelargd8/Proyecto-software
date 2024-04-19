import './card.css';

function Card({title, content, click}){
    return (
        <div className="card" onClick={() => click(title)}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>    
    )
}

export default Card;