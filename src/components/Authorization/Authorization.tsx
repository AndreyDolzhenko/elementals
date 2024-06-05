import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import classNames from "classnames";
import classes from "./Authorization.module.scss";

import usersStore from "../../stores/usersStore";
import { CreateUser, User } from "../../types";
import VK from "../../assets/icons/vk_1.svg?react";
import Facebook from "../../assets/icons/facebook_1.svg?react";
import Odnoklassniki from "../../assets/icons/odnoklassniki_1.svg?react";
import Google from "../../assets/icons/google.svg?react";
import ShowPassword from "../../assets/icons/showPassword.svg?react";
import ClosePassword from "../../assets/icons/closePassword.svg?react";

type Props = {
  modalClose: () => void;
};

type FormContent = {
  login: string;
  password: string;
  fio: string;
  mail: string;
};

const Authorization: React.FC<Props> = observer(({ modalClose }) => {
  
  function registrationCheck(parameters: CreateUser, users: [User]) {
    if (parameters.login !== "" && parameters.password !== "") {
      users.map((el) => {
        if (el.login === parameters.login) {
          setUserData(el);
        } else if (parameters.fio !== "" && parameters.mail !== "") {
          createUser(formContent);
        }
      });
    }
  }

  const [formContent, setFormContent] = useState<FormContent>({
    login: "",
    password: "",
    fio: "",
    mail: "",
  });

  const { createUser, users } = usersStore;
  const [userData, setUserData] = useState({});

  const [showMail, setShowMail] = useState("none"); // скрытие полей для регистрации
  const [typeInput, setTypeInput] = useState("password"); // тип текста в password
  const [showPass, setShowPass] = useState("block"); // отслеживаем открытый глаз
  const [closePass, setClosePass] = useState("none"); // отслеживаем закрытый глаз

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formContent);

  const changeShowPass = () => {
    typeInput == "text" ? setTypeInput("password") : setTypeInput("text");
    showPass == "none" ? setShowPass("block") : setShowPass("none");
    closePass == "none" ? setClosePass("block") : setClosePass("none");
  };

  return (
    <div className={classes.authorizationBaze}>
      <ul>{Object.values(userData)}</ul>
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
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => (e.key == "Tab" ? console.log(formContent) : "")}
          />
          <div
            className={classNames(classes.autoInput)}
            style={{ display: "flex" }}
          >
            <input
              className={classNames(classes.password)}
              type={typeInput}
              name="password"
              placeholder="Пароль"
              value={formContent.password}
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) =>
                e.key == "Tab" ? console.log(formContent) : ""
              }
            />
            <div
              className={classes.showPassword}
              style={{ display: showPass }}
              onClick={() => changeShowPass()}
            >
              <ShowPassword />
            </div>
            <div
              className={classes.showPassword}
              style={{ display: closePass }}
              onClick={() => changeShowPass()}
            >
              <ClosePassword />
            </div>
          </div>
          <input
            className={classNames(classes.autoInput, classes.mail)}
            style={{ display: showMail }}
            type="text"
            name="fio"
            placeholder="ФИО"
            value={formContent.fio}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => (e.key == "Tab" ? console.log(formContent) : "")}
          />
          <input
            className={classNames(classes.autoInput, classes.mail)}
            style={{ display: showMail }}
            type="text"
            name="mail"
            placeholder="e-mail"
            value={formContent.mail}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => (e.key == "Tab" ? console.log(formContent) : "")}
          />
          <button className={classNames(classes.autoInput, classes.come_in)}>
            Войти
          </button>
        </form>
        <div className={classes.autoBottom}>
          <span
            className="menu"
            onClick={() =>
              showMail == "none" ? setShowMail("block") : setShowMail("none")
            }
          >
            Регистрация
          </span>

          <span
            className="menu"
            onClick={() => registrationCheck(formContent, users)}
          >
            Забыли пароль?
          </span>
        </div>
      </div>
    </div>
  );
});

export default Authorization;
