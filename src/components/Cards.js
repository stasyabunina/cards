import '../App.css';

function Cards(props) {
    return (
        <div className="container">
            <ul className="cards">
                {props.children(props.items)}
            </ul>
        </div>
    );
}

export default Cards;
