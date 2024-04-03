import { useState } from "react";
import "./App.css";

import BaseContent from "./components/BaseContent.tsx";

import VK from "./svg/vk_1.svg?react";
import Facebook from "./svg/facebook_1.svg?react";
import Odnoklassniki from "./svg/odnoklassniki_1.svg?react";
import Google from "./svg/google.svg?react";

function Header(props: any) {
  return (
    <header>
      <div className="left_menu">
        <div style={{ width: 250, float: "left" }}>
          <div id="logo" title="Go to Elementals Home">
            <div id="logoText">LEMENTALS</div>
          </div>
        </div>
        <div id="headerMenu">
          <span className="menu">Episodes</span>
          <span className="menu">About</span>
          <span className="menu">More</span>
        </div>
      </div>
      <div id="headerButton">
        <button>SUBSCRIBE</button>
        <button
          title="Log in to Elementals"
          onClick={() => props}
        >
          Log In
        </button>
      </div>
    </header>
  );
}

function Authorization() {
  return (
    <div className="authorizationBaze">
      <div className="authorizationForm">
        <div className="autoClose">X</div>
        <div className="autoTop">
          <div>Авторизация</div>
          <div>
            <span className="social_networks">
              <VK />
            </span>
            <span className="social_networks">
              <Facebook />
            </span>
            <span className="social_networks">
              <Odnoklassniki />
            </span>
            <span className="social_networks">
              <Google />
            </span>
          </div>
        </div>
        <form className="autoForm">
          <input className="autoInput" type="text" placeholder="Логин" />
          <input className="autoInput" type="text" placeholder="Пароль" />
          <button className="autoInput" id="authorizationButton">
            Войти
          </button>
        </form>
        <div className="autoBottom">
          <span className="menu">Регистрация</span>
          <span className="menu">Забыли пароль?</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [auto, setAuto] = useState();

  return (
    <>
      <>{Header(setAuto)}</>
      <Header title = {<Authorization />} />
      <BaseContent />
      <>{auto}</>
    </>
  );
}

export default App;
