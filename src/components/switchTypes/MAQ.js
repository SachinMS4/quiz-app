import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAnswers } from "../../features/quizSlice";

function MAQ({ choices, queTitle, id }) {
  const dispatch = useDispatch();

  const [checkedState, setCheckedState] = useState(
    Array(choices.length).fill(false)
  );
  const [ans, setAns] = useState([]);

  const handleCheckBox = (ind, option) => {
    const currentState = checkedState.map((item, i) =>
      i === ind ? !item : item
    );
    setCheckedState(currentState);

    if (currentState[ind] === true) {
      setAns([...ans, option]);
    } else {
      const curAns = ans.filter((item) => item !== option);
      setAns(curAns);
    }
  };
  useEffect(() => dispatch(userAnswers({ id, userAnswer: ans })), [ans]);

  return (
    <div>
      <h2>{queTitle}</h2>
      {choices.map((choice, i) => (
        <div key={i}>
          <input
            type="checkbox"
            id="option"
            value={choice}
            name="choice"
            checked={checkedState[i]}
            onChange={() => handleCheckBox(i, choice)}
          />
          {choice}
        </div>
      ))}
    </div>
  );
}

export default MAQ;
