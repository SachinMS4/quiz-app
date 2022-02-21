import React from "react";
import Evaluate from "./Evaluate";

function QuizEnd({ setCurQue }) {
  return (
    <div>
      <h1>Thank You!</h1>
      <h3>You have successfully submitted the quiz.</h3>
      <Evaluate />
      {/* <button
        onClick={() => {
          setQuizEnded(false);
          setStartQuiz(true);
          setCurQue(0);
        }}>
        Retry
      </button> */}
    </div>
  );
}

export default QuizEnd;
