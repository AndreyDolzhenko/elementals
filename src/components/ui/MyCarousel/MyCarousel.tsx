import { ReactHTML, useState, useEffect } from "react";

import classes from "./MyCarousel.module.scss";

type Props = {
  content: JSX.Element[];
};

const MyCarousel: React.FC<Props> = ({ content }) => {
  const widtItem = 400; // шаг смещения карусели
  // значение параметра translate: itemPosition
  const [itemPosition, setItemPosition] = useState(widtItem);
  // граница смещения в одну сторону с учётом количества единиц контента
  const offsetLimit = (widtItem * content.length - widtItem * 2) / 2;
  // функция, обеспечивающая смещение карусели на shift в рамках границ смещения
  const moveItem = (shift: number) => {
    if (itemPosition < offsetLimit || itemPosition > -offsetLimit) {
      setItemPosition(itemPosition - shift);
    }
    if (itemPosition > offsetLimit) {
      setItemPosition(-itemPosition + widtItem);
    }
    if (itemPosition < -offsetLimit) {
      setItemPosition(-itemPosition - widtItem);
    }
    // console.log(itemPosition);
  };
 
  // условие, при котором срабатывает функция moveItem - АвтоКарусель
  const [count, setCount] = useState(""); 
  useEffect(() => {
    const interval = setInterval(() => setCount(Date()), 4000);
    moveItem(widtItem);
    // console.log(count);
    return () => clearInterval(interval);
  }, [count]);
  // setInterval(() => moveItem(widtItem), 1000);

  return (
    <>
      <ul className={classes.parameters}>
        {content.map((el, index) => (
          <li
            className={classes.carousael_items}
            style={{ translate: itemPosition }}
            key={index}
          >
            {el}
          </li>
        ))}
      </ul>
      <div className={classes.arrows}>
        <div
          className={classes.arrow_left}
          onClick={() => moveItem(-widtItem)}
        ></div>
        <div
          className={classes.arrow_right}
          onClick={() => moveItem(widtItem)}
        ></div>
      </div>
    </>
  );
};

export default MyCarousel;
