import "../App.css";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

function Card(props) {
    const { url } = props.children;
    
    return (
        <li className="card">
            <article className="card__wrapper">
                {url && (<CardImage {...props} />)}
                <CardBody {...props}></CardBody>
            </article>
        </li>
    );
}

export default Card;