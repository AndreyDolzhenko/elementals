import { useState } from "react";

import Header from "../Header";
import Decorates from "../ui/DecorativeElements";
import Carousel from "../ui/Carousel";
import Spotify from "../../assets/icons/spotify.svg?react";
import GooglePodcast from "../../assets/icons/googlePodcast.svg?react";
import Youtube from "../../assets/icons/youtube.svg?react";
import DecoreBottom from "../../assets/icons/decoreBottom.svg?react";
import Time from "../ui/Time";
import classes from "./Main.module.scss";

import PictogramLeft from "../../assets/icons/pictogramLeft.svg?react";
import PictogramRight from "../../assets/icons/pictogramRight.svg?react";
import JohanSmith from "../../assets/icons/JohanSmith.svg?react";
import Quotes from "../../assets/icons/quotes.svg?react";
import Spring from "../../assets/icons/spring.svg?react";
import Blot from "../../assets/icons/blot.svg?react";

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Main: React.FC<Props> = ({ setModalOpen }) => {
  const [timeMoment, setTimeMoment] = useState("");

  const getTime = (event: React.MouseEvent<HTMLHeadingElement>) => {
    setTimeMoment((event.target as HTMLHeadingElement).innerHTML);
  };

  return (
    <>
      <div className={classes.first_page}>
        <Header modalOpen={() => setModalOpen(true)} />
        <div className={classes.main_text}>
          Твой фактор<div>Роста</div>
        </div>
        <div className={classes.main_text}>
          с программами корпоративного университета <br></br>
          <span style={{ letterSpacing: "3px", color: "#CD4631" }}>
            ОФИСМАГ
          </span>
        </div>
        <button>ПРОГРАММЫ</button>
        <Time getTime={getTime} />
        {/* {console.log(timeMoment)} */}
        <Carousel />
        <div className={classes.media}>
          <span>Supported by:</span>
          <Spotify />
          <GooglePodcast />
          <Youtube />
        </div>
        <Decorates />
      </div>
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
        <div className={classes.block_description_two}>
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
      <div className={classes.thirdy_page}>
            <div className={classes.block_description_three}>
            What our listeners say
            <div>Their experience throughout every platform</div>        
          </div>
          <Carousel />
        </div>
      <div style={{ position: "absolute", top: "2823px" }}>
        <DecoreBottom />
      </div>
    </>
  );
};

export default Main;
