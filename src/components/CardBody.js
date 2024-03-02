import '../App.css';

function CardBody({ children }) {
    return (
        <div className="card__body">
            <h2 className="card__title">{children.title}</h2>
            <p className="card__text">{children.description}</p>
            <a href="#" className="card__btn">Go somewhere</a>
        </div>
    );
}

export default CardBody;