import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import classes from "./Enter.module.scss";

import usersStore from "../../stores/usersStore";
import Autorisation from "../Autorisation";
import Registration from "../Registration";
import { CreateUser, User } from "../../types";
import VK from "../../assets/icons/vk_1.svg?react";
import Facebook from "../../assets/icons/facebook_1.svg?react";
import Odnoklassniki from "../../assets/icons/odnoklassniki_1.svg?react";
import Google from "../../assets/icons/google.svg?react";

type Props = {
  modalClose: () => void;
};

const Enter: React.FC<Props> = observer(({ modalClose }) => {

  const [inputSelection, setInputSelection] = useState(<></>); 
  const [textColor, setTextColor] = useState("#213547"); 

  const changeEnter = (option: JSX.Element) => {
    setInputSelection(option);   
    textColor == "#213547" ? setTextColor("darkgray") : setTextColor("#213547")     
  }

  return (
    <div className={classes.authorizationBaze}>
      <div className={classes.authorizationForm}>
        <div className={classes.autoClose} onClick={modalClose}>
          X
        </div>
        <div className={classes.autoTop}>
          <div
            className={classes.autorisation}
            style={{color: textColor}}
            // style={{color: `${inputSelection === <Autorisation /> ? "darkgray" : "#213547"}`}}
            onClick={() => changeEnter(<Autorisation />)}
          >
            Авторизация
          </div>
          <div
            className={classes.registration}
            style={{color: textColor}}
            // style={{color: `${inputSelection === <Registration /> ? "#213547" : "darkgray"}`}}
            onClick={() => changeEnter(<Registration />)}
          >
            Регистрация
          </div>
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
        {inputSelection}
      </div>
    </div>
  );
});

export default Enter;
