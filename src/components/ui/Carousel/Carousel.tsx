import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import classes from "./Carousel.module.scss";

type Props = {
	texts: [];
}

const handleDragStart = (e: any) => e.preventDefault();

const pictures = [
	<img className={classes.carousel} src="./src/assets/images/picture1.png" onDragStart={handleDragStart} role="presentation" />,
	<img className={classes.carousel} src="./src/assets/images/picture2.png" onDragStart={handleDragStart} role="presentation" />,
	<img className={classes.carousel} src="./src/assets/images/picture3.png" onDragStart={handleDragStart} role="presentation" />,
  	<img className={classes.carousel} src="./src/assets/images/picture1.png" onDragStart={handleDragStart} role="presentation" />,
	<img className={classes.carousel} src="./src/assets/images/picture2.png" onDragStart={handleDragStart} role="presentation" />,
	<img className={classes.carousel} src="./src/assets/images/picture3.png" onDragStart={handleDragStart} role="presentation" />,
];

// console.log(texts);

// const ContentCarousel = (texts: any) => {
// 	console.log(texts);	
	
// }

let items = pictures.map(el => el);

const Gallery = () => <AliceCarousel mouseTracking items={items} />;

export default Gallery;
