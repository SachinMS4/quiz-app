import React from "react";
import { useDispatch } from "react-redux";
import { userAnswers } from "../../features/quizSlice";

function FITB2({ queTitle, id }) {
  let answer1, answer2;
  answer1 = answer2 = "";
  const dispatch = useDispatch();

  function changeHandler(e) {
    if (e.target.name === "answer1") answer1 = e.target.value.toLowerCase();
    else answer2 = e.target.value.toLowerCase();
    dispatch(userAnswers({ id, userAnswer: [answer1, answer2] }));
  }

  return (
    <div onChange={changeHandler}>
      <h2>{queTitle}</h2>
      <input type="text" name="answer1"></input>
      <input type="text" name="answer2"></input>
    </div>
  );
}

export default FITB2;
