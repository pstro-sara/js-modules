import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css'

export default () => {
    const image = document.createElement('img');
    image.src = big;

    document.body.appendChild(image);
};