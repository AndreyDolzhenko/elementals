import classes from "./ThirdyPage.module.scss";

import Carousel from "../Carousel";

function ThirdyPage() {

    return (
        <div className={classes.thirdy_page}>
            <div className={classes.block_description}>
            What our listeners say
            <div>Their experience throughout every platform</div>        
          </div>
          <Carousel />
        </div>        
    );
};

export default ThirdyPage;
