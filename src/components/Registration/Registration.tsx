import { useEffect, useState } from "react";
import classNames from "classnames";
import classes from "./Registration.module.scss";

import usersStore from "../../stores/usersStore";
import ShowPassword from "../../assets/icons/showPassword.svg?react";
import ClosePassword from "../../assets/icons/closePassword.svg?react";

type FormContent = {
    login: string;
    password: string;
    fio: string;
    mail: string;
  };

const Registration = () => {
    const handleSignUp = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        createUser(formContent);
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
    <>
        
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
          <button className={classNames(classes.autoInput, classes.come_in)}
          onClick={(e) => handleSignUp(e)}
          >
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

          <span className="menu">Забыли пароль?</span>
        </div>
        </>
    );

}

export default Registration;