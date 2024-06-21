import { useState, useEffect } from "react";
import { observer } from "mobx-react";

import Enter from "../Enter";
import ChoiseApp from "../ChoiseApp";
import Time from "../ui/Time";
import MyCarousel from "../ui/MyCarousel";
import usersStore from "../../stores/usersStore";
import { useAuthContext } from "../../contexts/authContext";
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
import classes from "./PersonalPage.module.scss";

const PersonalPage: React.FC = observer(() => {
  const texts = [
    <span className={classes.student_reviews_item}>
      Тренинг был интересный и эксперты доступно излагали материал.
    </span>,
    <span className={classes.student_reviews_item}>
      Внесена ясность при оформлении заказов за рублики.
    </span>,
    <span className={classes.student_reviews_item}>
      Тренинг помог изучить: вербализацию, типы манипуляций, способы защиты от
      манипуляций.
    </span>,
    <span className={classes.student_reviews_item}>
      Закрепила навыки чек листа при согласовании заказа с клиентом.
    </span>,
    <span className={classes.student_reviews_item}>
      Всё хорошо! Во время тренинга закрепили знания за весь период работы.
    </span>,
    <span className={classes.student_reviews_item}>
      Научилась анализировать счета клиента, допродавать, расширять ассортимент.
    </span>,
    <span className={classes.student_reviews_item}>
      Хочу, чтобы чаще были такие тренинги, очень полезны!
    </span>,
    <span className={classes.student_reviews_item}>
      Спасибо большое за тренинг!
    </span>,
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const [display, setDisplay] = useState("none");

  const { user, loginStatus } = useAuthContext();

  // const object = JSON.parse(user);

  const { fetchAllUsers, users } = usersStore;

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <div
      className={classes.component}
      onClick={() => (display !== "none" ? setDisplay("none") : false)}
    >
      {isModalOpen ? <Enter modalClose={() => setModalOpen(false)} /> : ""}
      <section className={classes.first_block}>
        {/* <Header setModalOpen={setModalOpen} />         */}

        <p className={classes.brand}>Добрый день, {user.fio}</p>
        {/* <p className={classes.brand}>Добрый день, {users.map(el => el.login === "semen" ? "semen" : false)}</p> */}
        <p className={classes.main_text_second_part}>
          Выберите программу для развития навыков:
        </p>
        {/* <ul>{
          users.length !== 0 ? Object.values(users[0]).map(el => <li>{el}</li>) : ""
          }</ul> */}

        <ChoiseApp
          display={display}
          changeDisplay={() => setDisplay("block")}
        />
        <Time />
        <div className={classes.media}>
        <span>Supported by:</span>
        <Spotify />
        <GooglePodcast />
        <Youtube />
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
        <div className={classes.footer_content}>© ОФИСМАГ, 2024</div>
      </section>
    </div>
  );
});

export default PersonalPage;
