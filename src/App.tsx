import React, { useState } from "react";

import BaseContent from "./components/BaseBackground";
import VK from "./svg/vk_1.svg?react";
import Facebook from "./svg/facebook_1.svg?react";
import Odnoklassniki from "./svg/odnoklassniki_1.svg?react";
import Google from "./svg/google.svg?react";
import "./App.css";

type Props = {
  isModalOpen: boolean;
  modalOpen: () => void;
};

const Header: React.FC<Props> = ({isModalOpen, modalOpen}) => {
  return (
    <header>
      <div className="left_menu">
        <div className="left_menu_name">
          <div id="logo" title="Go to Elementals Home">
            <div id="logoText">LEMENTALS</div>
          </div>
        </div>
        <div className="headerMenu">
          <span>Episodes</span>
          <span>About</span>
          <span>More</span>
        </div>
      </div>
      <div className="headerButtons">
        <button>SUBSCRIBE</button>
        <button
          title="Log in to Elementals"
          onClick={modalOpen}
        >
          LOG IN
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
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header isModalOpen={isModalOpen} modalOpen={() => setModalOpen(true)} />     
      <BaseContent /> 
      {isModalOpen ? <Authorization /> : ""}     
    </>
  );
}

export default App;
