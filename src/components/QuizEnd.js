import React, { useEffect } from "react";
import Evaluate from "./Evaluate";

function QuizEnd({ setCurQue }) {
  useEffect(() => setCurQue(0));
  return (
    <div>
      <h1>Thank You!</h1>
      <h3>You have successfully submitted the quiz.</h3>
      <Evaluate />
    </div>
  );
}

export default QuizEnd;
