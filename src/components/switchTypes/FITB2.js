import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userAnswers } from "../../features/quizSlice";

function FITB2({ queTitle, id }) {
  const [answer, setAnswer] = useState([]);
  const [answer1, answer2] = answer;

  const dispatch = useDispatch();

  function changeHandler(e) {
    if (e.target.name === "answer1")
      setAnswer(() => [e.target.value.toLowerCase(), answer2]);
    else setAnswer([answer1, e.target.value.toLowerCase()]);
  }

  useEffect(() => dispatch(userAnswers({ id, userAnswer: answer })));

  return (
    <div onChange={changeHandler}>
      <h2>{queTitle}</h2>
      <input type="text" name="answer1"></input>
      <input type="text" name="answer2"></input>
    </div>
  );
}

export default FITB2;
