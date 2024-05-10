import classNames from "classnames";
import classes from "./Authorization.module.scss";

import VK from "../../assets/icons/vk_1.svg?react";
import Facebook from "../../assets/icons/facebook_1.svg?react";
import Odnoklassniki from "../../assets/icons/odnoklassniki_1.svg?react";
import Google from "../../assets/icons/google.svg?react";
import { useState } from "react";

type Props = {
  modalClose: () => void;
};

type FormContent = {
  login: string;
  password: string;
}

const Authorization: React.FC<Props> = ({ modalClose }) => {

  const [formContent, setFormContent] = useState<FormContent>({
    login: "",
    password: "",
  });

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
            name="login"            
            placeholder="Логин"
            value={formContent.login}
          />
          <input
            className={classes.autoInput}
            type="text"
            name="password"
            placeholder="Пароль"
            value={formContent.password}
            onChange={() => setFormContent({... formContent})}
          />
          <button className={classNames(classes.autoInput, classes.come_in)}>
            Войти
          </button>
        </form>
        <div className={classes.autoBottom}>
          <span className="menu">Регистрация</span>
          <span className="menu">Забыли пароль?</span>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
