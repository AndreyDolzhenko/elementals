import React, { useState, useEffect } from "react";
import classes from "./Time.module.scss";

const Time: React.FC = () => {
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

  return (
    <div title="Время работает на тебя!">
      <div
        style={{
          display: "flex",
          width: "200px",
          justifyContent: "space-around",
          marginTop: "25px",
        }}
      >
        <h3 className={classes.h3}>
          {returnTime}
        </h3>
        <h3>{returnDate}</h3>
        {/* <div>{timeMoment}</div>         */}
      </div>
    </div>
  );
};

export default Time;
