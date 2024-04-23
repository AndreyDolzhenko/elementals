import React, { useState, useEffect } from "react";
import classes from "./Time.module.scss";

type Props = {
  firstArgument : "",
}

function Clock( { firstArgument } ) {
  // Initialize the current time to the current date and time
  const [time, setTime] = useState(new Date());
  

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Extract the hours, minutes, and seconds from the current time
  const returnDate = time.toLocaleDateString();
  const returnTime = time.toLocaleTimeString();

  const [timeMoment, setTimeMoment] = useState("");

  

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "200px",
          justifyContent: "space-around",
          marginTop: "25px",
        }}
      >
        <h3 className={classes.h3} onClick={(event)=>{setTimeMoment(event.target.innerText), firstArgument = event.target.innerText}}>{returnTime}</h3>
        <h3 >{returnDate}</h3>
        <div>{timeMoment}</div>        
      </div>
    </div>
  );
}

export default Clock;
