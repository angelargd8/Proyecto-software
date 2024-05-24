import './card.css';
import PropTypes from 'prop-types';

function Card({title, content, imagen, onClick}){
    return (
        <div className="card-category" onClick={onClick}>
            <h2>{title}</h2>
            <div className='card-content-category'>
                <img className='imagen-category' src={imagen} alt="Imagen no disponible" />
            </div>
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