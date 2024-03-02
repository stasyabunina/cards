import '../App.css';

function CardImage({ children }) {
    return (
        <img src={children.url} className="card__img" alt={children.alt} />
    )
}

export default CardImage;