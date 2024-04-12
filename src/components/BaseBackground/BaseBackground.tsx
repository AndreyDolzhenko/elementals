import classes from "./BaseBackground.module.scss";

import Decorates from "../DecorativeElements";
import Gallery from "../Carousel";
import Spotify from "../../assets/icons/spotify.svg?react";
import GooglePodcast from "../../assets/icons/googlePodcast.svg?react";
import Youtube from "../../assets/icons/youtube.svg?react";
import DecoreBottom from "../../assets/icons/decoreBottom.svg?react";

function BaseContent() {
  return (
    <>
      <div className={classes.main_text}>
        Your Daily<div>Contact</div>
      </div>
      <div className={classes.main_text}>
        with those who are interested in you <br></br>and a weekly special guest
      </div>
      <button>SUBSCRIBE</button>
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
