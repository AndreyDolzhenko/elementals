import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext";
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
  modalClose: () => void;
};

const Autorisation: React.FC<Props> = ({ modalClose }) => {
  const [typeInput, setTypeInput] = useState("password"); // тип текста в password
  const [showPass, setShowPass] = useState("block"); // отслеживаем открытый глаз
  const [closePass, setClosePass] = useState("none"); // отслеживаем закрытый глаз

  const [formContent, setFormContent] = useState<FormContent>({
    login: "",
    password: "",
    fio: "",
    mail: "",
  });

  const [validateField, setvalidateField] = useState({
    status: 500, 
    errorMessage: "",
  });

  const { loginStatus, setLoginStatus, user, setUser } = useAuthContext();

  const { signIn } = auth;

  const navigate = useNavigate();

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signIn({
      login: formContent.login,
      password: formContent.password,
    })
      .then((result) => {
        if (!result.auth) {
          setLoginStatus(false);
        } else {
          localStorage.setItem("token", result.token);
          setLoginStatus(true);
          setUser(result.user);          
          navigate(result.user.login === "Admin" ? "/admin" : "/personal-page");
        }
        
        modalClose();
      })
      .catch((e) => {
        setvalidateField({
          status: e.response.status,
          errorMessage: e.response.data.message,
        });        
      });      
  };

// useEffect(() => {
//   console.log(user);
//   navigate(user.login === "Admin" ? "/admin" : "/personal-page");
// }, [user.login]);

// Убираем красную заливку, если стерли логин или пароль в форме
  useEffect(() => {
    
    return () => {
      setvalidateField({
        status: 500, 
        errorMessage: "",
      });
    };
  }, [formContent.password === "", formContent.login === ""]);

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
        <p style={{
          fontSize: "8px",
          color: "red",
          }}>{validateField.status === 404 ? validateField.errorMessage : ""}</p>
        <input
          style={{
            borderColor: validateField.status === 404 ? "red" : "black",
            marginTop: validateField.status === 404 ? "0px" : "12px",
          }}
          className={classes.autoInput}
          type="text"
          name="login"
          placeholder="Логин"
          value={formContent.login}
          onChange={(e) => handleChange(e)}
          // onKeyDown={(e) => (e.key == "Tab" ? console.log(formContent) : "")}
        />
        {/* / блок с инпутом для ввода пароля, компонентами для скрытия и предъявления пароля */}
        <p style={{
          fontSize: "8px",
          color: "red",
          }}>{validateField.status === 400 ? validateField.errorMessage : ""}</p>
        <div
          className={classNames(classes.autoInput)}          
          style={{
            borderColor: validateField.status === 400 ? "red" : "black",
            marginTop: validateField.status === 400 ? "0px" : "12px",
            display: "flex",
          }}
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
          onClick={(e) => (handleSignIn(e))}
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
