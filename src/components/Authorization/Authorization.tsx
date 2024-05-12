import { useState } from "react";
import classNames from "classnames";
import classes from "./Authorization.module.scss";

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
  eMail: string;
}

const Authorization: React.FC<Props> = ({ modalClose }) => {

  const formData = {
    login: "1",
    password: "2",
  };

  const getFormContent = (id: string, data:string) => {
    for (let key in formData) {
      // key == id ? formData[key] = data : "";
    }
    console.log(formData);
  }

  const [formContent, setFormContent] = useState<FormContent>({
    login: "",
    password: "",
    eMail: "",
  });

  const [showMail, setShowMail] = useState("none");
  const [typeInput, setTypeInput] = useState("password");
  const [showPass, setShowPass] = useState("none");

  const changeShowPass = () => {
    typeInput == "text" ? setTypeInput("password") : setTypeInput("text");
    showPass == "none" ? setShowPass("block") : setShowPass("none");
  }

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
            value={formContent.login}
            onChange={(e) => (setFormContent({login: e.target.value, password: formContent.password, eMail: formContent.eMail}))}
            onKeyDown = {(e) => (e.key == "Tab" ? console.log(formContent) : "")}
          />
          <div className={classNames(classes.autoInput)} style={{display: "flex"}}>
          <input
            className={classNames(classes.password)}
            type={typeInput}
            id="password"
            placeholder="Пароль"
            value={formContent.password}
            onChange={(e) => (setFormContent({login: formContent.login, password: e.target.value, eMail: formContent.eMail}))}
            onKeyDown = {(e) => (e.key == "Tab" ? console.log(formContent) : "")}
          />
          <div className={classes.showPassword} onClick={() => typeInput == "text" ? setTypeInput("password") : setTypeInput("text")}><ShowPassword /></div>
          {/* <div className={classes.showPassword} style={{display: showPass}} onClick={() => changeShowPass()}><ClosePassword /></div> */}
          </div>
          <input
            className={classNames(classes.autoInput, classes.mail)}
            style={{display: showMail}}
            type="text"
            id="mail"
            placeholder="e-mail"
            value={formContent.eMail}
            onChange={(e) => (setFormContent({login: formContent.login, password: formContent.password, eMail: e.target.value}))}
            onKeyDown = {(e) => (e.key == "Tab" ? console.log(formContent) : "")}
          />
          <button className={classNames(classes.autoInput, classes.come_in)}>
            Войти
          </button>
        </form>
        <div className={classes.autoBottom}>
          <span className="menu" onClick={() => showMail == "none" ? setShowMail("block") : setShowMail("none")}>Регистрация</span>
          <span className="menu">Забыли пароль?</span>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
