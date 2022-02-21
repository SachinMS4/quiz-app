import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userAnswers } from "../../features/quizSlice";

function FITB1({ queTitle, id }) {
  const [answer, setAnswer] = useState("");

  const dispatch = useDispatch();

  function changeHandler(e) {
    setAnswer(e.target.value);
  }

  useEffect(
    () => dispatch(userAnswers({ id, userAnswer: [answer] })),
    [answer, id, dispatch]
  );

  return (
    <div>
      <h2>{queTitle}</h2>
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default FITB1;
