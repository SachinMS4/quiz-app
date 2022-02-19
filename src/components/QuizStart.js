import React from "react";

import "../styles/QuizStart.css";

import { useSelector } from "react-redux";

function QuizStart({ setStartQuiz, setDisQue }) {
  const data = useSelector((state) => state.quiz.value);
  const totalTime = data.reduce((prev, item) => prev + item.time, 0);

  return (
    <div className="start-container">
      <h2>Your are about to start Quiz</h2>

      <h4>Number of questions : {data.length}</h4>
      <h4>Total time : {totalTime} minutes</h4>

      <h3>Click on above Start button to begin.</h3>
    </div>
  );
}

export default QuizStart;
