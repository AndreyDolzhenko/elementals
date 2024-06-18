import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import auth from "../../services/auth";
import classNames from "classnames";
import classes from "./Autorisation.module.scss";
import usersStore from "../../stores/usersStore";
import ShowPassword from "../../assets/icons/showPassword.svg?react";
import ClosePassword from "../../assets/icons/closePassword.svg?react";

type FormContent = {
  login: string;
  password: string;
  fio: string;
  mail: string;
};

type Props = {
  modalClose: () => void,
}

const Autorisation: React.FC<Props> = ({modalClose}) => {
  const [typeInput, setTypeInput] = useState("password"); // тип текста в password
  const [showPass, setShowPass] = useState("block"); // отслеживаем открытый глаз
  const [closePass, setClosePass] = useState("none"); // отслеживаем закрытый глаз
  
  const [formContent, setFormContent] = useState<FormContent>({
    login: "",
    password: "",
    fio: "",
    mail: "",
  });

  const {signIn} = auth;

  const navigate = useNavigate();

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();    
    console.log(await signIn({login: formContent.login, password: formContent.password}));
    navigate("/personal-page");
    modalClose();
  };

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeShowPass = () => {
    typeInput == "text" ? setTypeInput("password") : setTypeInput("text");
    showPass == "none" ? setShowPass("block") : setShowPass("none");
    closePass == "none" ? setClosePass("block") : setClosePass("none");
  };

  return (
    <>
      <form className={classes.autoForm}>
{/* / инпут для ввода логина */}
        <input
          className={classes.autoInput}
          type="text"
          name="login"
          placeholder="Логин"
          value={formContent.login}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => (e.key == "Tab" ? console.log(formContent) : "")}
        />
{/* / блок с инпутом для ввода пароля, компонентами для скрытия и предъявления пароля */}
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
            onKeyDown={(e) => (e.key == "Tab" ? console.log(formContent) : "")}
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
{/* / кнопка "Войти" */}
        <button
          className={classNames(classes.autoInput, classes.come_in)}
          onClick={(e) => handleSignIn(e)}
        >
          Войти
        </button>
      </form>
      <div className={classes.autoBottom}>
        <span className="menu">Забыли пароль?</span>
      </div>
    </>
  );
};

export default Autorisation;