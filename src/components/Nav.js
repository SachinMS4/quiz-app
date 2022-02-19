import React from "react";
import { useState } from "react";

import QuizStart from "./QuizStart";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";
import { useSelector } from "react-redux";

function Nav() {
  const [startQuiz, setStartQuiz] = useState(true);
  const { startPage, endPage, quesPage } = useSelector(
    (state) => state.nav.value
  );
  const [curQue, setCurQue] = useState(0);

  return (
    <div>
      {startPage ? <QuizStart /> : null}

      {quesPage ? <QuizQuestion curQue={curQue} setCurQue={setCurQue} /> : null}

      {endPage ? <QuizEnd setCurQue={setCurQue} /> : null}
    </div>
  );
}

export default Nav;
