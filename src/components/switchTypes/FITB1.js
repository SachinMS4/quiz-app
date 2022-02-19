import React from "react";
import { useDispatch } from "react-redux";
import { userAnswers } from "../../features/quizSlice";

function FITB1({ queTitle, id }) {
  let answer = "";

  const dispatch = useDispatch();

  function changeHandler(e) {
    answer = e.target.value;
    dispatch(userAnswers({ id, userAnswer: [answer] }));
  }

  return (
    <div>
      <h2>{queTitle}</h2>
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default FITB1;
