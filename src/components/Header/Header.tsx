import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";

type Props = {
  modalOpen: () => void;
};

const Header: React.FC<Props> = ({ modalOpen }) => {
  return (
    <header>
      <div className={classes.left_menu}>
        <div className={classes.left_menu}>
          <div id={classes.logo} title="to Home">
            <Link to={"/"}>
              <div className={classes.logoText}>
                БУЧАЛКА
                <div className={classes.logoText}>УМЦ</div>
              </div>
            </Link>
          </div>
        </div>
        <ul className={classes.left_menu_block}>
          <li className={classes.left_menu_name}>О портале</li>
          <li className={classes.left_menu_name}>Инструкции</li>
          <li className={classes.left_menu_name}>Рейтинги</li>
        </ul>
      </div>
      <div className={classes.headerButtons}>
        <button>Обратная связь</button>
        <button title="Войти в Обучалку УМЦ" onClick={() => modalOpen()}>
          Войти
        </button>
      </div>
    </header>
  );
};

export default Header;
