import { useState } from "react";

import Header from "../Header";
import Authorization from "../Authorization";
import Decorates from "../ui/DecorativeElements";
import Carousel from "../ui/Carousel";
import Spotify from "../../assets/icons/spotify.svg?react";
import GooglePodcast from "../../assets/icons/googlePodcast.svg?react";
import Youtube from "../../assets/icons/youtube.svg?react";
import DecoreBottom from "../../assets/icons/decoreBottom.svg?react";
import Time from "../ui/Time";
import PictogramLeft from "../../assets/icons/pictogramLeft.svg?react";
import PictogramRight from "../../assets/icons/pictogramRight.svg?react";
import JohanSmith from "../../assets/icons/JohanSmith.svg?react";
import Quotes from "../../assets/icons/quotes.svg?react";
import Spring from "../../assets/icons/spring.svg?react";
import Blot from "../../assets/icons/blot.svg?react";
import classes from "./Main.module.scss";

const Main: React.FC = () => {
  const [inputTxt, setInputTxt] = useState("Click");
  const showTxt = (inputTxt: string) => {
    console.log(inputTxt);
  }

  const [timeMoment, setTimeMoment] = useState("");

  const getTime = (event: React.MouseEvent<HTMLHeadingElement>) => {
    setTimeMoment((event.target as HTMLHeadingElement).innerHTML);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [login, setLogin] = useState("1");
  const [password, setPassword] = useState("2");

  const forgotPassword = () => {
    console.log(
      `login: ${login}
       password: ${password}`
    );
  };

  return (
    <div className={classes.component}>
      {isModalOpen ? (
        <Authorization
          modalClose={() => setModalOpen(false)}
          setLogin={setLogin}
          setPassword={setPassword}
          forgotPassword={forgotPassword}
        />
      ) : (
        ""
      )}

      <section className={classes.first_block}>
        <Header 
        setModalOpen={setModalOpen} 
        inputTxt={inputTxt}
        showTxt={showTxt}
        />
        <p className={classes.main_text}>
          Твой фактор<p>Роста</p>
        </p>
        <p className={classes.main_text_second_part}>
          с программами корпоративного университета <br></br>
          <span className={classes.brand}>ОФИСМАГ</span>
        </p>
        <input type="text" value={inputTxt} onChange={(e) => setInputTxt(e.target.value)} 
        onKeyDown={(e) => {
          if (e.key=='Enter') {            
            showTxt(inputTxt);
          }
          
          }} />
        <button>ПРОГРАММЫ</button>
        <Time getTime={getTime} />
        <Carousel />
        <div className={classes.media}>
          <span>Supported by:</span>
          <Spotify />
          <GooglePodcast />
          <Youtube />
        </div>
        <Decorates />
      </section>
      <section className={classes.second_block}>
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
      </section>
      <section className={classes.third_block}>
        <div className={classes.block_description_three}>
          What our listeners say
          <div>Their experience throughout every platform</div>
        </div>
        <Carousel />
      </section>
      <div style={{ position: "absolute", top: "2823px" }}>
        <DecoreBottom />
      </div>
    </div>
  );
};

export default Main;
