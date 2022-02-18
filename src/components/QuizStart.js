import React from "react";

import "../styles/QuizStart.css";

import { useSelector } from "react-redux";

function QuizStart({ setStartQuiz, setDisQue }) {
  const data = useSelector((state) => state.quiz.value);
  const totalTime = data.reduce((prev, item) => prev + item.time, 0);
  console.log(totalTime);

  return (
    <div className="start-container">
      <h2>Your are about to start Quiz</h2>
      <ul>
        <li>Number of questions {data.length}</li>
        <li>Total time {totalTime} minutes</li>
      </ul>
      <button
        onClick={() => {
          setDisQue(true);
          setStartQuiz(false);
        }}>
        Start Quiz
      </button>
    </div>
  );
}

export default QuizStart;
