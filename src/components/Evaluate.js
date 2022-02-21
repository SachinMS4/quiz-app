import React from "react";
import { useSelector } from "react-redux";

function Evaluate() {
  const data = useSelector((state) => state.quiz.value);
  console.log(data);

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  const count = data.reduce((correct_answers, item) => {
    if (arraysEqual(item.answer, item.userAnswer)) return correct_answers + 1;
    else return correct_answers;
  }, 0);

  return (
    <div>
      You have answered {count} out of {data.length} questions correctly, click
      on Retry button to try again.
    </div>
  );
}

export default Evaluate;
