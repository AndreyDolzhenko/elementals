import { useState } from "react";

import classes from "./MyCarousel.module.scss";

type Props = {
  content: [];
};

const MyCarousel: React.FC<Props> = (content) => {
    const blockItems = Object.values(content).map(el => el);
    let elementsGroup = [];

    elementsGroup = [... Object.values(blockItems)[0]];
    console.log(Object.values(blockItems).flat(1)[0]);

  return <ol className={classes.parameters}>  
      
  {    
    blockItems.map(el => el)
  }
  
  </ol>;
};

export default MyCarousel;
