import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import classes from "./Header.module.scss";

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ setModalOpen }) => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <header>
      <div className={classes.left_menu}>
        <div className={classes.left_menu}>
          <div id={classes.logo} title="to Home" onClick={() => {navigate("/", { replace: false });}}>
            <div className={classes.logoText}>
              БУЧАЛКА
              <div className={classes.logoText}>УМЦ</div>
            </div>
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
        <button title="Войти в Обучалку УМЦ" onClick={() => setModalOpen(true)}>
          Войти
        </button>
      </div>
    </header>
  );
};

export default Header;
