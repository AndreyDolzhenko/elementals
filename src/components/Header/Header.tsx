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
            <div className={classes.logoText}>БУЧАЛКА
            <div className={classes.logoText}>УМЦ</div>
            </div>
            
          </div>
        </div>
        <ul className={classes.left_menu_block}>
          <li className={classes.left_menu_name}>Программы</li>
          <li className={classes.left_menu_name}>Инструкции</li>
          <li className={classes.left_menu_name}>Рейтинги</li>
        </ul>
      </div>
      <div className={classes.headerButtons}>
        <button>SUBSCRIBE</button>
        <button title="Log in to Elementals" onClick={modalOpen}>
          LOG IN
        </button>
      </div>
    </header>
  );
};

export default Header;
