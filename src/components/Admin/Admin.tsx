import { useState, useEffect } from "react";
import { observer } from "mobx-react";

import Enter from "../Enter";
import ChoiseApp from "../ChoiseApp";
import Time from "../ui/Time";
import MyCarousel from "../ui/MyCarousel";
import {UserId} from "../../types/GuessSTM";
import usersStore from "../../stores/usersStore";
import { useAuthContext } from "../../contexts/authContext";
import guessSTMStore from "../../stores/guessSTMStore";
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
import classes from "./Admin.module.scss";
import { Link } from "react-router-dom";

const Admin: React.FC = observer(() => {
 
  const [isModalOpen, setModalOpen] = useState(false);
  const [display, setDisplay] = useState("none");
  const [usersList, setUsersList] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [showUser, setShowUser] = useState();
  const [userIdData, setUserIdData] = useState(0);
  const [resultsLastTry, setResultsLastTry] = useState([{}]);

  const { user, loginStatus } = useAuthContext();

  const {getLastTryResults, getAttempts} = guessSTMStore;
  
  
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
        <p className={classes.brand}>Вы вошли под правами Администратора</p>
        {/* <p className={classes.brand}>Добрый день, {users.map(el => el.login === "semen" ? "semen" : false)}</p> */}
        <p className={classes.main_text_second_part}>
          Выберите нужное действие:
        </p>
        <p onClick={() => setUsersList(users)}>Загрузить сотрудников из базы</p>
        <div className={classes.table_place}>
        <table>
          <tr>
            <td className={classes.users_table}>id</td>
            <td className={classes.users_table}>Логин</td>
            <td className={classes.users_table}>ФИО</td>
            <td className={classes.users_table}>e-mail</td></tr>
          {usersList.map(el => <tr>
            <td className={classes.users_table}>{Object.values(el)[0]}</td>
            <td className={classes.users_table}>{Object.values(el)[1]}</td>
            <td className={classes.users_table}>{Object.values(el)[2]}</td>
            <td className={classes.users_table}>{Object.values(el)[3]}</td></tr>)}
        </table>
        </div>
       <p>Введите ID пользователя, данные которого Вы хотите получить:</p>
       <input type="text" placeholder="ID пользователя" onChange={(e) => setUserIdData(+e.target.value)} />
       <button onClick={async () => {
        setResultsLastTry([]);
          usersList.map(el => Object.values(el)[0] === userIdData ? setShowUser(Object.values(el)[2]) : console.log(el[2]));
          const result = await getLastTryResults(userIdData);
          const attemptsRes = await getAttempts(userIdData); 
          setAttempts(attemptsRes);       
          setResultsLastTry(result);
          // console.log(userIdData);
       }
        }>Получить данные по ID</button>
        <div className={classes.user_results}>
          <div style={{textDecoration: "underline"}}>Имя пользователя: {showUser}</div>
        <table>
          <tr>
            <td className={classes.users_table}>Дата прохождения</td>
            <td className={classes.users_table}>Правильных ответов</td>
            <td className={classes.users_table}>Неправильных ответов</td>            
            </tr>
          {attempts.map(el => <tr>
            <td className={classes.users_table}>{Object.values(el)[3]}</td>
            <td className={classes.users_table}>{Object.values(el)[0]}</td>
            <td className={classes.users_table}>{Object.values(el)[1]}</td>            
            </tr>)}
        </table>
        <div style={{textDecoration: "underline"}}>Результаты последнего тестирования:</div>
        </div>
      <ol>
          {resultsLastTry.map((el) => 
          <li style={{listStyleType: "inherit"}}>
            <img src={Object.values(el)[0]} width={"20%"} alt=""></img>
            <div>{Object.values(el)[1]}</div>
            <div>{Object.values(el)[2]}</div>            
            <div>{Object.values(el)[3] === true ? "Верно" : "Неверно"}</div>
           </li>)}
        </ol>       

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
      </section>
      <section className={classes.footer}>
        <div className={classes.footer_content}>© ОФИСМАГ, 2024</div>
      </section>
    </div>
  );
});

export default Admin;
