import './card.css';
import PropTypes from 'prop-types';

function Card({title, imagen, onClick}){
    return (
        <div className="card-category" onClick={onClick}>
            <div className='card-content-category'>
                <img className='imagen-category' src={imagen} alt="Imagen no disponible" />
            </div>
            <h2 id='title-card'>{title}</h2>

        </div>    
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Card