import React from "react";

function QuizEnd({ setCurQue }) {
  return (
    <div>
      <h1>Thank You!</h1>
      <h3>You have successfully submitted the quiz.</h3>
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
