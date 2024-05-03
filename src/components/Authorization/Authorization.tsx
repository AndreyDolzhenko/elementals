import classNames from "classnames";
import classes from "./Authorization.module.scss";

import VK from "../../assets/icons/vk_1.svg?react";
import Facebook from "../../assets/icons/facebook_1.svg?react";
import Odnoklassniki from "../../assets/icons/odnoklassniki_1.svg?react";
import Google from "../../assets/icons/google.svg?react";

type Props = {
  modalClose: () => void;  
  setLogin: React.Dispatch<React.SetStateAction<string>>;  
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  forgotPassword: () => void;
};

const Authorization: React.FC<Props> = ({ 
  modalClose,  
  setLogin,
  setPassword,
  forgotPassword
 }) => {
  
  return (
    <div className={classes.authorizationBaze}>
      <div className={classes.authorizationForm}>
        <div className={classes.autoClose} onClick={modalClose}>
          X
        </div>
        <div className={classes.autoTop}>
          <div>Авторизация</div>
          <div>
            <span className={classes.social_networks}>
              <VK />
            </span>
            <span className={classes.social_networks}>
              <Facebook />
            </span>
            <span className={classes.social_networks}>
              <Odnoklassniki />
            </span>
            <span className={classes.social_networks}>
              <Google />
            </span>
          </div>
        </div>
        <form className={classes.autoForm}>
          <input
            className={classes.autoInput}
            type="text"
            id="login"
            placeholder="Логин"
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            className={classes.autoInput}
            type="text"
            id="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={classNames(classes.autoInput, classes.come_in)}
            // onClick={() => console.log(
            //   `login: ${login}
            //    password: ${password}`)}
          >
            Войти
          </button>
        </form>
        <div className={classes.autoBottom}>
          <span
            className="menu"
          >
            Регистрация
          </span>
          <span
            className="menu"
            onClick={forgotPassword}
          >
            Забыли пароль?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
