
import VK from "./svg/vk_1.svg";
import Facebook from "./svg/facebook_1.svg";
import Odnoklassniki from "./svg/odnoklassniki_1.svg";
import Google from "./svg/google.svg";

export function authorization() {
  
    return (
      <div className="authorizationBaze"
      onClick={(e) => (e.preventDefault(),
        setAuto(false), 
        console.log(e.target)
        )}
      >
        <div className="authorizationForm">        
        <div style={
        {
          textAlign: "end",        
          fontSize: "20px",
          color: "aqua",
          cursor: "pointer",
          margin: "-50px -30px 0 0"
        }
      }
      onClick={(e) => (e.preventDefault(),
        setAuto(false), 
        console.log(e.target)
        )}
      >X</div>
      <div style={
        {
          display: "flex",
          justifyContent: "space-between",
          margin: "30px"
        }
      }>
      <div>Авторизация</div>
      <div style={{textAlign: "end"}}>
        <img style={{width: "7%", cursor: "pointer"}} src={VK} alt="My SVG" />
        <img style={{width: "7%", cursor: "pointer"}} src={Facebook} alt="My SVG" />
        <img style={{width: "7%", cursor: "pointer"}} src={Odnoklassniki} alt="My SVG" />
        <img style={{width: "7%", cursor: "pointer"}} src={Google} alt="My SVG" />
        
      </div>
      </div>
      <div style={{display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column"
      }}>
      <input className="autoInput" type="text" placeholder="Логин" />
      <input className="autoInput" type="text" placeholder="Пароль" />
      <button className="autoInput" id="authorizationButton">Войти</button>
      </div>
      <div style={{display: "flex",
                  justifyContent: "space-between",  
                  margin: "20px 0 10px 15px"
      }}>
        <span className="menu">Регистрация</span><span className="menu">Забыли пароль?</span></div>
      </div>
      </div>
    )
  }
