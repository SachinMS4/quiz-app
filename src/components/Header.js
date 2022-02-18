import React, { useRef, useEffect, useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(50);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <header>
      <h1>Quiz App</h1>
      {minutes === 0 && seconds === 0 ? null : (
        <h1>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
      <button className="header-button">Start</button>
    </header>
  );
};

export default Header;
