import { useState } from "react";
import { observer } from "mobx-react";

import ChoiseApp from "../ChoiseApp";
import Time from "../ui/Time";
import Decorates from "../ui/DecorativeElements";
import MyCarousel from "../ui/MyCarousel";
import Spotify from "../../assets/icons/spotify.svg?react";
import GooglePodcast from "../../assets/icons/googlePodcast.svg?react";
import Youtube from "../../assets/icons/youtube.svg?react";
import ClipRed from "../../assets/icons/ClipRed.svg?react";
import ClipBlack from "../../assets/icons/ClipBlack.svg?react";
import PictogramLeft from "../../assets/icons/pictogramLeft.svg?react";
import PictogramRight from "../../assets/icons/pictogramRight.svg?react";
import Quotes from "../../assets/icons/quotes.svg?react";
import Spring from "../../assets/icons/spring.svg?react";
import Blot from "../../assets/icons/blot.svg?react";
import classes from "./Main.module.scss";
import logoUMC from "../../assets/images/logoUMC.png";


const Main: React.FC = observer(() => {
  const pictures = [    
    <img className={classes.pictures} src="./src/assets/images/foto_5.jpg" />,
    <img className={classes.pictures} src="./src/assets/images/foto_4.jpg" />,    
    <img className={classes.pictures} src="./src/assets/images/foto_6.jpg" />,
    <img className={classes.pictures} src="./src/assets/images/foto_7.jpg" />,
    <img className={classes.pictures} src="./src/assets/images/foto_8.jpg" />,    
    <img className={classes.pictures} src="./src/assets/images/foto_9.jpg" />,
    <img className={classes.pictures} src="./src/assets/images/foto_10.jpg" />,
    <img className={classes.pictures} src="./src/assets/images/foto_11.jpg" />,    
    <img className={classes.pictures} src="./src/assets/images/foto_12.jpg" />,
  ];
  const texts = [
    <span className={classes.student_reviews_item}>Тренинг был интересный и эксперты доступно излагали материал.</span>, 
    <span className={classes.student_reviews_item}>Внесена ясность при оформлении заказов за рублики.</span>, 
    <span className={classes.student_reviews_item}>Тренинг помог изучить: вербализацию, типы манипуляций, способы защиты от манипуляций.</span>,
    <span className={classes.student_reviews_item}>Закрепила навыки чек листа при согласовании заказа с клиентом.</span>, 
    <span className={classes.student_reviews_item}>Всё хорошо! Во время тренинга закрепили знания за весь период работы.</span>,
    <span className={classes.student_reviews_item}>Научилась анализировать счета клиента, допродавать, расширять ассортимент.</span>,
    <span className={classes.student_reviews_item}>Хочу, чтобы чаще были такие тренинги, очень полезны!</span>, 
    <span className={classes.student_reviews_item}>Спасибо большое за тренинг!</span>,    
  ];

  const [display, setDisplay] = useState("none");
  
  return (
    <div className={classes.component} onClick={() => display !== "none" ? setDisplay("none") : false}>
      <section className={classes.first_block}>        
        <p className={classes.main_text}>
          Твой фактор<br></br><span>Роста</span>
        </p>
        <p className={classes.main_text_second_part}>
          с программами корпоративного университета <br></br>
          <span className={classes.brand}>ОФИСМАГ</span>
        </p>
        <ChoiseApp display={display} changeDisplay={() => setDisplay("block")}/>
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
        <MyCarousel content={texts} />
      </section>
      <section className={classes.footer}>      
      <div className={classes.footer_content}>
        <img style={{width: "10%"}} src={logoUMC} alt="logoUMC" />
        <div style={{float: "right"}}>© ОФИСМАГ, 2024</div>
        </div>            
      </section>
    </div>
  );
});

export default Main;
