import React from "react";
import { useState } from "react";

import QuizStart from "./QuizStart";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

function Nav() {
  const [startQuiz, setStartQuiz] = useState(true);
  const [quizEnded, setQuizEnded] = useState(false);
  const [disQue, setDisQue] = useState(false); //Display Question

  return (
    <div>
      {startQuiz && !disQue ? (
        <QuizStart setStartQuiz={setStartQuiz} setDisQue={setDisQue} />
      ) : null}

      {disQue ? <QuizQuestion setQuizEnded={setQuizEnded} /> : null}

      {quizEnded ? <QuizEnd /> : null}
    </div>
  );
}

export default Nav;
