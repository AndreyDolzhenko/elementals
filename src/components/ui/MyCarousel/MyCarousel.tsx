import { ReactHTML, useState } from "react";

import classes from "./MyCarousel.module.scss";

type Props = {
  content: JSX.Element[];
};

const MyCarousel: React.FC<Props> = ({ content }) => {
  const widtItem = 400;
  const [itemPosition, setItemPosition] = useState(widtItem);
  const startPosition = (widtItem * content.length - widtItem * 2) / 2;
  console.log(startPosition);
  const moveItem = (shift: number) => {
    if (itemPosition < startPosition || itemPosition > -startPosition) {
      setItemPosition(itemPosition - shift);
    }
    if (itemPosition > startPosition) {
      setItemPosition(-itemPosition + widtItem);
    }
    if (itemPosition < -startPosition) {
      setItemPosition(-itemPosition - widtItem);
    }
    console.log(itemPosition);
  };
  
  // setInterval(() => moveItem(widtItem), 1000);

  return (
    <>
      <ol className={classes.parameters}>
        {content.map((el, index) => (
          <li
            className={classes.carousael_items}
            style={{ translate: itemPosition }}
            key={index}
          >
            {el}
          </li>
        ))}
      </ol>
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
