import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Timer() {
  const data = useSelector((state) => state.quiz.value);
  const totalTime = data.reduce((prev, item) => prev + item.time, 0);

  const [minutes, setMinutes] = useState(totalTime - 1);
  const [seconds, setSeconds] = useState(59);

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
  }, [seconds]);
  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h1>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
    </div>
  );
}

export default Timer;
