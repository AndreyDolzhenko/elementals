import React, { useState, useEffect } from 'react';
import classes from "./Time.module.scss";

function Clock() {
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
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const day = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();

  // Format the time as a string
  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = `${day}:${month+1}:${year}`;

  return (
    <div>
      {/* Display the time string */}
      <div style={{
        display: "flex",
        width: "250px",
        justifyContent: "space-around",
        }}>
      <h3 className={classes.h3}>{timeString}</h3>
      <h3>{dateString}</h3>
      </div>
    </div>
  );
}

export default Clock;