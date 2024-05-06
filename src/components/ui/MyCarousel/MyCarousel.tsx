import { useState } from "react";

import classes from "./MyCarousel.module.scss";

type Props = {
  content: [];
};

const MyCarousel: React.FC<Props> = (content) => {
    const blockItems = Object.values(content).map(el => el);   
    
    const createCarousel = (items: [][]) => {
     return items.map(el => el);
    }

  return (
    <>
  <ol className={classes.parameters}> 
  {createCarousel(blockItems)} 
      
  {    
    // blockItems.map(el => el)    
  }
  
  </ol>
  <div className={classes.arrows}>
    <div className={classes.arrow_left}></div>
    <div className={classes.arrow_right}></div>
  </div>
  </>
  )
};

export default MyCarousel;
