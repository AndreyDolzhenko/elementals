import classes from "./SecondPage.module.scss";

import PictogramLeft from "../../assets/icons/pictogramLeft.svg?react";
import PictogramRight from "../../assets/icons/pictogramRight.svg?react";
import JohanSmith from "../../assets/icons/JohanSmith.svg?react";
import Quotes from "../../assets/icons/quotes.svg?react";
import Spring from "../../assets/icons/spring.svg?react";
import Blot from "../../assets/icons/blot.svg?react";

function SecondPage() {
  return (
    <>
      
      <div className={classes.secondPage}>
      <Blot />
      <Spring />
        <div className={classes.secondPageTitle}>
          Talk. Listen. Get inspired by every minute of it.
        </div>
        <div className={classes.pictograms}>
          <div>
            <PictogramLeft />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </div>
          </div>
          <div>
            <PictogramRight />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </div>
          </div>
        </div>
        <div className={classes.block_description}>
          <div style={{ margin: 75 }}>
            <Quotes />
          </div>
          <div className={classes.block_description_text}>
            One of the best daily podcasts that covers every topic on Spotify.
          </div>
          <div className={classes.speaker_name}>
            Andrey Dols
            <JohanSmith />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
