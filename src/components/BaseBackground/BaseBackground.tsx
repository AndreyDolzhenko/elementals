import classes from "./BaseBackground.module.scss";

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
    </>
  );
}

export default BaseContent;
