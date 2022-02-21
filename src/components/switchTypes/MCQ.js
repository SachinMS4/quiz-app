import React from "react";
import { useDispatch } from "react-redux";
import { userAnswers } from "../../features/quizSlice";

function MCQ({ choices, queTitle, id }) {
  const dispatch = useDispatch();
  function changeHandler(e) {
    const answer = [e.target.value];
    dispatch(userAnswers({ id, userAnswer: answer }));
  }

  return (
    <div onChange={changeHandler}>
      <h2>{queTitle}</h2>
      {choices.map((choice, i) => (
        <div key={i}>
          <input type="radio" value={choice} name="choice" />
          {choice}
        </div>
      ))}
    </div>
  );
}

export default MCQ;
