import './card.css';
import PropTypes from 'prop-types';

function Card({title, content, imagen, onClick}){
    return (
        <div className="card" onClick={onClick}>
            <h2>{title}</h2>
            <img className='imagen' src={imagen} alt="Imagen no disponible" />
            <p>{content}</p>
        </div>    
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Card