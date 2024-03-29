import { useState } from "react";
import { ReactSVG } from "react-svg";
import { useRef } from "react";
import PersonGirl from "./svg/girl1.svg";
import PersonBoy from "./svg/boy1.svg";
import VK from "./svg/vk_1.svg";
import Facebook from "./svg/facebook_1.svg";
import Odnoklassniki from "./svg/odnoklassniki_1.svg";
import Google from "./svg/google.svg";
import "./App.css";


function App() {  
  
  const avaGirl = <img src={PersonGirl} alt="My SVG" />;
  const avaBoy = <img src={PersonBoy} alt="My SVG" />;
  const [person, setPerson] = useState(avaBoy);
  const [auto, setAuto] = useState("");

function authorization() {
  return (
    <div className="authorizationBaze">
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
    onClick={() => setAuto("")}
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

  function header() {
    return (      
      <header>
        <div style={{
          display: "flex", 
          alignItems: "center"
        }}
        >
        <div style={{ width: 250 }}>
        <div id="logo">
          <div id="logoText" style={{ 
            color: "green",
            letterSpacing: ".1rem"
            }}>LEMENTALS</div>
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
          <div title="войти" style={
            {width: 70, cursor: "pointer"}
          } 
          onMouseOver={() => setPerson(avaGirl)}
          onMouseOut={() => setPerson(avaBoy)}
          onClick={() => setAuto(authorization())}
          >
            {person}
          </div>
        </div>        
      </header>
    );
  }

 

  return (
    <>
      <>{auto}</>
      <div>{header()}</div> 
      
      
      
    </>
  );
}

export default App;
