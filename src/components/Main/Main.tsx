import { useState } from "react";

import Header from "../Header";
import Authorization from "../Authorization";
import Decorates from "../ui/DecorativeElements";
import Carousel from "../ui/Carousel";
import MyCarousel from "../ui/MyCarousel";
import Spotify from "../../assets/icons/spotify.svg?react";
import GooglePodcast from "../../assets/icons/googlePodcast.svg?react";
import Youtube from "../../assets/icons/youtube.svg?react";
import ClipRed from "../../assets/icons/ClipRed.svg?react";
import ClipBlack from "../../assets/icons/ClipBlack.svg?react";
import Time from "../ui/Time";
import PictogramLeft from "../../assets/icons/pictogramLeft.svg?react";
import PictogramRight from "../../assets/icons/pictogramRight.svg?react";
import Quotes from "../../assets/icons/quotes.svg?react";
import Spring from "../../assets/icons/spring.svg?react";
import Blot from "../../assets/icons/blot.svg?react";
import classes from "./Main.module.scss";

const Main: React.FC = () => {
  const pictures = [
    <img className={classes.pictures} src="./src/assets/images/picture1.png" />,
    <img className={classes.pictures} src="./src/assets/images/picture2.png" />,
    <img className={classes.pictures} src="./src/assets/images/picture3.png" />,
    <img className={classes.pictures} src="./src/assets/images/picture2.png" />,
    <img className={classes.pictures} src="./src/assets/images/picture3.png" />,    
  ];

  const texts = [
    <li className={classes.student_reviews_item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</li>, 
    <li className={classes.student_reviews_item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</li>, 
    <li className={classes.student_reviews_item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</li>,
    <li className={classes.student_reviews_item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</li>, 
    <li className={classes.student_reviews_item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</li>
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={classes.component}>
      {isModalOpen ? (
        <Authorization modalClose={() => setModalOpen(false)} />
      ) : (
        ""
      )}
      <section className={classes.first_block}>
        <Header setModalOpen={setModalOpen} />
        <p className={classes.main_text}>
          Твой фактор<p>Роста</p>
        </p>
        <p className={classes.main_text_second_part}>
          с программами корпоративного университета <br></br>
          <span className={classes.brand}>ОФИСМАГ</span>
        </p>
        <button>ПРОГРАММЫ</button>
        <Time />
        <MyCarousel content={pictures} />
        <div className={classes.media}>
          <span>Supported by:</span>
          <Spotify />
          <GooglePodcast />
          <Youtube />
        </div>
        <Decorates />
      </section>
      <section className={classes.second_block}>
        <ClipRed className={classes.clips} />
        <div className={classes.secondPageTitle}>
          Становись лучше с каждой минутой!
        </div>
        <div className={classes.pictograms}>
          <div>
            <PictogramLeft />
            <div>Есть вопросы? Это хорошо - значит ты думаешь!</div>
          </div>
          <div>
            <PictogramRight />
            <div>
              Получай ответы и новые идеи вместе с{" "}
              <span style={{ color: "#cd4631" }}>Обучалкой УМЦ</span>
            </div>
          </div>
        </div>
        <div className={classes.block_description_two}>
          <Blot className={classes.blot} />
          <Spring className={classes.spring} />
          <Quotes style={{ margin: 75 }} />
          <div className={classes.block_description_text}>
            Комфортный ресурс для ежедневной практики
          </div>
          <div className={classes.speaker_name}>
            Кира Шулагина
            <br />
            Руководитель учебно-методического центра ОФИСМАГ
          </div>
        </div>
      </section>
      <section className={classes.third_block}>
        <ClipBlack className={classes.clips} />
        <div className={classes.block_description_three}>
          Что говорят студенты
          <div>
            корпоративного университета{" "}
            <span style={{ color: "#cd4631" }}>ОФИСМАГ</span>
          </div>
        </div>
        <MyCarousel texts={texts} />
      </section>
    </div>
  );
};

export default Main;
