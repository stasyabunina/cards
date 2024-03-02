import { v4 as uuidv4 } from 'uuid';
import catImg from '../img/koen-eijkelenboom-Qpjl_dXQrD8-unsplash.jpg';

const cards = [
    {
        id: uuidv4(),
        title: "Card title",
        description: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        url: catImg,
        altImg: "Cat",
    },
    {
        id: uuidv4(),
        title: "Special title treatment",
        description: "With supporting text below as a natural lead-in to additional content.",
    }
]

export default cards;