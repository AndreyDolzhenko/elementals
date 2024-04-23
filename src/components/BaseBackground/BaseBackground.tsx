import classes from "./BaseBackground.module.scss";

import Decorates from "../DecorativeElements";
import Gallery from "../Carousel";
import Spotify from "../../assets/icons/spotify.svg?react";
import GooglePodcast from "../../assets/icons/googlePodcast.svg?react";
import Youtube from "../../assets/icons/youtube.svg?react";
import DecoreBottom from "../../assets/icons/decoreBottom.svg?react";
import Time from "../Time";

function BaseContent() { 
const text = Time;
  return (
    <>
      <div className={classes.main_text}>
        Твой фактор<div>Роста</div>
      </div>
      <div className={classes.main_text}>
        с программами корпоративного университета <br></br>
        <span style={{letterSpacing: "3px", color: "#CD4631"}}>ОФИСМАГ</span>
      </div>
      <button>ПРОГРАММЫ</button>
      <Time firstArgument={console.log("Hi")} />
      {console.log(text)}
      <Gallery />
      <div className="media">
        <span>Supported by:</span>
        <Spotify />
        <GooglePodcast />
        <Youtube />
      </div>
      <Decorates />
      <div style={{ position: "absolute", top: "2823px" }}>
        <DecoreBottom />
      </div>
    </>
  );
}

export default BaseContent;
