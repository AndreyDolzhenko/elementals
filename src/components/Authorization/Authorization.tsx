import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import classes from "./Authorization.module.scss";

import usersStore from "../../stores/usersStore";
import Registration from "../Registration";
import { CreateUser, User } from "../../types";
import VK from "../../assets/icons/vk_1.svg?react";
import Facebook from "../../assets/icons/facebook_1.svg?react";
import Odnoklassniki from "../../assets/icons/odnoklassniki_1.svg?react";
import Google from "../../assets/icons/google.svg?react";


type Props = {
  modalClose: () => void;
};



const Authorization: React.FC<Props> = observer(({ modalClose }) => {

  

  return (
    <div className={classes.authorizationBaze}>
      
      <div className={classes.authorizationForm}>
        <div className={classes.autoClose} onClick={modalClose}>
          X
        </div>
        <div className={classes.autoTop}>
          <div>Авторизация</div> <div>Регистрация</div>
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
      <Registration/>
    </div>
    </div>
  );
});

export default Authorization;
