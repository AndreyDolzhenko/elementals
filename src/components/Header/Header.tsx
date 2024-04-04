import classes from "./Header.module.scss";

type Props = {
  isModalOpen: boolean;
  modalOpen: () => void;
};

const Header: React.FC<Props> = ({ isModalOpen, modalOpen }) => {
  return (
    <header>
      <div className={classes.left_menu}>
        <div className={classes.left_menu}>
          <div id={classes.logo} title="Go to Elementals Home">
            <div id={classes.logoText}>LEMENTALS</div>
          </div>
        </div>
        <ul className={classes.left_menu_block}>
          <li className={classes.left_menu_name}>Episodes</li>
          <li className={classes.left_menu_name}>About</li>
          <li className={classes.left_menu_name}>More</li>
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
