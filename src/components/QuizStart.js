import React from "react";

import "../styles/QuizStart.css";

function QuizStart({ setStartQuiz, setDisQue }) {
  return (
    <div className="start-container">
      <h2>Your are about to start Quiz</h2>
      <ul>
        <li>Number of questions 10</li>
        <li>Total time 20</li>
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
